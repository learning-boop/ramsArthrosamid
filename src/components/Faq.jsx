import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { Plus } from './Icons.jsx';
import { FAQS } from '../data/content.js';

export default function Faq() {
  const [open, setOpen] = useState(-1);
  const reduce = useReducedMotion();

  return (
    <section className="section faq" id="faq" aria-labelledby="faqTitle">
      <div className="wrap">
        <Reveal as="p" className="kicker">Questions</Reveal>
        <Reveal as="h2" className="h2 measure" id="faqTitle">The things people ask before they book</Reveal>
        <Reveal className="faq__list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={f.q}>
                <h3>
                  <button
                    className="faq__q"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {f.q}
                    <span className="faq__icon" aria-hidden="true"><Plus /></span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq__a"
                      id={`faq-${i}`}
                      key="panel"
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduce ? {} : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
