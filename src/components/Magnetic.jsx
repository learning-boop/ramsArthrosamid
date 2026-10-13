import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/** Pulls its child gently toward the pointer on hover (fine pointers only). */
export default function Magnetic({ children, strength = 0.3 }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 16, mass: 0.4 });
  const y = useSpring(my, { stiffness: 220, damping: 16, mass: 0.4 });

  if (reduce) return children;

  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * strength);
    my.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.span className="magnetic" ref={ref} style={{ x, y }} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </motion.span>
  );
}
