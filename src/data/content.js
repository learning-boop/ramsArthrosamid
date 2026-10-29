export const NAV = [
  { href: '#home', label: 'Home' },
  { href: '#how', label: 'How it works' },
  { href: '#steps', label: 'Your appointment' },
  { href: '#clinician', label: 'Your clinician' },
  { href: '#faq', label: 'Questions' },
  { href: '#clinics', label: 'Clinics' },
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
    body: 'Unlike cortisone or hyaluronic acid, it isn’t absorbed. Pain relief has been reported for up to five years after one injection.',
    icon: 'clock',
  },
];

export const STATS = [
  { value: 1, prefix: '', suffix: '', label: 'injection. No course to complete, no top-ups scheduled.' },
  { value: 5, prefix: 'up to ', suffix: ' yrs', label: 'of pain relief reported in clinical follow-up after a single treatment.' },
  { value: 30000, prefix: '', suffix: '+', label: 'ultrasound-guided injections carried out by our lead clinician.', comma: true },
  { value: 20, prefix: '', suffix: '+ yrs', label: 'of NHS musculoskeletal experience behind every appointment.' },
];

export const STEPS = [
  {
    title: 'Consultation and scan',
    img: './media/knee-exam.jpg',
    alt: 'A clinician examining a patient’s knee on a treatment couch',
    body: 'We talk through your symptoms and goals, examine the knee and scan it live with ultrasound. If Arthrosamid® isn’t right for you, we’ll say so.',
  },
  {
    title: 'The injection',
    img: './media/ultrasound.jpg',
    alt: 'A clinician in blue gloves adjusting an ultrasound machine',
    body: 'The knee is numbed, any excess fluid drawn off, and the gel placed under ultrasound guidance in a few seconds. No stitches, just a plaster.',
    note: 'Needle-phobic? Tell us. It’s something we handle every week.',
  },
  {
    title: 'Home the same day',
    img: './media/beach-couple.jpg',
    alt: 'An older couple walking together along a beach',
    body: 'A short rest, then home with written aftercare and a direct number. Please arrange a lift; you can’t drive for a few hours.',
  },
];

export const CLINICIAN = {
  name: 'Ram Rachaputi',
  fullName: 'RamaKrishna Rachaputi',
  letters: 'BPT, PG Dip, PG Cert, MCSP, MSOR',
  intro: 'Ram is an HCPC-registered consultant physiotherapist, musculoskeletal sonographer and independent prescriber, with more than 20 years of NHS musculoskeletal experience and over 30,000 ultrasound-guided injections behind him.',
  quals: [
    'Bachelor of Physiotherapy, Karnatak University, 2001',
    'Postgraduate Diploma in Neuromusculoskeletal Healthcare, Keele University, 2003',
    'Injection therapy, 2012, and postgraduate certification in musculoskeletal diagnostic and interventional ultrasound',
    'Practised at King’s College Hospital London, York University Hospital, Coventry University Hospital, Warwick & Stratford, Walsall Manor (Birmingham), Freeman Hospital Newcastle and Ashford & St Peter’s',
    'Worked across radiology, rheumatology and physiotherapy departments, in hospitals and private clinics',
    'Advanced procedures including SI joint, facet joint and coccyx injections, hydrodilatation for frozen shoulder, barbotage for calcific tendinopathy, and hyaluronic acid injections',
    'Several thousand diagnostic scans and more than 30,000 ultrasound-guided injections, including many patients with needle phobia',
  ],
  registrations: ['Accredited Arthrosamid® provider', 'HCPC registered', 'Chartered Society of Physiotherapy', 'Society of Radiographers'],
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
  { q: 'What should I expect afterwards?', a: 'Some swelling, tightness or heaviness in the first week is normal while the knee settles. Improvement usually builds over two to six weeks, and we review how you’re moving at three to twelve months.' },
  { q: 'How long does it last?', a: 'Arthrosamid® isn’t absorbed like steroid or hyaluronic acid injections. Clinical follow-up reports sustained pain relief up to five years after a single injection, though every knee responds differently.' },
  { q: 'What are the side effects?', a: 'Usually temporary pain, swelling or a feeling of tightness that settles within days to a few weeks. Infection is rare, which is why you have antibiotics on the day.' },
  { q: 'Can I have both knees treated?', a: 'Yes. Each knee is treated separately, and we’ll advise whether to do both on the same day or stage them.' },
  { q: 'Can I drive home afterwards?', a: 'No. Please bring someone or arrange transport. Most motor insurance won’t cover you for a few hours after a local anaesthetic.' },
];

// Joint Care Clinics locations where Ram sees patients (from jointcareclinics.co.uk/contact).
export const CLINICS = [
  { name: 'Birmingham & Solihull', address: '265B Alcester Road South, King’s Heath, Birmingham B14 6DT' },
  { name: 'Leicester', address: 'No 1, Holmfield Court, Holmfield Road, Leicester LE2 1SD' },
  { name: 'Rugby', address: '78 Clifton Road, Rugby, Warwickshire CV21 3QT' },
  { name: 'Milton Keynes', address: 'ISIS Chiropractic, ISIS House, Tilers Road, Kiln Farm, Milton Keynes MK11 3EA' },
];

// Trust band under the hero. Every item is a fact stated elsewhere on the page.
export const CREDENTIALS = [
  { big: '30,000+', small: 'ultrasound-guided injections' },
  { big: 'HCPC', small: 'registered clinician' },
  { big: 'Accredited', small: 'Arthrosamid® provider' },
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
