export const NAV = [
  { href: '#home', label: 'Home' },
  { href: '#how', label: 'How it works' },
  { href: '#steps', label: 'Your appointment' },
  { href: '#price', label: 'Price' },
  { href: '#clinician', label: 'Your clinician' },
  { href: '#faq', label: 'Questions' },
  { href: 'https://jointcareclinics.co.uk/contact/', label: 'Contact' },
];

// "You know the feeling": the everyday moments knee osteoarthritis takes over.
export const PAIN_MOMENTS = [
  { icon: 'morning', title: 'Morning stiffness', body: 'The first steps of the day are the hardest, until the knee loosens.' },
  { icon: 'stairs', title: 'Pain on stairs', body: 'Going up is hard, coming down is worse. You start avoiding them.' },
  { icon: 'sitting', title: 'Aching after sitting', body: 'A car journey, a film, a meal out, and standing up again hurts.' },
  { icon: 'swelling', title: 'Swelling and stiffness', body: 'A tight, warm, puffy knee that won’t bend the way it used to.' },
];

export const STAGES = [
  {
    title: 'A soft gel, placed precisely',
    body: 'A single 6 ml dose of hydrogel is placed into the knee under live ultrasound, so it goes exactly where it should.',
    icon: 'needle',
  },
  {
    title: 'It becomes part of the lining',
    body: 'Over the following weeks it joins the joint lining, forming a cushioning layer that calms pain, stiffness and swelling.',
    icon: 'lining',
  },
  {
    title: 'And it stays',
    body: 'Unlike cortisone or hyaluronic acid, it isn’t absorbed. Pain relief has been reported four years after one injection.',
    icon: 'clock',
  },
];

export const STATS = [
  { value: 1, prefix: '', suffix: '', label: 'injection. No course to complete, no top-ups scheduled.' },
  { value: 4, prefix: 'up to ', suffix: ' yrs', label: 'of pain relief reported in clinical follow-up after a single treatment.' },
  { value: 30000, prefix: '', suffix: '+', label: 'ultrasound-guided injections carried out by our lead clinician.', comma: true },
  { value: 20, prefix: '', suffix: '+ yrs', label: 'of NHS musculoskeletal experience behind every appointment.' },
];

export const STEPS = [
  {
    title: 'Consultation',
    body: 'We talk through your symptoms and goals, and examine the knee. If Arthrosamid® isn’t right for you, we’ll say so.',
  },
  {
    title: 'Diagnostic ultrasound scan',
    body: 'A live scan confirms the diagnosis and rules out other causes of knee pain. You see the images as we go.',
  },
  {
    title: 'Preparing the joint',
    body: 'Local anaesthetic numbs the area, any excess fluid is drawn off, and you have a single dose of antibiotics.',
  },
  {
    title: 'The Arthrosamid® injection',
    body: 'Guided by ultrasound, the injection itself takes a few seconds. No stitches, just a small plaster.',
    note: 'Needle-phobic? Tell us. It’s something we handle every week.',
  },
  {
    title: 'Observation and aftercare',
    body: 'A short rest, then home the same day with written aftercare. Please arrange a lift; you can’t drive for a few hours.',
  },
];

export const TIMELINE = [
  { when: 'Day 0', body: 'Walk out the same day. The knee is numb for a couple of hours while the anaesthetic wears off.' },
  { when: 'Days 1 – 7', body: 'Some swelling, tightness or a feeling of heaviness is normal while the knee settles. Relative rest and gentle movement.' },
  { when: 'Weeks 2 – 6', body: 'Improvement usually builds as irritation calms and the gel integrates with the lining.' },
  { when: 'Months 3 – 12', body: 'Benefits continue. We review how you’re moving and what you’re back to doing.' },
  { when: 'Up to 4 years', body: 'Clinical follow-up reports sustained pain reduction four years after a single injection.', last: true },
];

export const INCLUSIONS = [
  'Clinical consultation with a consultant physiotherapist',
  'Diagnostic ultrasound scan of the knee',
  'Joint fluid aspiration, where needed',
  'Single-dose antibiotics',
  'Local anaesthetic',
  'Ultrasound-guided Arthrosamid® injection (6 ml)',
  'Written aftercare and a direct contact number',
];

export const CLINICIAN = {
  name: 'Ram Rachaputi',
  letters: 'BPT, PG Dip, PG Cert, MCSP, MSOR',
  intro: 'Ram is an HCPC-registered consultant physiotherapist, musculoskeletal sonographer and independent prescriber, with more than 20 years of NHS musculoskeletal experience and over 30,000 ultrasound-guided injections behind him.',
  quals: [
    'Bachelor of Physiotherapy, Karnatak University, 2001',
    'Postgraduate Diploma in Neuromusculoskeletal Healthcare, Keele University, 2003',
    'Injection therapy, 2012, and postgraduate certification in musculoskeletal diagnostic and interventional ultrasound',
    'Practised at King’s College Hospital London, York, Coventry, Warwick, Walsall Manor, Freeman Newcastle and Ashford & St Peter’s',
    'Several thousand diagnostic scans and more than 30,000 ultrasound-guided injections, including many patients with needle phobia',
  ],
  registrations: ['HCPC registered', 'Chartered Society of Physiotherapy', 'Society of Radiographers'],
  role: 'Consultant physiotherapist · MSK sonographer · Independent prescriber',
  // Shown on the credentials card (used while there's no photo). All facts from the profile above.
  highlights: [
    { big: '30,000+', small: 'ultrasound-guided injections' },
    { big: '20+ yrs', small: 'NHS musculoskeletal experience' },
    { big: '4', small: 'university-qualified specialisms' },
  ],
  // Optional. With no photo, a credentials card is shown instead. To add one later,
  // drop it in /public and set photo: './ram-rachaputi.jpg'
  photo: '',
};

