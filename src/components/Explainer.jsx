import Reveal from './Reveal.jsx';
import { EXPLAINER_FACTS, KNOWN_INJECTIONS } from '../data/content.js';

/* Small two-tone icons for the four facts (40 grid, navy outline + gel/gold accent). */
const ink = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' };
function FactIcon({ kind }) {
  if (kind === 'water') return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 5c6.5 7.8 10 13.4 10 17.8a10 10 0 0 1-20 0C10 18.4 13.5 12.8 20 5Z" fill="var(--gel-soft)" stroke="var(--gel)" strokeWidth="2.2" />
      <path d="M15.5 24a4.6 4.6 0 0 0 3.6 4.4" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
  if (kind === 'cushion') return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path d="M6 12c4-3 24-3 28 0" {...ink} />
      <rect x="6" y="17" width="28" height="7" rx="3.5" fill="var(--gel-soft)" stroke="var(--gel)" strokeWidth="2.2" />
      <path d="M6 30c4 3 24 3 28 0" {...ink} />
    </svg>
  );
  if (kind === 'one') return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="15" fill="var(--gold-soft)" stroke="var(--gold)" strokeWidth="2.2" />
      <path d="M17 15l4-3v17" {...ink} />
    </svg>
  );
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="15" {...ink} />
      <path d="M20 11v9l6 4" {...ink} />
      <path d="M20 5a15 15 0 0 1 15 15" fill="none" stroke="var(--gold)" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

/**
 * "New to Arthrosamid®?": what the injection is, in everyday words, and how it compares with
 * the knee injections most people have already heard of.
 */
export default function Explainer() {
  return (
    <section className="section section--mist explain" id="about" aria-labelledby="explainTitle">
      <div className="wrap">
        <div className="explain__intro">
          <div>
            <Reveal as="p" className="kicker">New to Arthrosamid®?</Reveal>
            <Reveal as="h2" className="h2" id="explainTitle">A knee injection that works like a cushion.</Reveal>
          </div>
          <Reveal as="p" className="lead measure">
            You may know steroid or “lubricating gel” jabs. Arthrosamid® is a soft gel too, but it’s designed to stay in the knee and keep cushioning it.
          </Reveal>
        </div>

        <ul className="explain__facts">
          {EXPLAINER_FACTS.map((f, i) => (
            <Reveal as="li" key={f.title} className="explain__fact" delay={0.08 + i * 0.08}>
              <span className="explain__icon"><FactIcon kind={f.icon} /></span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal as="h3" className="explain__subhead">How it compares with injections you may know</Reveal>
        <div className="explain__compare">
          {KNOWN_INJECTIONS.map((k, i) => (
            <Reveal key={k.name} className={`explain__card${k.featured ? ' is-featured' : ''}`} delay={0.08 + i * 0.1}>
              {k.featured && <span className="explain__badge">One injection, lasting relief</span>}
              <p className="explain__aka">{k.aka}</p>
              <h4>{k.name}</h4>
              <p className="explain__what">{k.what}</p>
              <dl>
                <div><dt>How often</dt><dd>{k.often}</dd></div>
                <div><dt>Relief typically lasts</dt><dd>{k.lasts}</dd></div>
              </dl>
            </Reveal>
          ))}
        </div>
        <p className="explain__hint" aria-hidden="true">Swipe to compare →</p>
        <Reveal as="p" className="explain__note">
          Everyone’s knee is different. Ram will explain which option suits yours at your consultation. <a href="#clinician">Meet Ram</a>
        </Reveal>
      </div>
    </section>
  );
}
