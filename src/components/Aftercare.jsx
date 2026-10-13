import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { TIMELINE } from '../data/content.js';

export default function Aftercare() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="section section--mist after" aria-labelledby="afterTitle">
      <div className="wrap">
        <Reveal as="p" className="kicker">Afterwards</Reveal>
        <Reveal as="h2" className="h2 measure" id="afterTitle">What to expect in the days, weeks and years that follow</Reveal>
        <Reveal as="p" className="lead measure">Every knee responds differently. This is the pattern most people follow, and we set your own expectations clearly at consultation.</Reveal>

        <div className={`tl${inView ? ' in' : ''}`} ref={ref}>
          <div className="tl__track" aria-hidden="true"><div className="tl__fill" /></div>
          <ol className="tl__items">
            {TIMELINE.map((t, i) => (
              <li key={t.when} className={`tl__item${t.last ? ' tl__item--last' : ''}`} style={{ '--d': `${0.2 + i * 0.5}s` }}>
                <strong>{t.when}</strong>
                <p>{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
