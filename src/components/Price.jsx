import Reveal from './Reveal.jsx';
import Magnetic from './Magnetic.jsx';
import { Check } from './Icons.jsx';
import { INCLUSIONS } from '../data/content.js';
import { CLINIC, PRICE } from '../config.js';

/** Price: the all-inclusive treatment, and the consultation-and-scan-only option. */
export default function Price() {
  return (
    <section className="section section--navy price" id="price" aria-labelledby="priceTitle">
      <div className="wrap">
        <div className="price__intro">
          <Reveal as="p" className="kicker">Price</Reveal>
          <Reveal as="h2" className="h2" id="priceTitle">One price. Everything included.</Reveal>
          <Reveal as="p" className="lead">No hidden extras on the day. You’ll know the full cost before you walk in.</Reveal>
        </div>

        <div className="price__cards">
          <Reveal className="price__card price__card--main">
            <span className="price__badge">Full treatment</span>
            <p className="price__name">Ultrasound-guided Arthrosamid® injection</p>
            <p className="price__amount"><b>{PRICE.perKnee}</b><span>per knee, all-inclusive</span></p>
            <ul className="price__inc">
              {INCLUSIONS.map((item) => <li key={item}><Check />{item}</li>)}
            </ul>
            <Magnetic><a className="btn btn--primary btn--shine" href={CLINIC.bookingUrl}>Book a consultation</a></Magnetic>
          </Reveal>

          <Reveal className="price__card price__card--alt" delay={0.12}>
            <span className="price__badge price__badge--alt">Not sure yet?</span>
            <p className="price__name">Consultation and ultrasound scan only</p>
            <p className="price__amount"><b>{PRICE.consultationAndScan}</b><span>consultation only</span></p>
            <p className="price__alt-text">A full assessment and a live ultrasound scan of your knee, with an honest answer on whether Arthrosamid® is right for you. Then decide in your own time.</p>
            <a className="btn btn--glass" href={CLINIC.bookingUrl}>Book a consultation only</a>
          </Reveal>
        </div>
        <Reveal as="p" className="price__fine">Each knee is priced separately. Suitability is confirmed at consultation; Arthrosamid® is not suitable for everyone and results vary.</Reveal>
      </div>
    </section>
  );
}
