import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Logo from './Logo.jsx';

const EASE = [0.76, 0, 0.24, 1];

/** Opening curtain: the clinic logo draws in on navy, then the panel lifts to reveal the hero film and unmounts. */
export default function Intro() {
  const reduce = useReducedMotion();
  const [lifted, setLifted] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLifted(true), 950);
    return () => clearTimeout(t);
  }, []);

  if (reduce || gone) return null;

  return (
    <motion.div
      className="intro"
      aria-hidden="true"
      style={{ pointerEvents: lifted ? 'none' : 'auto' }}
      initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      animate={{ clipPath: lifted ? 'inset(0% 0% 100% 0%)' : 'inset(0% 0% 0% 0%)' }}
      transition={{ duration: 0.9, ease: EASE }}
      onAnimationComplete={() => { if (lifted) setGone(true); }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
        animate={lifted ? { opacity: 0, y: -24, filter: 'blur(0px)' } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <Logo tone="white" className="logo--intro" />
      </motion.div>
      <motion.span
        className="intro__bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.85, ease: EASE }}
      />
    </motion.div>
  );
}
