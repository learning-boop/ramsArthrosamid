import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { BEFORE_AFTER } from '../data/content.js';

/**
 * One patient's before/after pair. Both clips play in sync; dragging the handle (or using the
 * slider with the keyboard) wipes between them. Videos only play while the card is on screen.
 */
function Comparison({ item }) {
  const reduce = useReducedMotion();
  const wrapRef = useRef(null);
  const beforeRef = useRef(null);
  const afterRef = useRef(null);
  const inView = useInView(wrapRef, { amount: 0.4 });
  const [split, setSplit] = useState(50);
  const [playing, setPlaying] = useState(!reduce);

  // Play only while visible (and motion is allowed), pause otherwise.
  useEffect(() => {
    const vids = [beforeRef.current, afterRef.current];
    if (inView && playing) vids.forEach((v) => v.play().catch(() => {}));
    else vids.forEach((v) => v.pause());
  }, [inView, playing]);

  // Keep the "after" clip locked to the "before" clip's clock.
  useEffect(() => {
    const b = beforeRef.current, a = afterRef.current;
    const sync = () => { if (Math.abs(a.currentTime - b.currentTime) > 0.15) a.currentTime = b.currentTime; };
    b.addEventListener('timeupdate', sync);
    b.addEventListener('seeked', sync);
    return () => { b.removeEventListener('timeupdate', sync); b.removeEventListener('seeked', sync); };
  }, []);

  // Pointer dragging anywhere on the stage.
  const dragging = useRef(false);
  const moveTo = (clientX) => {
    const r = wrapRef.current.getBoundingClientRect();
    setSplit(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };
  const onDown = (e) => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); moveTo(e.clientX); };
  const onMove = (e) => { if (dragging.current) moveTo(e.clientX); };
  const onUp = () => { dragging.current = false; };

  const common = { muted: true, loop: true, playsInline: true, preload: 'metadata', poster: item.poster };

  return (
    <figure className="ba__card">
      <div
        className="ba__stage"
        ref={wrapRef}
        style={{ '--split': `${split}%`, aspectRatio: item.ratio || '16 / 9' }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
      >
        <video ref={beforeRef} className="ba__video" src={item.before} {...common} aria-label={`${item.name} before treatment`} />
        <video ref={afterRef} className="ba__video ba__video--after" src={item.after} {...common} aria-label={`${item.name} after treatment`} />
        <span className="ba__tag ba__tag--before" aria-hidden="true">Before</span>
        <span className="ba__tag ba__tag--after" aria-hidden="true">After</span>
        <span className="ba__handle" aria-hidden="true"><i /></span>
        <input
          className="ba__range"
          type="range"
          min="0"
          max="100"
          value={Math.round(split)}
          onChange={(e) => setSplit(+e.target.value)}
          aria-label={`Compare ${item.name} before and after treatment`}
        />
        <button type="button" className="ba__toggle" onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause videos' : 'Play videos'}>
          {playing
            ? <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
            : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5v14l12-7Z" /></svg>}
        </button>
      </div>
      <figcaption className="ba__meta">
        <div>
          <strong>{item.name}</strong>
          <span>{item.knee}</span>
        </div>
        <span className="ba__when">{item.when}</span>
        {item.quote && <blockquote>“{item.quote}”</blockquote>}
      </figcaption>
    </figure>
  );
}

/** Real patients, filmed with consent. Renders nothing until BEFORE_AFTER has entries. */
export default function BeforeAfter() {
  if (!BEFORE_AFTER.length) return null;
  return (
    <section className="section ba" id="results" aria-labelledby="baTitle">
      <div className="wrap">
        <Reveal as="p" className="kicker">Real patients</Reveal>
        <Reveal as="h2" className="h2 measure" id="baTitle">Before and after Arthrosamid®</Reveal>
        <Reveal as="p" className="lead measure">Drag the slider to compare. Filmed with each patient’s permission.</Reveal>
        <div className={`ba__grid${BEFORE_AFTER.length === 1 ? ' ba__grid--single' : ''}`}>
          {BEFORE_AFTER.map((item, i) => (
            <Reveal key={item.after} delay={i * 0.1}><Comparison item={item} /></Reveal>
          ))}
        </div>
        <Reveal as="p" className="ba__fine">
          Individual results vary. These patients were treated at our clinics; your own response depends on the severity of your osteoarthritis, inflammation and activity. Suitability is confirmed at consultation.
        </Reveal>
      </div>
    </section>
  );
}
