import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin gold reading-progress line pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return <motion.div className="progress" style={{ scaleX }} aria-hidden="true" />;
}
