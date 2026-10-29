import Reveal from './Reveal.jsx';
import { Pin, Phone } from './Icons.jsx';
import { CLINICS } from '../data/content.js';
import { CLINIC } from '../config.js';

const mapsUrl = (c) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.mapsQuery || `Joint Care Clinics ${c.address}`)}`;

export default function Clinics() {
  return (
    <section className="section section--mist clinics-sec" id="clinics" aria-labelledby="clinicsTitle">
      <div className="wrap">
        <div className="clinics-sec__intro">
          <div>
            <Reveal as="p" className="kicker">Clinics</Reveal>
            <Reveal as="h2" className="h2" id="clinicsTitle">Where to see RamaKrishna</Reveal>
          </div>
          <Reveal as="p" className="lead measure">
            Contact {CLINIC.name} to enquire about an Arthrosamid® consultation with RamaKrishna. The team can confirm his availability and the appropriate clinic location.
          </Reveal>
        </div>

        <ul className="clinic-cards">
          {CLINICS.map((c, i) => (
            <Reveal as="li" key={c.name} className="clinic-card" delay={0.08 * i}>
              <span className="clinic-card__pin"><Pin /></span>
              <h3>{c.name}</h3>
              {c.operator && <p className="clinic-card__operator">{c.operator}</p>}
              <address>{c.address}</address>
              <div className="clinic-card__actions">
                <a className="btn btn--primary clinic-card__book" href={`${CLINIC.bookingUrl}?clinic=${c.slug}`} aria-label={`Book a consultation at ${c.name}`}>Book now</a>
                <a href={mapsUrl(c)} target="_blank" rel="noopener noreferrer">Get directions</a>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="clinics-sec__cta">
          <a className="btn btn--primary" href={CLINIC.bookingUrl}>Book a consultation</a>
          <a className="btn btn--ghost" href={CLINIC.phoneHref}><Phone /> {CLINIC.phoneDisplay}</a>
          <a className="clinics-sec__mail" href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
        </Reveal>
      </div>
    </section>
  );
}
