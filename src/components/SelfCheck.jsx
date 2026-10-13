import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SELF_CHECK } from '../data/content.js';
import { CLINIC } from '../config.js';

const EASE = [0.2, 0.7, 0.2, 1];

const RESULTS = {
  likely: {
    tone: 'good',
    title: 'Arthrosamid® could be a good fit for you',
    body: 'Your answers match the people it tends to help. The next step is a consultation and ultrasound scan to confirm it.',
  },
  avoid: {
    tone: 'care',
    title: 'Arthrosamid® usually isn’t recommended here',
    body: 'With a knee replacement, an infection or recent surgery, it’s usually not the right option. Talk to us and we’ll explain what else could help.',
  },
  talk: {
    tone: 'neutral',
    title: 'It’s worth a conversation',
    body: 'A consultation and scan will show what’s causing your knee pain, and whether Arthrosamid® or another treatment makes most sense.',
  },
};

function resultFor(a) {
  if (a[2]) return 'avoid';
  if (a[0] && a[1]) return 'likely';
  return 'talk';
}

/** Three yes/no questions that point people to the right next step, and carry their answers into the booking form. */
export default function SelfCheck() {
  const reduce = useReducedMotion();
  const [answers, setAnswers] = useState([]);
  const step = answers.length;
  const done = step === SELF_CHECK.length;
  const result = done ? RESULTS[resultFor(answers)] : null;

  const answer = (v) => setAnswers((a) => [...a, v]);

  const book = () => {
    const summary = SELF_CHECK.map((s, i) => `${s.q} ${answers[i] ? s.yes : s.no}`).join('\n');
    window.dispatchEvent(new CustomEvent('prefill-booking', { detail: { message: `Self-check answers:\n${summary}` } }));
  };

  const anim = reduce ? {} : {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
    transition: { duration: 0.4, ease: EASE },
  };

  return (
    <div className="check" aria-live="polite">
      <div className="check__head">
        <p className="check__label">Two-minute self-check</p>
        <div className="check__bar" aria-hidden="true"><span style={{ width: `${(step / SELF_CHECK.length) * 100}%` }} /></div>
        <p className="check__count">{done ? 'Done' : `${step + 1} of ${SELF_CHECK.length}`}</p>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {!done ? (
          <motion.div key={`q${step}`} className="check__q" {...anim}>
            <p className="check__question">{SELF_CHECK[step].q}</p>
            <div className="check__opts">
              <button type="button" className="check__opt" onClick={() => answer(true)}>{SELF_CHECK[step].yes}</button>
              <button type="button" className="check__opt" onClick={() => answer(false)}>{SELF_CHECK[step].no}</button>
            </div>
          </motion.div>
        ) : (
          <motion.div key="result" className={`check__result check__result--${result.tone}`} {...anim}>
            <p className="check__title">{result.title}</p>
            <p className="check__body">{result.body}</p>
            <div className="check__opts">
              <a className="btn btn--primary" href="#book" onClick={book}>Book a consultation</a>
              <a className="btn btn--ghost" href={CLINIC.phoneHref}>Call {CLINIC.phoneDisplay}</a>
            </div>
            <button type="button" className="check__restart" onClick={() => setAnswers([])}>Start again</button>
          </motion.div>
        )}
      </AnimatePresence>
      <p className="check__fine">A guide only, not a diagnosis. Suitability is confirmed by your clinician at consultation.</p>
    </div>
  );
}
