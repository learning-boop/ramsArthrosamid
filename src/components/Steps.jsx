import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import ParallaxImage from './ParallaxImage.jsx';
import { STEPS } from '../data/content.js';

/**
 * The gold line fills as the reader moves down the list; each step lights up as the line reaches it.
 * On wide screens a sticky photo frame beside the list cross-fades to the active step's photo;
 * on phones each step carries its own photo, which wipes in as it scrolls into view.
 */
export default function Steps() {
  const listRef = useRef(null);
  const reduce = useReducedMotion();
  const [activeCount, setActiveCount] = useState(reduce ? STEPS.length : 0);

  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 0.62', 'end 0.62'] });
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    // Markers sit at even intervals down the list; light each one once the line passes it.
    const count = Math.min(STEPS.length, Math.floor(p * (STEPS.length - 1) + 1.02));
    setActiveCount(p <= 0.001 ? 0 : count);
  });

  const current = Math.max(0, activeCount - 1);

  return (
    <section className="section steps" id="steps" aria-labelledby="stepsTitle">
      <div className="wrap">
        <div className="steps__intro">
          <div>
            <Reveal as="p" className="kicker">Your appointment</Reveal>
            <Reveal as="h2" className="h2" id="stepsTitle">Everything in one visit</Reveal>
          </div>
          <Reveal as="p" className="lead">
            Where it’s appropriate, consultation, scan and injection all happen in a single visit, instead of two or three hospital visits.
          </Reveal>
        </div>

        <div className="steps__body">
        <div className="steps__visual" aria-hidden="true">
          <div className="steps__frame">
            {STEPS.map((s, i) => (
              <img key={s.img} src={s.img} alt="" loading="lazy" className={i === current ? 'is-on' : undefined} />
            ))}
            <Reveal className="steps__chip" delay={0.3}>
              <b>{String(current + 1).padStart(2, '0')}</b>
              {STEPS[current].title}
            </Reveal>
            <div className="steps__dots">
              {STEPS.map((s, i) => <i key={s.title} className={i === current ? 'is-on' : undefined} />)}
            </div>
          </div>
        </div>

        <ol className="steps__list" ref={listRef}>
          <div className="steps__line" aria-hidden="true">
            <motion.div className="steps__fill" style={{ scaleY: reduce ? 1 : scrollYProgress }} />
          </div>
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} className={`step${i < activeCount ? ' is-active' : ''}`}>
              <div className="step__marker" aria-hidden="true"><span>{i + 1}</span></div>
              <div className="step__body">
                <ParallaxImage className="step__photo" src={s.img} alt={s.alt} ratio="16 / 9" speed={8} from={i % 2 ? 'right' : 'left'} />
                <h3 className="h3">{s.title}</h3>
                <p>{s.body}</p>
                {s.note && <span className={`step__time${s.noteIcon ? ` step__time--${s.noteIcon}` : ''}`}>{s.note}</span>}
              </div>
            </Reveal>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}
