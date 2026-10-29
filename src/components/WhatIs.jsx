import Reveal from './Reveal.jsx';
import { Check } from './Icons.jsx';
import { WHAT_IS } from '../data/content.js';

/** "What is Arthrosamid®?": five plain lines for people who have never heard of it. */
export default function WhatIs() {
  return (
    <section className="section section--mist whatis" id="about" aria-labelledby="whatisTitle">
      <div className="wrap">
        <div>
          <Reveal as="p" className="kicker">New to Arthrosamid®?</Reveal>
          <Reveal as="h2" className="h2" id="whatisTitle">What is Arthrosamid®?</Reveal>
        </div>
        <ul className="whatis__list">
          {WHAT_IS.map((line, i) => (
            <Reveal as="li" key={line} delay={0.06 + i * 0.07}>
              <Check />
              <span>{line}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
