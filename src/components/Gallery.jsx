import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal.jsx';
import ParallaxImage from './ParallaxImage.jsx';
import { GALLERY } from '../data/content.js';

/** "What you get back to": three photos drifting at different speeds under an oversized italic line. */
export default function Gallery() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineX = useTransform(scrollYProgress, [0, 1], ['6%', '-14%']);
  const colY = [
    useTransform(scrollYProgress, [0, 1], [60, -60]),
    useTransform(scrollYProgress, [0, 1], [140, -140]),
    useTransform(scrollYProgress, [0, 1], [30, -30]),
  ];

  return (
    <section className="section gallery" ref={ref} aria-labelledby="galleryTitle">
      <div className="gallery__marquee" aria-hidden="true">
        <motion.span style={reduce ? undefined : { x: lineX }}>Walk further · Climb the stairs · Say yes to the walk ·</motion.span>
      </div>
      <div className="wrap">
        <Reveal as="p" className="kicker">Life, back</Reveal>
        <Reveal as="h2" className="h2 measure" id="galleryTitle">The point isn’t the injection. It’s what you get back to.</Reveal>
        <div className="gallery__grid">
          {GALLERY.map((g, i) => (
            <motion.div key={g.src} className={`gallery__col gallery__col--${i + 1}`} style={reduce ? undefined : { y: colY[i] }}>
              <ParallaxImage src={g.src} alt={g.alt} ratio={g.ratio} speed={10} from={i === 1 ? 'bottom' : i === 0 ? 'left' : 'right'}>
                <figcaption><span>{String(i + 1).padStart(2, '0')}</span>{g.caption}</figcaption>
              </ParallaxImage>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
