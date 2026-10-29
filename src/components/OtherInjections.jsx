import Reveal from './Reveal.jsx';
import { OTHER_INJECTIONS } from '../data/content.js';
import { CLINIC } from '../config.js';

/* Small icons (40 grid): a gel drop, a blood drop with platelets, a calming wave. */
const ink = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' };
function InjIcon({ kind }) {
  if (kind === 'gel') return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 6c6 7.2 9 12.4 9 16.4a9 9 0 0 1-18 0C11 18.4 14 13.2 20 6Z" fill="var(--gel-soft)" stroke="var(--gel)" strokeWidth="2.2" />
      <path d="M16 23a4 4 0 0 0 3 3.8" {...ink} stroke="#fff" />
    </svg>
  );
  if (kind === 'prp') return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 6c6 7.2 9 12.4 9 16.4a9 9 0 0 1-18 0C11 18.4 14 13.2 20 6Z" fill="rgba(226,107,82,.16)" stroke="var(--ache)" strokeWidth="2.2" />
      <circle cx="17" cy="22" r="1.8" fill="var(--gold)" /><circle cx="22.5" cy="19.5" r="1.8" fill="var(--gold)" /><circle cx="22" cy="25.5" r="1.8" fill="var(--gold)" />
    </svg>
  );
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="14" fill="var(--gold-soft)" stroke="var(--gold)" strokeWidth="2.2" />
      <path d="M12 21c2.7-3 5.3-3 8 0s5.3 3 8 0" {...ink} />
    </svg>
  );
}

/** "Also available": the other ultrasound-guided injections Ram offers. */
export default function OtherInjections() {
  return (
    <section className="section other-inj" id="other-injections" aria-labelledby="otherTitle">
      <div className="wrap">
        <div className="other-inj__intro">
          <Reveal as="p" className="kicker">Also available</Reveal>
          <Reveal as="h2" className="h2" id="otherTitle">Other ultrasound-guided injections</Reveal>
          <Reveal as="p" className="lead measure">Arthrosamid® isn’t right for every knee. Ram also offers these injections, and will recommend whichever suits you best at your consultation.</Reveal>
        </div>
        <ul className="other-inj__list">
          {OTHER_INJECTIONS.map((x, i) => (
            <Reveal as="li" key={x.name} className="other-inj__card" delay={0.08 + i * 0.08}>
              <span className="other-inj__icon"><InjIcon kind={x.icon} /></span>
              <p className="other-inj__aka">{x.aka}</p>
              <h3>{x.name}</h3>
              <p>{x.body}</p>
              <a href={`${CLINIC.bookingUrl}?option=other`}>Ask about this</a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
