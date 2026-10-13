import { forwardRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Fades and lifts children into place the first time they scroll into view.
 * `delay` in seconds staggers siblings. Renders plainly when motion is reduced.
 */
const Reveal = forwardRef(function Reveal({ as = 'div', delay = 0, y = 22, className, children, ...rest }, ref) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Plain = as;
    return <Plain ref={ref} className={className} {...rest}>{children}</Plain>;
  }
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -5% 0px' }}
      transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1], delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Reveal;
