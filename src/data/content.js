export const NAV = [
  { href: '#home', label: 'Home' },
  { href: '#how', label: 'How it works' },
  { href: '#steps', label: 'Your appointment' },
  { href: '#price', label: 'Price' },
  { href: '#clinician', label: 'Your clinician' },
  { href: '#faq', label: 'Questions' },
  { href: '#clinics', label: 'Clinics' },
];

// "Why people choose Arthrosamid®": wording from the SEO plan (section 3), with no outcome promises.
export const WHY_CHOOSE = [
  { title: 'Understand your options.', body: 'Find out how Arthrosamid® differs from other approaches to knee osteoarthritis.' },
  { title: 'Your knee, your decision.', body: 'A consultation helps clarify suitability, expected benefits and possible risks.' },
  { title: 'One knee or both?', body: 'Discuss which knee needs assessment and whether treatment is appropriate.' },
  { title: 'Know the full cost.', body: 'Ask what the consultation and any proposed treatment include.' },
  { title: 'No pressure to decide.', body: 'Get the information you need before committing to an injection.' },
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

// Everything the £2,300 per-knee price covers (shown on the Price card).
export const INCLUSIONS = [
  'Consultation with Ram',
  'Ultrasound scan of the knee',
  'Antibiotics',
  'Joint aspiration (excess fluid drained, where needed)',
  'Ultrasound-guided Arthrosamid® hydrogel injection',
];

// "Also available": other ultrasound-guided injections Ram offers. Plain words, no promises.
export const OTHER_INJECTIONS = [
  { icon: 'gel', aka: 'Gel injection', name: 'Hyaluronic acid', body: 'A lubricating gel that tops up the knee’s natural joint fluid, often used for osteoarthritis. Relief can last several months.' },
  { icon: 'prp', aka: 'PRP', name: 'Platelet-rich plasma', body: 'A concentrate of platelets from a small sample of your own blood, injected to support the body’s natural healing in joints and tendons.' },
  { icon: 'steroid', aka: 'Cortisone', name: 'Steroid injection', body: 'A strong anti-inflammatory that can quickly calm a painful flare-up. Relief usually lasts weeks to a few months.' },
];

export const STEPS = [
  {
    title: 'Consultation and ultrasound scan',
    img: './media/ram-knee-scan.jpg',
    alt: 'Ram Rachaputi scanning a patient’s knee with ultrasound in the clinic',
    body: 'We talk through your symptoms and goals, examine the knee and scan it live with ultrasound. If Arthrosamid® isn’t right for you, we’ll say so.',
  },
  {
    title: 'Antibiotics',
    img: './media/antibiotic.jpg',
    alt: 'A hand offering a tablet alongside a glass of water',
    body: 'You’re given a single dose of antibiotics to help protect the knee from infection.',
    note: 'There’s a 60–90 minute wait after the antibiotics before your injection.',
    noteIcon: 'clock',
  },
  {
    title: 'The ultrasound-guided injection',
    img: './media/arthrosamid-ready.jpg',
    alt: 'An Arthrosamid® pack ready on a sterile trolley beside the ultrasound machine',
    body: 'The knee is numbed, any excess fluid drawn off, and the gel placed under ultrasound guidance in a few seconds. No stitches, just a plaster.',
    note: 'Needle-phobic? Tell us. It’s something we handle every week.',
  },
  {
    title: 'Home the same day',
    img: './media/beach-couple.jpg',
    alt: 'An older couple walking together along a beach',
    body: 'A short rest, then home with written aftercare and a direct number. Most patients are able to drive again after a few hours.',
  },
];

export const CLINICIAN = {
  name: 'Ram Rachaputi',
  fullName: 'RamaKrishna Rachaputi',
  // Protected title as registered with the HCPC (used in the hero).
  statutoryTitle: 'HCPC-registered Consultant Physiotherapist',
  letters: 'BPT, PG Dip, PG Cert, MCSP, MSOR',
  intro: 'Ram is an HCPC-registered consultant physiotherapist, musculoskeletal sonographer and independent prescriber, with more than 25 years of NHS musculoskeletal experience and over 30,000 ultrasound-guided injections behind him.',
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
    { big: '25+ yrs', small: 'NHS musculoskeletal experience' },
    { big: '4', small: 'university-qualified specialisms' },
  ],
  // Large photo mode (replaces the credentials card). Empty = show the credentials card.
  photo: '',
  // Optional small round photo inside the credentials card's ring (instead of the initials).
  avatar: '',
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

// Patient FAQs from the SEO plan (section 4). Clinical answers must be reviewed before publishing.
export const FAQ_GROUPS = [
  {
    title: 'Understanding the treatment',
    items: [
      { q: 'What is an Arthrosamid® knee injection?', a: 'Arthrosamid® is a hydrogel injection intended to help manage symptoms of knee osteoarthritis in adults. It is placed into the knee joint by a trained clinician. It does not replace worn cartilage or cure osteoarthritis. A consultation is needed to decide whether it is appropriate for you.' },
      { q: 'Is Arthrosamid® the same as a steroid knee injection?', a: 'No. Arthrosamid® is a non-absorbable hydrogel, whereas a steroid injection is used to reduce inflammation. They are different treatments with different benefits, limitations and risks. Your clinician can explain which options should be considered alongside exercise and other osteoarthritis care.' },
      { q: 'How is Arthrosamid® different from a hyaluronic acid injection?', a: 'They are not the same product. Arthrosamid® is designed to remain within the joint tissue, while hyaluronic acid is an absorbable injection. That difference alone does not prove one gives better pain relief. UK NICE guidance does not recommend routine hyaluronan injections for osteoarthritis. Ask about the evidence for each option.' },
      { q: 'Will Arthrosamid® repair my knee cartilage?', a: 'Arthrosamid® is intended to manage symptoms; it has not been shown to regrow lost cartilage or reverse arthritis. The aim of any treatment should be discussed in terms of your symptoms and daily activities, with a realistic understanding of benefits and limits.' },
      { q: 'Can Arthrosamid® help if my knee is bone on bone?', a: 'A scan or X-ray description alone cannot tell you whether an injection will help. The clinician needs to review your symptoms, movement, previous treatment and overall health. For advanced osteoarthritis, a discussion about surgery or other care may also be appropriate.' },
      { q: 'Could Arthrosamid® stop me needing a knee replacement?', a: 'Nobody can promise that an injection will prevent or delay knee replacement. If your knee symptoms are seriously affecting everyday life despite appropriate treatment, NICE recommends considering referral for a joint replacement assessment. Discuss your goals and options before deciding.' },
    ],
  },
  {
    title: 'Suitability and safety',
    items: [
      { q: 'Can I have Arthrosamid® injected into both knees?', a: 'Both knees can be discussed at a consultation, but each knee needs its own assessment. Your clinician will advise whether treatment is suitable and whether it should be planned together or separately. Do not assume both knees will be treated in one appointment.' },
      { q: 'Can I have the injection in just one knee?', a: 'Yes, an enquiry can be for one knee. The clinician will assess the knee that is troubling you and explain whether Arthrosamid® is appropriate. If you have symptoms in the other knee, mention those too so that your care is considered properly.' },
      { q: 'I had another knee injection recently. Can I still have Arthrosamid®?', a: 'Tell the clinician what was injected and when. Some earlier injections must have been absorbed before Arthrosamid® is considered, and certain non-absorbable implants mean it should not be used. Do not book an injection without sharing your previous treatment history.' },
      { q: 'Who should not have an Arthrosamid® injection?', a: 'The manufacturer lists circumstances where it should not be used, including infection in or around the knee, certain previous implants, knee replacement, recent knee arthroscopy and some bleeding or blood-thinning conditions. A clinician must check your full history and the current product safety information before treatment.' },
      { q: 'Is Arthrosamid® suitable if I have diabetes or take immune-suppressing medicine?', a: 'These conditions need individual medical review. The manufacturer advises caution with uncontrolled diabetes, a weakened immune system and some other health conditions. Tell the clinician about your medicines, infections and planned procedures before any decision is made.' },
      { q: 'Can I have Arthrosamid® after a knee replacement?', a: 'The manufacturer lists a previous knee replacement or foreign material in that knee among reasons not to inject Arthrosamid®. Tell the clinic about all previous knee surgery and implants so you can be directed to appropriate advice.' },
    ],
  },
  {
    title: 'Appointment and recovery',
    items: [
      { q: 'What happens during an Arthrosamid® consultation?', a: 'The consultation includes discussing your symptoms and goals, examining the knee and, where appropriate, an ultrasound scan. The clinician should explain available options, possible risks, costs and whether an injection makes sense for your situation. You should have time to ask questions before deciding.' },
      { q: 'Will I need an ultrasound scan before the injection?', a: 'An ultrasound scan is part of our consultation process, and ultrasound guidance may also be used during the procedure. However, not everyone with knee osteoarthritis needs routine imaging for diagnosis. The clinician will explain when a scan is useful in your assessment.' },
      { q: 'Does an Arthrosamid® injection hurt?', a: 'You may feel discomfort during or after the injection. A local anaesthetic is used, and the clinician should explain the steps and pain-control options in advance. If you are worried about needles, say so when you enquire.' },
      { q: 'Why might antibiotics be given before an Arthrosamid® injection?', a: 'Antibiotics are part of our treatment pathway to reduce infection risk. Tell the clinician about any allergies or previous reactions to antibiotics. They should confirm the exact medicine and timing for you at the appointment.' },
      { q: 'Can I drive home after Arthrosamid® treatment?', a: 'Do not assume you will be fit to drive immediately. Advice depends on your knee, how you feel, any medicines used and the clinician’s aftercare instructions. Ask the clinic before your appointment so you can arrange transport if needed.' },
      { q: 'How long does recovery take after an Arthrosamid® injection?', a: 'Recovery and symptom changes vary. Some people experience discomfort or swelling after an injection, and activity advice should be tailored to the individual. Follow the aftercare plan provided by your clinician rather than a fixed online timetable.' },
      { q: 'Which symptoms after a knee injection need urgent advice?', a: 'Contact your treating team promptly if the knee becomes very painful, red, hot or markedly swollen, or if you have signs of infection. The manufacturer warns that infection requires immediate treatment. Use urgent medical services if you are seriously unwell or cannot reach the team.' },
    ],
  },
  {
    title: 'Results, cost and booking',
    items: [
      { q: 'When should I expect to notice a difference?', a: 'People respond differently, and there is no reliable timetable for every patient. Ask the clinician what the published studies show, what the uncertainty is and how any progress would be reviewed. Avoid treating another patient’s experience as a promise about your own knee.' },
      { q: 'How long can Arthrosamid® pain relief last?', a: 'Arthrosamid® is designed to remain in joint tissue, but that is not the same as a guarantee of lasting symptom relief. Published studies report outcomes over different follow-up periods. The clinician should explain the evidence and its limitations in relation to your condition.' },
      { q: 'What happens if Arthrosamid® does not help me?', a: 'Arrange a clinical review rather than assuming you need another injection. Your clinician can reassess the diagnosis and discuss exercise, pain management, other treatments or a specialist referral if appropriate. An injection is one possible part of knee osteoarthritis care.' },
      { q: 'How much does a private Arthrosamid® injection cost?', a: 'The full treatment pathway is £2,300 per knee, and a consultation and ultrasound assessment on its own is £150. Confirm the latest fee and exactly what is included before booking. Prices may differ between providers.' },
      { q: 'Is Arthrosamid® available through the NHS?', a: 'We can’t say whether it is available to you through the NHS. Ask your NHS clinician or local service what treatments and pathways are available to you. This website describes a private consultation and treatment route.' },
      { q: 'How do I arrange an appointment with Ram Rachaputi?', a: 'Use the consultation request form to choose a preferred location and leave your contact details. The booking team will explain appointment availability and who will contact you. Suitability for the injection is decided by a clinician after assessment, not by completing the online form.' },
      { q: 'Where can I see Ram Rachaputi for an Arthrosamid® consultation?', a: 'Ram currently sees patients in Birmingham, Leicester, Rugby, Milton Keynes and Newcastle. Appointments take place at host clinics run by separate businesses, so confirm availability and the venue before travelling.' },
    ],
  },
];

// Joint Care Clinics locations where Ram sees patients (from jointcareclinics.co.uk/contact).
// "What happens at your assessment" on the /ram-rachaputi profile page.
export const ASSESSMENT = [
  { title: 'Your symptoms and goals', body: 'Ram asks about your knee, your history and what you want to be able to do again.' },
  { title: 'Examination and ultrasound scan', body: 'He examines the knee and, where appropriate, scans it live with ultrasound so you can see what’s happening.' },
  { title: 'Your options explained', body: 'He explains whether Arthrosamid® or another approach may suit you, including possible risks and the full cost.' },
  { title: 'Decide in your own time', body: 'There’s no pressure to go ahead on the day. If treatment isn’t right for you, he’ll tell you.' },
];

export const CLINICS = [
  { slug: 'birmingham', inbox: 'jointcare', name: 'Birmingham & Solihull', address: '265B Alcester Road South, King’s Heath, Birmingham B14 6DT' },
  { slug: 'leicester', inbox: 'jointcare', name: 'Leicester', address: 'No 1, Holmfield Court, Holmfield Road, Leicester LE2 1SD' },
  { slug: 'rugby', inbox: 'jointcare', name: 'Rugby', address: '78 Clifton Road, Rugby, Warwickshire CV21 3QT' },
  { slug: 'milton-keynes', inbox: 'jointcare', name: 'Milton Keynes', address: 'ISIS Chiropractic, ISIS House, Tilers Road, Kiln Farm, Milton Keynes MK11 3EA' },
  // From jointcarenortheast.co.uk. The map search uses the host clinic's name, which is what Google Maps lists.
  { slug: 'newcastle', inbox: 'northeast', name: 'Newcastle', operator: 'Joint Care North East', address: 'Dr Matla Clinic, Old Brewery Court, Starbeck Avenue, Jesmond, Newcastle upon Tyne NE2 1XG', mapsQuery: 'Dr Matla Clinic, Old Brewery Court, Starbeck Avenue, Jesmond, Newcastle upon Tyne NE2 1XG' },
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
