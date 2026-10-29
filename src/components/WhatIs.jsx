import Reveal from './Reveal.jsx';
import Magnetic from './Magnetic.jsx';
import { Check } from './Icons.jsx';
import { WHY_CHOOSE } from '../data/content.js';
import { CLINIC } from '../config.js';

/** "Why people choose Arthrosamid®": five benefit-led reasons, ending in a booking button. */
export default function WhatIs() {
  return (
    <section className="section section--mist whatis" id="about" aria-labelledby="whatisTitle">
      <div className="wrap">
        <div className="whatis__head">
          <Reveal as="p" className="kicker">Still putting up with knee pain?</Reveal>
          <Reveal as="h2" className="h2" id="whatisTitle">Why people choose Arthrosamid®</Reveal>
          <Reveal className="whatis__cta">
            <Magnetic><a className="btn btn--primary btn--shine" href={CLINIC.bookingUrl}>Book a consultation</a></Magnetic>
          </Reveal>
        </div>
        <ul className="whatis__list">
          {WHY_CHOOSE.map((r, i) => (
            <Reveal as="li" key={r.title} delay={0.06 + i * 0.07}>
              <Check />
              <span><strong>{r.title}</strong> {r.body}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
