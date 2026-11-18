import Reveal from './Reveal.jsx';
import { CREDENTIALS } from '../data/content.js';

/**
 * Straight after the hero: the clinician's credentials. Patient quotes were removed until each reviewer's
 * written consent is confirmed (see Testimonials.jsx, kept for that).
 */
export default function TrustBand() {
  return (
    <section className="trust" aria-label="Your clinician’s credentials">
      <div className="wrap">
        <ul className="trust__creds">
          {CREDENTIALS.map((c, i) => (
            <Reveal as="li" key={c.big} delay={0.08 * i}>
              <b>{c.big}</b>
              <span>{c.small}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
