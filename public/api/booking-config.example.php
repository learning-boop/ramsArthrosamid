<?php
/*
 * Copy this file to booking-config.php and fill it in ON THE SERVER, one level ABOVE the website folder
 * (for example /home/youraccount/booking-config.php, next to public_html). Never commit the real file.
 *
 * Find the mail server details in cPanel: Email Accounts > Connect Devices.
 */
return [
    // The mailbox on your hosting that sends the booking emails.
    'from_email' => 'bookings@yourdomain.com',
    'from_name'  => 'Knee Care Clinics website',

    'smtp_host'   => 'mail.yourdomain.com',
    'smtp_port'   => 465,
    'smtp_secure' => 'ssl',                      // 'ssl' for port 465, 'tls' for port 587
    'smtp_user'   => 'bookings@yourdomain.com',
    'smtp_pass'   => 'PUT-THE-MAILBOX-PASSWORD-HERE',

    // Most bookings allowed from one address per 10 minutes.
    'rate_limit'  => 5,

    // For testing: send every booking here instead of the clinic. Empty it before going live.
    'test_to'     => '',
];
