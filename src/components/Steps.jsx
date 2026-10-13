import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import ParallaxImage from './ParallaxImage.jsx';
import { STEPS } from '../data/content.js';

/** The gold line fills as the reader moves down the list; each step lights up as the line reaches it. */
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

  return (
    <section className="section steps" id="steps" aria-labelledby="stepsTitle">
      <div className="wrap">
        <div className="steps__intro">
          <div>
            <Reveal as="p" className="kicker">Your appointment</Reveal>
            <Reveal as="h2" className="h2" id="stepsTitle">Everything in one visit, step by step</Reveal>
          </div>
          <Reveal as="p" className="lead">
            Where it’s appropriate, the consultation, scan and injection all happen in the same appointment of around 60 minutes. Traditionally this takes two or three hospital visits.
          </Reveal>
        </div>

        <div className="steps__media">
          <ParallaxImage className="steps__photo steps__photo--a" src="./media/knee-exam.jpg" alt="A clinician examining a patient’s knee on a treatment couch" ratio="3 / 2" from="left" />
          <ParallaxImage className="steps__photo steps__photo--b" src="./media/ultrasound.jpg" alt="A clinician in blue gloves adjusting an ultrasound machine" ratio="4 / 5" speed={16} />
          <Reveal className="steps__chip" delay={0.5}><b>60 min</b>consultation, scan and injection</Reveal>
        </div>

        <ol className="steps__list" ref={listRef}>
          <div className="steps__line" aria-hidden="true">
            <motion.div className="steps__fill" style={{ scaleY: reduce ? 1 : scrollYProgress }} />
          </div>
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} className={`step${i < activeCount ? ' is-active' : ''}`}>
              <div className="step__marker" aria-hidden="true"><span>{i + 1}</span></div>
              <div className="step__body">
                <h3 className="h3">{s.title}</h3>
                <p>{s.body}</p>
                {s.note && <span className="step__time">{s.note}</span>}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
