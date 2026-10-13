import Reveal from './Reveal.jsx';
import { CREDENTIALS, FEATURED_REVIEW } from '../data/content.js';

/** Straight after the hero: the clinician's credentials and one line from the best-known patient. */
export default function TrustBand() {
  return (
    <section className="trust" aria-label="Why patients trust us">
      <div className="wrap">
        <Reveal as="figure" className="trust__quote">
          <div className="trust__stars" aria-label="Five-star review">★★★★★</div>
          <blockquote>“Ram has been right up there with his care and skill. Never in a rush, he’s kind, compassionate and very professional.”</blockquote>
          <figcaption>
            <span className="trust__avatar" aria-hidden="true">DG</span>
            <span><strong>{FEATURED_REVIEW.name}</strong>{FEATURED_REVIEW.role}</span>
          </figcaption>
        </Reveal>
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
