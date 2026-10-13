import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { INCLUSIONS } from '../data/content.js';
import { CLINIC, PRICE } from '../config.js';

export default function Price() {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, amount: 0.35 });

  return (
    <section className="section section--navy price" id="price" aria-labelledby="priceTitle">
      <div className="wrap">
        <div>
          <Reveal as="p" className="kicker">Price</Reveal>
          <Reveal as="h2" className="h2" id="priceTitle">One price. Nothing added on the day.</Reveal>
          <Reveal as="p" className="lead">
            Consultation, scan and injection in one price, so you know the full cost before you walk in.
          </Reveal>
          <div className="price__notes">
            <Reveal className="price__note" delay={0.1}>
              <strong>Both knees?</strong>
              Each knee is {PRICE.perKnee}. We’ll advise whether to treat both on the same day or stage them, depending on your symptoms and health.
            </Reveal>
          </div>
        </div>

        <Reveal className={`price__card${inView ? ' in' : ''}`} ref={cardRef}>
          <p className="kicker" style={{ marginBottom: 0 }}>Ultrasound-guided Arthrosamid® injection</p>
          <p className="price__amount"><b>{PRICE.perKnee}</b><span>per knee</span></p>
          <p className="price__lead">A single appointment of around 60 minutes, including:</p>
          <ul className="price__inc">
            {INCLUSIONS.map((item, i) => (
              <li key={item} style={{ '--d': `${0.1 + i * 0.1}s` }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path pathLength="1" d="M20 6 9 17l-5-5" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="form__actions">
            <a className="btn btn--primary" href="#book">Book a consultation</a>
            <a className="btn btn--ghost" href={CLINIC.phoneHref}>Call {CLINIC.phoneDisplay}</a>
          </div>
          <p className="price__fine">Suitability is confirmed at consultation. Arthrosamid® is not suitable for everyone and results vary.</p>
        </Reveal>
      </div>
    </section>
  );
}
