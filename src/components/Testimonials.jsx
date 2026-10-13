import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { ChevronLeft, ChevronRight } from './Icons.jsx';
import { REVIEWS } from '../data/content.js';

function usePerView() {
  const get = () => (window.innerWidth >= 1060 ? 3 : window.innerWidth >= 760 ? 2 : 1);
  const [perView, setPerView] = useState(() => (typeof window === 'undefined' ? 3 : get()));
  useEffect(() => {
    const onResize = () => setPerView(get());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return perView;
}

export default function Testimonials() {
  const reduce = useReducedMotion();
  const perView = usePerView();
  const maxIndex = Math.max(0, REVIEWS.length - perView);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const safeIndex = Math.min(index, maxIndex);
  const timer = useRef(null);
  const touchX = useRef(null);

  const go = (dir) => setIndex((i) => {
    const next = Math.min(i, maxIndex) + dir;
    return next > maxIndex ? 0 : next < 0 ? maxIndex : next;
  });

  useEffect(() => {
    if (reduce || paused) return undefined;
    timer.current = setInterval(() => go(1), 6500);
    return () => clearInterval(timer.current);
  }, [reduce, paused, maxIndex]);

  return (
    <section className="section voices" aria-labelledby="voicesTitle">
      <div className="wrap">
        <Reveal as="p" className="kicker">Patients</Reveal>
        <Reveal as="h2" className="h2 measure" id="voicesTitle">In their words</Reveal>

        <Reveal
          className="carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; setPaused(true); }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - (touchX.current ?? e.changedTouches[0].clientX);
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="carousel__track" style={{ transform: `translateX(-${safeIndex * (100 / perView)}%)` }}>
            {REVIEWS.map((r) => (
              <div className="carousel__slide" key={r.name} style={{ flexBasis: `${100 / perView}%` }}>
                <article className="voice">
                  <div className="voice__stars" aria-label="Five stars">★★★★★</div>
                  <p>“{r.quote}”</p>
                  <footer><strong>{r.name}</strong>{r.context}</footer>
                </article>
              </div>
            ))}
          </div>
          <div className="carousel__ctrl">
            <button className="carousel__btn" type="button" aria-label="Previous reviews" onClick={() => go(-1)}><ChevronLeft /></button>
            <button className="carousel__btn" type="button" aria-label="Next reviews" onClick={() => go(1)}><ChevronRight /></button>
            <div className="carousel__dots" aria-label="Choose review">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  className={i === safeIndex ? 'is-on' : undefined}
                  aria-label={`Go to review ${i + 1}`}
                  aria-current={i === safeIndex ? 'true' : undefined}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
