import { useRef } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const HIDDEN = {
  bottom: 'inset(100% 0% 0% 0%)',
  left: 'inset(0% 100% 0% 0%)',
  right: 'inset(0% 0% 0% 100%)',
};

/**
 * Photo that unveils with a clip-path wipe when it enters the viewport, then drifts against the scroll.
 * `speed` is the parallax travel as a percentage of the frame height.
 * The wipe runs on an inner layer: a fully clipped element never registers as "in view".
 */
export default function ParallaxImage({ src, alt, className = '', speed = 12, ratio = '4 / 5', from = 'bottom', children }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}%`, `${speed}%`]);

  return (
    <figure ref={ref} className={`pimg ${className}`} style={{ aspectRatio: ratio }}>
      <motion.div
        className="pimg__clip"
        initial={reduce ? false : { clipPath: HIDDEN[from] }}
        animate={reduce || inView ? { clipPath: 'inset(0% 0% 0% 0%)' } : undefined}
        transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={reduce ? undefined : { y, scale: 1 + (speed * 2.4) / 100 }}
        />
        {children}
      </motion.div>
    </figure>
  );
}
