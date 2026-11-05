<?php
/**
 * Booking form endpoint. Receives a JSON booking from book.html and emails it to the inbox of the
 * chosen clinic. Recipients are fixed here and never taken from the request, so this script can't be
 * used to send email to anyone else. Patient details are not stored or logged.
 *
 * Settings (mailbox and password) live in booking-config.php, outside the website folder.
 * See booking-config.example.php.
 */

use PHPMailer\PHPMailer\Exception as MailException;
use PHPMailer\PHPMailer\PHPMailer;

const INBOX_JOINT_CARE = 'info@jointcareclinics.co.uk';
const INBOX_NORTH_EAST = 'info@jointcarenortheast.co.uk';

const CLINICS = [
    'birmingham'    => ['name' => 'Birmingham & Solihull', 'address' => '265B Alcester Road South, King’s Heath, Birmingham B14 6DT', 'to' => INBOX_JOINT_CARE],
    'leicester'     => ['name' => 'Leicester', 'address' => 'No 1, Holmfield Court, Holmfield Road, Leicester LE2 1SD', 'to' => INBOX_JOINT_CARE],
    'rugby'         => ['name' => 'Rugby', 'address' => '78 Clifton Road, Rugby, Warwickshire CV21 3QT', 'to' => INBOX_JOINT_CARE],
    'milton-keynes' => ['name' => 'Milton Keynes', 'address' => 'ISIS Chiropractic, ISIS House, Tilers Road, Kiln Farm, Milton Keynes MK11 3EA', 'to' => INBOX_JOINT_CARE],
    'newcastle'     => ['name' => 'Newcastle (Joint Care North East)', 'address' => 'Dr Matla Clinic, Old Brewery Court, Starbeck Avenue, Jesmond, Newcastle upon Tyne NE2 1XG', 'to' => INBOX_NORTH_EAST],
];

const OPTIONS = [
    'treatment'    => 'Full Arthrosamid® hydrogel treatment',
    'consultation' => 'Consultation and ultrasound scan only',
    'other'        => 'Another injection (hyaluronic acid, PRP or steroid)',
    'unsure'       => 'Not sure yet, would like advice',
];

const KNEES = ['Right', 'Left', 'Both', 'Not sure'];

// Requests answered faster than this were not filled in by a person.
const MIN_SECONDS_TO_FILL = 3;

function respond(int $status, array $body): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($body);
    exit;
}

/** Single-line text: no control characters (which also blocks email header injection). */
function line($value, int $max): string
{
    if (!is_string($value)) {
        return '';
    }
    $value = trim(preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value) ?? '');
    return mb_substr($value, 0, $max, 'UTF-8');
}

function loadConfig(): ?array
{
    $root = $_SERVER['DOCUMENT_ROOT'] ?? '';
    $candidates = [];
    if ($root !== '') {
        $candidates[] = dirname($root) . '/booking-config.php'; // preferred: outside the website folder
    }
    $candidates[] = __DIR__ . '/booking-config.php';
    foreach ($candidates as $path) {
        if (is_file($path)) {
            $config = require $path;
            return is_array($config) ? $config : null;
        }
    }
    return null;
}

/** Allows `limit` requests per 10 minutes from one address. Keeps only a hash and a count. */
function withinRateLimit(int $limit): bool
{
    $key = hash('sha256', 'booking|' . __DIR__ . '|' . ($_SERVER['REMOTE_ADDR'] ?? ''));
    $file = sys_get_temp_dir() . '/booking-rl-' . $key;
    $handle = @fopen($file, 'c+');
    if ($handle === false) {
        return true; // never block a patient because the counter can't be written
    }
    flock($handle, LOCK_EX);
    $data = json_decode((string) stream_get_contents($handle), true);
    $now = time();
    if (!is_array($data) || ($data['start'] ?? 0) < $now - 600) {
        $data = ['start' => $now, 'count' => 0];
    }
    $data['count']++;
    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, json_encode($data));
    flock($handle, LOCK_UN);
    fclose($handle);
    return $data['count'] <= $limit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['success' => false, 'message' => 'Method not allowed.']);
}

// Only accept requests sent from this website.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== parse_url('//' . ($_SERVER['HTTP_HOST'] ?? ''), PHP_URL_HOST)) {
    respond(403, ['success' => false, 'message' => 'Not allowed.']);
}

