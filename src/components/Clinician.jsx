import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { CLINICIAN } from '../data/content.js';

export default function Clinician() {
  const initials = CLINICIAN.name.split(' ').map((w) => w[0]).join('');
  const [allQuals, setAllQuals] = useState(false);
  return (
    <section className="section section--mist clin" id="clinician" aria-labelledby="clinTitle">
      <div className="wrap">
        {CLINICIAN.photo ? (
          <Reveal className="clin__portrait">
            <img src={CLINICIAN.photo} alt={CLINICIAN.fullName} />
            <div className="clin__badge"><strong>{CLINICIAN.fullName}</strong>{CLINICIAN.letters}</div>
          </Reveal>
        ) : (
          /* No photo: a credentials card that leads with verifiable facts */
          <Reveal className="clin__card" style={{ '--clin-img': 'url(./media/ultrasound.jpg)' }}>
            <div className="clin__seal" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="56" className="clin__seal-ring" />
                <circle cx="60" cy="60" r="56" className="clin__seal-arc" pathLength="1" />
              </svg>
              <span>{initials}</span>
            </div>
            <p className="clin__name">{CLINICIAN.fullName}</p>
            <p className="clin__letters">{CLINICIAN.letters}</p>
            <p className="clin__role">{CLINICIAN.role}</p>
            <dl className="clin__facts">
              {CLINICIAN.highlights.map((h) => (
                <div key={h.small}><dt>{h.big}</dt><dd>{h.small}</dd></div>
              ))}
            </dl>
            <p className="clin__verified">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg>
              Accredited Arthrosamid® provider
            </p>
          </Reveal>
        )}
        <div>
          <Reveal as="p" className="kicker">Your clinician · Accredited Arthrosamid® provider</Reveal>
          <Reveal as="h2" className="h2" id="clinTitle">Every Arthrosamid® injection is delivered personally by {CLINICIAN.fullName}, known to patients as Ram</Reveal>
          <Reveal as="p" className="lead measure">{CLINICIAN.intro}</Reveal>
          <Reveal as="ul" className={`clin__quals${allQuals ? ' is-open' : ''}`} id="clinQuals">
            {CLINICIAN.quals.map((q) => <li key={q}>{q}</li>)}
          </Reveal>
          <button type="button" className="clin__more" aria-expanded={allQuals} aria-controls="clinQuals" onClick={() => setAllQuals((o) => !o)}>
            {allQuals ? 'Show fewer' : 'Show all qualifications and experience'}
          </button>
          <Reveal className="clin__regs">
            {CLINICIAN.registrations.map((r) => <span key={r}><i aria-hidden="true" />{r}</span>)}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
