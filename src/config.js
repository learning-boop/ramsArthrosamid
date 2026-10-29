// Edit these in one place. Everything on the page reads from here.
export const CLINIC = {
  name: 'Joint Care Clinics',
  tagline: 'Move Better – Feel Better',
  phoneDisplay: '0333 444 2013',
  phoneHref: 'tel:+443334442013',
  email: 'info@jointcareclinics.co.uk',
  postalAddress: '78 Clifton Road, Rugby, Warwickshire, CV21 3QT',
  website: 'https://jointcareclinics.co.uk',
  // Every "Book a consultation" button goes here.
  bookingUrl: 'https://jointcareclinics.co.uk/contact/',
};

// Public brand shown in the logo, page title and copyright. Joint Care Clinics (CLINIC above)
// stays the business named on contact details, since it handles enquiries and appointments.
export const BRAND = {
  name: 'Knee Care Clinics',
};

export const PRICE = {
  perKnee: '£2,300',
  consultationAndScan: '£150',
  cortisone: '£300',
  hyaluronicFrom: '£350',
};

// Hero background film. Swap in your own footage by replacing public/media/hero.mp4 (and the poster frame).
// Stock clip: "Grandfather and grandson walking in forest" by Pexels contributor, Pexels licence (pexels.com/license):
// free for commercial use; don't caption the people as patients or imply they endorse the treatment.
// Mirrored, first 16 s with a cross-faded loop, H.264 + faststart. hero.mp4 is 1920x1012 (~7.3 MB);
// hero-mobile.mp4 is a 720x942 crop centred on the couple (~3.4 MB) for screens up to 760px wide.
export const HERO_VIDEO = {
  src: './media/hero.mp4',
  mobileSrc: './media/hero-mobile.mp4',
  poster: './media/hero-poster.jpg',
};

// Opening hours (UK time). `days` uses JavaScript day numbers: 0 = Sunday … 6 = Saturday.
export const OPENING_HOURS = [
  { label: 'Monday to Friday', days: [1, 2, 3, 4, 5], open: '09:00', close: '19:00', display: '9am – 7pm' },
  { label: 'Saturday', days: [6], open: '10:00', close: '17:00', display: '10am – 5pm' },
  { label: 'Sunday', days: [0], display: 'Closed' },
];
