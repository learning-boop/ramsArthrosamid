import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Reveal from './Reveal.jsx';
import Clinics from './Clinics.jsx';
import { ClinicianCard } from './Clinician.jsx';
import { Phone } from './Icons.jsx';
import { CLINICIAN, ASSESSMENT } from '../data/content.js';
import { CLINIC } from '../config.js';

/** /ram-rachaputi: practitioner profile. Only facts already published on the site. */
export default function RamPage() {
  return (
    <>
      <Header onHome={false} />
      <main>
        <section className="book-hero" aria-labelledby="ramTitle">
          <div className="wrap">
            <p className="kicker">Your clinician</p>
            <h1 className="h2" id="ramTitle">{CLINICIAN.fullName} (Ram)</h1>
            <p className="lead">{CLINICIAN.statutoryTitle}, musculoskeletal sonographer and independent prescriber. {CLINICIAN.letters}</p>
          </div>
        </section>

        <section className="section clin profile" aria-labelledby="aboutRam">
          <div className="wrap">
            <ClinicianCard />
            <div>
              <h2 className="h2" id="aboutRam">About Ram</h2>
              <p className="lead measure">{CLINICIAN.intro}</p>
              <h3 className="h3 profile__sub">Registrations and memberships</h3>
              <div className="clin__regs">
                {CLINICIAN.registrations.map((r) => <span key={r}><i aria-hidden="true" />{r}</span>)}
              </div>
              <p className="profile__check">
                You can check any physiotherapist’s registration on the <a href="https://www.hcpc-uk.org/check-the-register/" target="_blank" rel="noopener noreferrer">HCPC register</a>.
              </p>
              <h3 className="h3 profile__sub">Qualifications and experience</h3>
              <ul className="profile__quals">
                {CLINICIAN.quals.map((q) => <li key={q}>{q}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--mist" aria-labelledby="assessTitle">
          <div className="wrap">
            <Reveal as="p" className="kicker">Your consultation</Reveal>
            <Reveal as="h2" className="h2" id="assessTitle">What happens at your assessment with Ram</Reveal>
            <ol className="profile__steps">
              {ASSESSMENT.map((s, i) => (
                <Reveal as="li" key={s.title} delay={0.06 * i}>
                  <span className="profile__num" aria-hidden="true">{i + 1}</span>
                  <div><h3>{s.title}</h3><p>{s.body}</p></div>
                </Reveal>
              ))}
            </ol>
            <div className="profile__cta">
              <a className="btn btn--primary" href={CLINIC.bookingUrl}>Request a consultation</a>
              <a className="btn btn--ghost" href={CLINIC.phoneHref}><Phone /> {CLINIC.phoneDisplay}</a>
            </div>
          </div>
        </section>

        <Clinics />
      </main>
      <Footer onHome={false} />
    </>
  );
}
