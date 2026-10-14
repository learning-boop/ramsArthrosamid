import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { LIFE_LEVELS, LIFE_FACTORS } from '../data/content.js';

/**
 * "Your whole life": knee osteoarthritis at the top, branching into the knee, the day and the
 * people around you, shaped by your surroundings and by you. A toggle flips every card from
 * life with knee pain to what treatment aims to give back. It flips once on its own when
 * it first scrolls into view, unless the visitor has already used the toggle.
 */
export default function Life() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [relief, setRelief] = useState(false);
  const touched = useRef(false);

  useEffect(() => {
    if (!inView || reduce) return undefined;
    const t = setTimeout(() => { if (!touched.current) setRelief(true); }, 2600);
    return () => clearTimeout(t);
  }, [inView, reduce]);

  const choose = (value) => { touched.current = true; setRelief(value); };

  return (
    <section className={`section section--mist life${relief ? ' is-relief' : ''}`} id="life" aria-labelledby="lifeTitle">
      <div className="wrap">
        <div className="life__intro">
          <div>
            <Reveal as="p" className="kicker">More than a sore knee</Reveal>
            <Reveal as="h2" className="h2" id="lifeTitle">Knee arthritis doesn’t stay in your knee.</Reveal>
          </div>
          <Reveal as="p" className="lead measure">
            It spreads from the joint to your day, your work and the people you love. Arthrosamid® is designed to work back the other way.
          </Reveal>
        </div>

        <div className="life__toggle" role="group" aria-label="Show life with knee pain or after treatment">
          <button type="button" aria-pressed={!relief} className={!relief ? 'is-on' : undefined} onClick={() => choose(false)}>With knee pain</button>
          <button type="button" aria-pressed={relief} className={relief ? 'is-on' : undefined} onClick={() => choose(true)}>After Arthrosamid®</button>
        </div>

        <div className="life__tree" ref={ref}>
          <Reveal className="life__root">
            <span className="life__root-label">Health condition</span>
            <strong>Knee osteoarthritis</strong>
          </Reveal>

          <ol className="life__levels">
            {LIFE_LEVELS.map((l, i) => (
              <Reveal as="li" key={l.key} className="life__card" delay={0.1 + i * 0.1}>
                <div className="life__photo">
                  <img src={l.img} alt={relief && l.reliefImg ? '' : l.alt} loading="lazy" />
                  {l.reliefImg && <img className="life__photo-relief" src={l.reliefImg} alt={relief ? l.reliefAlt : ''} loading="lazy" />}
                </div>
                <div className="life__body">
                  <h3><span>{String(i + 1).padStart(2, '0')}</span>{l.label}</h3>
                  <div className="life__swap" aria-live="polite">
                    <p className="life__pain" aria-hidden={relief}>{l.pain}</p>
                    <p className="life__relief" aria-hidden={!relief}>{l.relief}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="life__factors">
            <p className="life__factors-label">Shaped by</p>
            {LIFE_FACTORS.map((f, i) => (
              <Reveal key={f.label} className="life__factor" delay={0.1 + i * 0.1}>
                <strong>{f.label}</strong>
                <span>{f.body}</span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal as="p" className="life__note">
          At your consultation, Ram looks at all of this, not just the scan, before recommending any treatment. <a href="#clinician">Meet Ram</a>
        </Reveal>
      </div>
    </section>
  );
}
