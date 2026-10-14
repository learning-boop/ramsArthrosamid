import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Magnetic from './Magnetic.jsx';
import { Phone, ChevronDown } from './Icons.jsx';
import { CLINIC, PRICE, HERO_VIDEO } from '../config.js';
import { CLINICIAN } from '../data/content.js';

const EASE = [0.2, 0.7, 0.2, 1];
const HEADLINE = 'Stop planning your day around your knee.';
// Copy starts once the intro curtain has lifted.
const T0 = 0.9;

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  // Set once the visitor pauses the film themselves, so nothing restarts it behind their back.
  const userPaused = useRef(false);

  // Scroll-linked depth: the film sinks and slowly zooms while the copy lifts away and fades.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const filmY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const filmScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.18]);
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return undefined;
    // React doesn't reflect `muted` as an attribute, and mobile autoplay policies check it, so set both.
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute('muted', '');
    v.setAttribute('playsinline', '');

    const start = () => {
      if (userPaused.current || !v.paused) return;
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    };
    // Mobile browsers can refuse autoplay (iOS Low Power Mode, Android data saver), so also retry
    // when the video is ready, when the tab comes back, and on the visitor's first touch or scroll.
    const gestures = ['touchstart', 'pointerdown', 'scroll', 'keydown'];
    const onGesture = () => { start(); gestures.forEach((e) => window.removeEventListener(e, onGesture)); };
    const onVisible = () => { if (document.visibilityState === 'visible') start(); };

    start();
    ['loadeddata', 'canplay'].forEach((e) => v.addEventListener(e, start));
    gestures.forEach((e) => window.addEventListener(e, onGesture, { passive: true }));
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      ['loadeddata', 'canplay'].forEach((e) => v.removeEventListener(e, start));
      gestures.forEach((e) => window.removeEventListener(e, onGesture));
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  const toggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      userPaused.current = true;
      v.pause();
      setPlaying(false);
    }
  };

  const fade = (delay) => (reduce ? {} : {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: EASE, delay: T0 + delay },
  });

  return (
    <section className="hero" id="home" ref={sectionRef} aria-labelledby="heroTitle">
      {/* Background film */}
      <motion.div className="hero__film" aria-hidden="true" style={reduce ? undefined : { y: filmY, scale: filmScale }}>
        <video
          ref={videoRef}
          className="hero__video"
          poster={HERO_VIDEO.poster}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
        >
          <source src={HERO_VIDEO.mobileSrc} type="video/mp4" media="(max-width: 760px)" />
          <source src={HERO_VIDEO.src} type="video/mp4" />
        </video>
      </motion.div>
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <motion.div className="wrap hero__inner" style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}>
        <div className="hero__copy">
          <h1 className="hero__title" id="heroTitle">
            <motion.span
              className="hero__brand"
              initial={reduce ? false : { clipPath: 'inset(0 100% -10% 0)', filter: 'blur(10px)' }}
              animate={reduce ? {} : { clipPath: 'inset(0 0% -10% 0)', filter: 'blur(0px)' }}
              transition={{ duration: 1.4, ease: EASE, delay: T0 + 0.1 }}
            >
              Arthrosamid<sup>®</sup>
            </motion.span>
            <span className="hero__headline">
              {HEADLINE.split(' ').map((word, i) => (
                <span key={i}>
                  <span className="word">
                    <motion.span
                      initial={reduce ? false : { y: '110%', rotate: 4 }}
                      animate={reduce ? {} : { y: 0, rotate: 0 }}
                      transition={{ duration: 0.9, ease: EASE, delay: T0 + 0.7 + i * 0.07 }}
                    >
                      {word}
                    </motion.span>
                  </span>
                  {' '}
                </span>
              ))}
            </span>
          </h1>

          <motion.p className="hero__sub lead" {...fade(1.2)}>
            One ultrasound-guided injection for knee osteoarthritis, given personally by {CLINICIAN.name}, an accredited Arthrosamid® provider. No surgery, home the same day.
          </motion.p>

          <motion.div className="hero__cta" {...fade(1.35)}>
            <Magnetic><a className="btn btn--primary btn--pulse btn--shine" href="#book">Book a consultation</a></Magnetic>
            <Magnetic><a className="btn btn--glass hero__call" href={CLINIC.phoneHref} aria-label={`Call ${CLINIC.phoneDisplay}`}><Phone /><span className="only-wide">Call {CLINIC.phoneDisplay}</span></a></Magnetic>
          </motion.div>

          <motion.dl className="hero__stats" {...fade(1.5)}>
            <div><dt>1</dt><dd>appointment</dd></div>
            <div><dt>4<small>yrs</small></dt><dd>relief reported</dd></div>
            <div><dt>{PRICE.perKnee}</dt><dd>per knee, all-in</dd></div>
          </motion.dl>
        </div>
      </motion.div>

      <button className="hero__toggle" type="button" onClick={toggleVideo} aria-label={playing ? 'Pause background video' : 'Play background video'}>
        {playing
          ? <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
          : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5v14l12-7Z" /></svg>}
      </button>

      <motion.a className="scroll-cue" href="#feel" aria-label="Scroll to read more" {...fade(2)}>
        <span>Scroll</span><ChevronDown />
      </motion.a>
    </section>
  );
}
