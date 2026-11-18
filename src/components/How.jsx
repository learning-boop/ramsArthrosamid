import { motion, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import KneeAnatomy from './KneeAnatomy.jsx';
import { StageIcon } from './Icons.jsx';
import { STAGES } from '../data/content.js';

export default function How() {
  const reduce = useReducedMotion();
  return (
    <section className="section how" id="how" aria-labelledby="howTitle">
      <div className="wrap">
        <div className="how__intro">
          <div>
            <Reveal as="p" className="kicker">How it works</Reveal>
            <Reveal as="h2" className="h2" id="howTitle">What Arthrosamid® hydrogel does inside the knee</Reveal>
            <Reveal as="p" className="lead">
              A non-absorbable hydrogel injected into the knee joint, intended to help ease the symptoms of knee osteoarthritis. It does not regrow cartilage or cure osteoarthritis.
            </Reveal>
          </div>
          <Reveal className="how__visual"><KneeAnatomy /></Reveal>
        </div>
        <div className="how__grid">
          {STAGES.map((s, i) => (
            <Reveal key={s.title} className="how__stage" delay={i * 0.15}>
              <motion.span
                className="how__line"
                aria-hidden="true"
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={reduce ? {} : { scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1], delay: 0.2 + i * 0.35 }}
              />
              <div className="how__badge">
                <span className="how__tile"><StageIcon kind={s.icon} /></span>
                <span className="how__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="h3">{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="how__source">
          Read the manufacturer’s <a href="https://arthrosamid.com/patient" target="_blank" rel="noopener noreferrer">patient information and safety details</a>, including who should not have the injection.
        </Reveal>
      </div>
    </section>
  );
}

