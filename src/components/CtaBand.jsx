import Reveal from './Reveal.jsx';
import Magnetic from './Magnetic.jsx';
import { Phone } from './Icons.jsx';
import { CLINIC, PRICE } from '../config.js';

/** Mid-page prompt with a low-commitment first step: the consultation and scan on its own. */
export default function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="ctaBandTitle">
      <div className="wrap">
        <Reveal className="cta-band__card" style={{ '--cta-img': 'url(./media/beach-couple.jpg)' }}>
          <div className="cta-band__copy">
            <p className="kicker">Not sure yet?</p>
            <h2 className="h2" id="ctaBandTitle">Start with a consultation and scan</h2>
            <p className="lead">
              Find out what’s really going on in your knee, see it on the ultrasound screen, and get an honest view on whether Arthrosamid® is right for you. {PRICE.consultationAndScan}, no obligation.
            </p>
          </div>
          <div className="cta-band__actions">
            <Magnetic><a className="btn btn--primary btn--shine" href="#book">Book a consultation</a></Magnetic>
            <Magnetic><a className="btn btn--glass" href={CLINIC.phoneHref}><Phone /> {CLINIC.phoneDisplay}</a></Magnetic>
            <p className="cta-band__note">Early and emergency appointments available · Home visits</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
