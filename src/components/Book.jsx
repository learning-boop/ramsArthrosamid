import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { Pin } from './Icons.jsx';
import OpeningHours, { OpenStatus } from './OpeningHours.jsx';
import { CLINICS, CLINIC_OPTIONS } from '../data/content.js';
import { CLINIC, FORM_ENDPOINT } from '../config.js';

const EMPTY = { name: '', phone: '', email: '', clinic: CLINIC_OPTIONS[0], knee: 'Right', message: '', consent: false, website: '' };

export default function Book() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState(null); // { kind: 'error' | 'ok' | 'sending', text, note }

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const problems = [];
    if (!form.name.trim()) problems.push('your name');
    if (form.phone.replace(/\D/g, '').length < 10) problems.push('a phone number we can reach you on');
    if (!form.consent) problems.push('permission for us to contact you');
    if (problems.length) {
      setStatus({ kind: 'error', text: `Please add ${problems.join(', ').replace(/, ([^,]*)$/, ' and $1')}.` });
      return;
    }
    if (form.website) { setStatus({ kind: 'ok', text: 'Thank you.' }); return; } // honeypot

    const firstName = form.name.trim().split(' ')[0];
    const thanks = `Thank you, ${firstName}. We’ll call you on ${form.phone.trim()} within one working day. Prefer not to wait? Call ${CLINIC.phoneDisplay}.`;

    if (!FORM_ENDPOINT) {
      setStatus({ kind: 'ok', text: thanks, note: 'Preview: this form isn’t connected to the booking system yet, so nothing has been sent.' });
      setForm(EMPTY);
      return;
    }
    setStatus({ kind: 'sending', text: 'Sending…' });
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website: undefined, page: 'Arthrosamid knee injection' }),
      });
      if (!res.ok) throw new Error('bad status');
      setStatus({ kind: 'ok', text: thanks });
      setForm(EMPTY);
    } catch {
      setStatus({ kind: 'error', text: `We couldn’t send that just now. Please try again, or call ${CLINIC.phoneDisplay}.` });
    }
  };

  return (
    <section className="section section--mist book" id="book" aria-labelledby="bookTitle">
      <div className="wrap">
        <div className="book__intro">
          <Reveal as="p" className="kicker">Book</Reveal>
          <Reveal as="h2" className="h2" id="bookTitle">Talk to us about your knee</Reveal>
          <Reveal as="p" className="lead measure">Early and emergency appointments are available. If you can’t get to a clinic, home visits can be arranged.</Reveal>
        </div>
        <div className="book__details">
          <Reveal className="hours-card">
            <div className="hours-card__head">
              <h3 className="h3">Opening hours</h3>
              <OpenStatus />
            </div>
            <OpeningHours />
            <p className="hours-card__note">Call <a href={CLINIC.phoneHref}>{CLINIC.phoneDisplay}</a> to book at any of our clinics.</p>
          </Reveal>
          <Reveal as="ul" className="clinics">
            {CLINICS.map((c) => (
              <li key={c.name}><Pin /><div><strong>{c.name}</strong><span>{c.area}</span></div></li>
            ))}
          </Reveal>
        </div>

        <Reveal as="form" className="form book__form" delay={0.15} noValidate onSubmit={onSubmit}>
          <h3 className="h3">Request a call back</h3>
          <p className="form__hint">Tell us a little about your knee and we’ll ring you to find the right appointment. No obligation.</p>
          <div className="form__grid">
            <div className="field"><label htmlFor="fName">Your name</label><input id="fName" type="text" autoComplete="name" value={form.name} onChange={set('name')} required /></div>
            <div className="field"><label htmlFor="fPhone">Phone number</label><input id="fPhone" type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={set('phone')} required /></div>
            <div className="field span2"><label htmlFor="fEmail">Email (optional)</label><input id="fEmail" type="email" autoComplete="email" value={form.email} onChange={set('email')} /></div>
            <div className="field">
              <label htmlFor="fClinic">Preferred clinic</label>
              <select id="fClinic" value={form.clinic} onChange={set('clinic')}>
                {CLINIC_OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="fKnee">Which knee?</label>
              <select id="fKnee" value={form.knee} onChange={set('knee')}>
                <option>Right</option><option>Left</option><option>Both</option>
              </select>
            </div>
            <div className="field span2">
              <label htmlFor="fMsg">Anything you’d like us to know? (optional)</label>
              <textarea id="fMsg" value={form.message} onChange={set('message')} placeholder="For example: how long you’ve had pain, treatments you’ve tried, or what you’d like to get back to." />
            </div>
          </div>
          <div className="hp" aria-hidden="true">
            <label htmlFor="fWebsite">Leave blank</label>
            <input id="fWebsite" type="text" tabIndex="-1" autoComplete="off" value={form.website} onChange={set('website')} />
          </div>
          <label className="form__consent">
            <input id="fConsent" type="checkbox" checked={form.consent} onChange={set('consent')} required />
            <span>I’m happy for {CLINIC.name} to contact me about my enquiry. We never share your details.</span>
          </label>
          <div className="form__actions">
            <button className="btn btn--primary" type="submit" disabled={status?.kind === 'sending'}>
              {status?.kind === 'sending' ? 'Sending…' : 'Request a call back'}
            </button>
            <span className="form__alt">or call <a href={CLINIC.phoneHref}>{CLINIC.phoneDisplay}</a></span>
          </div>
          <ul className="form__trust">
            <li>We call back within one working day</li>
            <li>No obligation</li>
            <li>Your details stay private</li>
          </ul>
          {status && status.kind !== 'sending' && (
            <div className={`form__status form__status--${status.kind}`} role="status" aria-live="polite">
              {status.text}
              {status.note && <small>{status.note}</small>}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