$raw = file_get_contents('php://input', false, null, 0, 20000);
$input = json_decode((string) $raw, true);
if (!is_array($input)) {
    respond(400, ['success' => false, 'message' => 'Invalid request.']);
}

// Bots: pretend it worked and send nothing.
if (line($input['website'] ?? '', 200) !== '' || (int) ($input['elapsed'] ?? 0) < MIN_SECONDS_TO_FILL) {
    respond(200, ['success' => true]);
}

$clinicKey = is_string($input['clinic'] ?? null) ? $input['clinic'] : '';
$optionKey = is_string($input['option'] ?? null) ? $input['option'] : '';
$knee      = is_string($input['knee'] ?? null) ? $input['knee'] : '';
$name      = line($input['name'] ?? '', 120);
$phone     = line($input['phone'] ?? '', 40);
$email     = line($input['email'] ?? '', 200);
$message   = is_string($input['message'] ?? null) ? trim(mb_substr($input['message'], 0, 3000, 'UTF-8')) : '';

if (
    !isset(CLINICS[$clinicKey]) || !isset(OPTIONS[$optionKey]) || !in_array($knee, KNEES, true)
    || $name === '' || strlen(preg_replace('/\D/', '', $phone)) < 10
    || ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL))
    || ($input['consent'] ?? false) !== true
) {
    respond(422, ['success' => false, 'message' => 'Please check the form and try again.']);
}

$config = loadConfig();
if ($config === null || empty($config['from_email'])) {
    error_log('Booking form: booking-config.php is missing or incomplete.');
    respond(503, ['success' => false, 'message' => 'Booking email is not set up.']);
}

if (!withinRateLimit((int) ($config['rate_limit'] ?? 5))) {
    respond(429, ['success' => false, 'message' => 'Too many requests. Please try again later.']);
}

require __DIR__ . '/lib/phpmailer/Exception.php';
require __DIR__ . '/lib/phpmailer/PHPMailer.php';
require __DIR__ . '/lib/phpmailer/SMTP.php';

$clinic = CLINICS[$clinicKey];
$body = implode("\n", [
    'New Arthrosamid® consultation request from the website.',
    '',
    'Clinic:         ' . $clinic['name'],
    'Address:        ' . $clinic['address'],
    'Interested in:  ' . OPTIONS[$optionKey],
    'Knee:           ' . $knee,
    '',
    'Name:           ' . $name,
    'Phone:          ' . $phone,
    'Email:          ' . ($email !== '' ? $email : 'Not given'),
    '',
    'Message:',
    $message !== '' ? $message : '(none)',
    '',
    '--',
    'Contact consent given on the website booking form.',
]);

$mail = new PHPMailer(true);
try {
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->Timeout = 20;
    if (!empty($config['smtp_host'])) {
        $mail->isSMTP();
        $mail->Host = $config['smtp_host'];
        $mail->Port = (int) ($config['smtp_port'] ?? 465);
        $secure = $config['smtp_secure'] ?? 'ssl';
        $mail->SMTPSecure = $secure === 'ssl' ? PHPMailer::ENCRYPTION_SMTPS : ($secure === 'tls' ? PHPMailer::ENCRYPTION_STARTTLS : '');
        $mail->SMTPAutoTLS = $secure !== 'none';
        $mail->SMTPAuth = !empty($config['smtp_user']);
        if ($mail->SMTPAuth) {
            $mail->Username = $config['smtp_user'];
            $mail->Password = $config['smtp_pass'] ?? '';
        }
    } else {
        $mail->isMail(); // the server's own mail function, when no mailbox login is configured
    }
    $mail->setFrom($config['from_email'], $config['from_name'] ?? 'Website booking form');
    $mail->addAddress(!empty($config['test_to']) ? $config['test_to'] : $clinic['to']);
    if ($email !== '') {
        $mail->addReplyTo($email, $name);
    }
    $mail->Subject = 'Arthrosamid® consultation request – ' . $clinic['name'];
    $mail->Body = $body;
    $mail->send();
} catch (MailException $e) {
    // ErrorInfo describes the mail server's response; it doesn't contain the message body.
    error_log('Booking form: could not send for clinic ' . $clinicKey . ': ' . $mail->ErrorInfo);
    respond(502, ['success' => false, 'message' => 'Could not send.']);
}

respond(200, ['success' => true]);
