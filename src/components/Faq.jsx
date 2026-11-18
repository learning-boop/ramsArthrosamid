import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { Plus } from './Icons.jsx';
import { FAQ_GROUPS } from '../data/content.js';

export default function Faq() {
  const [open, setOpen] = useState('');
  const reduce = useReducedMotion();

  return (
    <section className="section faq" id="faq" aria-labelledby="faqTitle">
      <div className="wrap">
        <Reveal as="p" className="kicker">Questions</Reveal>
        <Reveal as="h2" className="h2 measure" id="faqTitle">The things people ask before they book</Reveal>
        {FAQ_GROUPS.map((g, gi) => (
          <div className="faq__group" key={g.title}>
            <h3 className="faq__group-title">{g.title}</h3>
            <div className="faq__list">
              {g.items.map((f, fi) => {
                const id = `${gi}-${fi}`;
                const isOpen = open === id;
                return (
                  <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={f.q}>
                    <h4>
                      <button
                        className="faq__q"
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-${id}`}
                        onClick={() => setOpen(isOpen ? '' : id)}
                      >
                        {f.q}
                        <span className="faq__icon" aria-hidden="true"><Plus /></span>
                      </button>
                    </h4>
                    <motion.div
                      className="faq__a"
                      id={`faq-${id}`}
                      role="region"
                      aria-hidden={!isOpen}
                      initial={false}
                      animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={reduce ? { duration: 0 } : { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                      style={{ height: 0, opacity: 0 }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