export const FEATURED_REVIEW = {
  quote: 'Having played professional sport from 1989 to 2008 I’ve amassed plenty of aches and pains after numerous operations. I’ve seen some of the best doctors and surgeons out there, and Ram has been right up there with his care and skill. Never in a rush, he’s kind, compassionate and very professional. Not only helped me with knee and shoulder pain, he’s also treated my wife for elbow pain.',
  name: 'Darren Gough',
  role: 'former England cricketer',
};

export const REVIEWS = [
  { quote: 'After my guided knee injections, I was able to run again. Not only was the pain gone, but I found myself running further, faster. I have recently gone back to him for a shoulder pain, and that too has been cured.', name: 'Satt Sembhy', context: 'Ultrasound-guided knee injections' },
  { quote: 'I have now had three ultrasound procedures with Ram (knee, hand and shoulder), and as a doctor myself, I appreciate his approach and would refer to him without hesitation. If there is something to be diagnosed, he will do so.', name: 'William Wolf', context: 'Knee ultrasound procedure' },
  { quote: 'I suffered pain in my knee for a very long time and had different diagnoses from various specialists. Within two weeks I was no longer taking the prescribed medication. Ram found a problem that no other specialist had found.', name: 'David Render', context: 'Knee pain treatment' },
  { quote: 'Had a knee consultation with Ram. Was very impressed with the service. Had numerous scans and was shown exactly what was going on. Superb.', name: 'Katie Loydall', context: 'Knee ultrasound scan' },
  { quote: 'I have been using Ram for many years now, for my performance, injuries and general training recovery. I have always had huge success after seeing Ram. He is truly world-class at what he does.', name: 'Richard Kilty', context: 'Captain, British athletics team' },
];

export const FAQS = [
  { q: 'Does the injection hurt?', a: 'Most people feel pressure rather than pain. The skin is numbed first, and ultrasound guidance keeps the injection brief. If you’re needle-phobic, just tell us when you book.' },
  { q: 'How long does the appointment take?', a: 'Around 60 minutes for the consultation, scan, injection and a short rest. The injection itself takes a few seconds.' },
  { q: 'When will I notice a difference?', a: 'It isn’t an instant painkiller. Most people notice improvement over days to weeks, building as the gel settles in. A mild flare in the first week is common.' },
  { q: 'What are the side effects?', a: 'Usually temporary pain, swelling or a feeling of tightness that settles within days to a few weeks. Infection is rare, which is why you have antibiotics on the day.' },
  { q: 'Can I have both knees treated?', a: 'Yes. Each knee is treated separately, and we’ll advise whether to do both on the same day or stage them.' },
  { q: 'Can I drive home afterwards?', a: 'No. Please bring someone or arrange transport. Most motor insurance won’t cover you for a few hours after a local anaesthetic.' },
];

// Official addresses from jointcareclinics.co.uk/contact. All clinics book through 0333 444 2013.
export const CLINICS = [
  { name: 'Rugby', area: '78 Clifton Road, Rugby, Warwickshire CV21 3QT' },
  { name: 'Birmingham & Solihull', area: '265B Alcester Rd S, King’s Heath, Birmingham B14 6DT' },
  { name: 'Leicester', area: 'No 1, Holmfield Court, Holmfield Rd, Leicester LE2 1SD' },
  { name: 'Milton Keynes', area: 'ISIS Chiropractic, ISIS House, Tilers Rd, Kiln Farm, Milton Keynes MK11 3EA' },
];

export const CLINIC_OPTIONS = ['Rugby', 'Birmingham & Solihull', 'Leicester', 'Milton Keynes', 'Home visit', 'Not sure yet'];

// Photography (Pexels licence: free commercial use; captions describe activities, never present people as patients).
// Replace with your own photos in public/media/ any time.
export const GALLERY = [
  { src: './media/life-grandchild.jpg', alt: 'A grandfather laughing as he carries his grandchild on his shoulders', caption: 'Carrying the grandchildren again.', ratio: '4 / 5' },
  { src: './media/life-cycle.jpg', alt: 'An older man in a helmet cycling towards the camera along a country lane', caption: 'Back on the bike.', ratio: '3 / 4' },
  { src: './media/life-couple.jpg', alt: 'A smiling older couple walking their small dog along a woodland path', caption: 'Walking further, together.', ratio: '4 / 5' },
];

// Trust band under the hero. Every item is a fact stated elsewhere on the page.
export const CREDENTIALS = [
  { big: '30,000+', small: 'ultrasound-guided injections' },
  { big: 'HCPC', small: 'registered clinician' },
  { big: '20+ yrs', small: 'NHS musculoskeletal experience' },
  { big: 'CE-marked', small: 'Arthrosamid® hydrogel' },
];

// Before/after patient videos. The section stays hidden while this list is empty.
// Only add real patients, filmed with their written consent, and keep both clips the same length and framing.
// Put the files in public/media/patients/ and add an entry like this:
// {
//   name: 'Margaret, 67',                       // first name + age, or initials, as the patient agreed
//   knee: 'Right knee, moderate osteoarthritis',
//   when: 'Filmed 8 weeks after treatment',
//   before: './media/patients/margaret-before.mp4',
//   after: './media/patients/margaret-after.mp4',
//   poster: './media/patients/margaret-after.jpg', // optional still frame
//   quote: 'I can do the stairs without holding the rail again.', // optional, the patient's own words
//   ratio: '16 / 9',                            // optional; use '9 / 16' for upright phone footage
// },
export const BEFORE_AFTER = [];
