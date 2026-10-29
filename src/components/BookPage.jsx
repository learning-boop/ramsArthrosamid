import { useEffect, useMemo, useRef, useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Reveal from './Reveal.jsx';
import OpeningHours from './OpeningHours.jsx';
import { Phone, Pin, Check } from './Icons.jsx';
import { CLINICS } from '../data/content.js';
import { CLINIC, BRAND, PRICE, BOOKING } from '../config.js';

const OPTIONS = [
  { value: 'treatment', label: `Full Arthrosamid® treatment (${PRICE.perKnee} per knee, all-inclusive)` },
  { value: 'consultation', label: `Consultation and ultrasound scan only (${PRICE.consultationAndScan})` },
  { value: 'unsure', label: 'Not sure yet, I’d like advice' },
];
const KNEES = ['Right', 'Left', 'Both', 'Not sure'];

/** Read ?clinic= and ?option= so buttons elsewhere can open the form preselected. */
function initialForm() {
  const q = new URLSearchParams(window.location.search);
  const clinic = CLINICS.some((c) => c.slug === q.get('clinic')) ? q.get('clinic') : '';
  const option = OPTIONS.some((o) => o.value === q.get('option')) ? q.get('option') : 'treatment';
  return { name: '', phone: '', email: '', clinic, option, knee: 'Right', message: '', consent: false, website: '' };
}

/**
 * Booking page. Each request is emailed to the inbox of the chosen clinic:
 * Joint Care Clinics for Rugby, Birmingham & Solihull, Leicester and Milton Keynes;
 * Joint Care North East for Newcastle.
 */
export default function BookPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // { kind: 'sending' | 'ok' | 'error', text }
  const bodyRef = useRef(null);

  // Bring the thank-you card (or an error) into view: the form it replaces is much taller.
  useEffect(() => {
    if (status?.kind === 'ok') bodyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [status]);
  const clinic = useMemo(() => CLINICS.find((c) => c.slug === form.clinic), [form.clinic]);
  const inbox = clinic ? BOOKING.inboxes[clinic.inbox] : null; // { email, accessKey }

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const missing = [];
    if (!form.name.trim()) missing.push('your name');
    if (form.phone.replace(/\D/g, '').length < 10) missing.push('a phone number we can reach you on');
    if (!clinic) missing.push('the clinic you’d like to visit');
    if (!form.consent) missing.push('permission for us to contact you');
    if (missing.length) {
      setStatus({ kind: 'error', text: `Please add ${missing.join(', ').replace(/, ([^,]*)$/, ' and $1')}.` });
      return;
    }
    if (form.website) { setStatus({ kind: 'ok', text: 'Thank you.' }); return; } // honeypot: bots fill this

    const option = OPTIONS.find((o) => o.value === form.option).label;
    setStatus({ kind: 'sending', text: 'Sending…' });
    try {
      if (!inbox.accessKey) throw new Error(`No Web3Forms access key set for ${inbox.email}`);
      const res = await fetch(BOOKING.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: inbox.accessKey,
          subject: `Arthrosamid® consultation request – ${clinic.name}`,
          from_name: `${BRAND.name} website`,
          email: form.email.trim() || undefined, // reply-to: replying goes straight to the patient
          Treatment: 'Arthrosamid® knee injection',
          Clinic: `${clinic.name} – ${clinic.address}`,
          'Interested in': option,
          Knee: form.knee,
          Name: form.name.trim(),
          Phone: form.phone.trim(),
          Email: form.email.trim() || 'Not given',
          Message: form.message.trim() || '—',
          Source: 'Website booking form',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success !== true) throw new Error(data.message || data.body?.message || 'not sent');
      const first = form.name.trim().split(' ')[0];
      setStatus({ kind: 'ok', text: `Thank you, ${first}. Your request has been sent to our ${clinic.name} clinic team, who will call you on ${form.phone.trim()} to arrange your appointment.` });
      setForm((f) => ({ ...initialForm(), clinic: f.clinic }));
    } catch (err) {
      console.error('Booking not sent:', err.message);
      setStatus({ kind: 'error', text: `Sorry, we couldn’t send that just now. Please call ${CLINIC.phoneDisplay} or email ${inbox.email}.` });
    }
  };

  return (
    <>
      <Header onHome={false} />
      <main>
        <section className="book-hero" aria-labelledby="bookTitle">
          <div className="wrap">
            <p className="kicker">Book</p>
            <h1 className="h2" id="bookTitle">Book your Arthrosamid® consultation</h1>
            <p className="lead">Tell us a little about your knee and choose a clinic. The clinic team will call you to arrange your appointment.</p>
          </div>
        </section>

        <section className="section book-body" ref={bodyRef}>
          <div className="wrap">
            {status?.kind === 'ok' ? (
              <Reveal className="book-done" role="status">
                <span className="book-done__icon" aria-hidden="true"><Check /></span>
                <h2 className="h3">Request sent</h2>
                <p>{status.text}</p>
                <a className="btn btn--ghost" href="./">Back to the home page</a>
              </Reveal>
            ) : (
              <form className="form book-form" noValidate onSubmit={onSubmit}>
                <fieldset className="book-form__group">
                  <legend>1. Choose a clinic</legend>
                  <div className="book-clinics" role="radiogroup" aria-label="Clinic">
                    {CLINICS.map((c) => (
                      <label key={c.slug} className={`book-clinic${form.clinic === c.slug ? ' is-on' : ''}`}>
                        <input type="radio" name="clinic" value={c.slug} checked={form.clinic === c.slug} onChange={set('clinic')} />
                        <span className="book-clinic__name">{c.name}</span>
                        {c.operator && <span className="book-clinic__op">{c.operator}</span>}
                      </label>
                    ))}
                  </div>
                  {clinic && <p className="book-clinic__address"><Pin /> {clinic.address}</p>}
                </fieldset>

                <fieldset className="book-form__group">
                  <legend>2. What you’re interested in</legend>
                  <div className="book-options">
                    {OPTIONS.map((o) => (
                      <label key={o.value} className={`book-option${form.option === o.value ? ' is-on' : ''}`}>
                        <input type="radio" name="option" value={o.value} checked={form.option === o.value} onChange={set('option')} />
                        <span>{o.label}</span>
                      </label>
                    ))}
                  </div>
                  <div className="field book-knee">
                    <label htmlFor="bKnee">Which knee?</label>
                    <select id="bKnee" value={form.knee} onChange={set('knee')}>
                      {KNEES.map((k) => <option key={k}>{k}</option>)}
                    </select>
                  </div>
                </fieldset>

                <fieldset className="book-form__group">
                  <legend>3. Your details</legend>
                  <div className="form__grid">
                    <div className="field"><label htmlFor="bName">Your name</label><input id="bName" type="text" autoComplete="name" value={form.name} onChange={set('name')} required /></div>
                    <div className="field"><label htmlFor="bPhone">Phone number</label><input id="bPhone" type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={set('phone')} required /></div>
                    <div className="field span2"><label htmlFor="bEmail">Email (optional)</label><input id="bEmail" type="email" autoComplete="email" value={form.email} onChange={set('email')} /></div>
                    <div className="field span2">
                      <label htmlFor="bMsg">Anything you’d like us to know? (optional)</label>
                      <textarea id="bMsg" value={form.message} onChange={set('message')} placeholder="For example: how long you’ve had knee pain, treatments you’ve tried, or the best time to call." />
                    </div>
                  </div>
                  <div className="hp" aria-hidden="true">
                    <label htmlFor="bWebsite">Leave blank</label>
                    <input id="bWebsite" type="text" tabIndex="-1" autoComplete="off" value={form.website} onChange={set('website')} />
                  </div>
                  <label className="form__consent">
                    <input type="checkbox" checked={form.consent} onChange={set('consent')} required />
                    <span>I’m happy for {clinic?.operator || CLINIC.name} to contact me about my Arthrosamid® enquiry. We never share your details.</span>
                  </label>
                </fieldset>

                <div className="form__actions">
                  <button className="btn btn--primary" type="submit" disabled={status?.kind === 'sending'}>
                    {status?.kind === 'sending' ? 'Sending…' : 'Request my consultation'}
                  </button>
                  <span className="form__alt">or call <a href={CLINIC.phoneHref}>{CLINIC.phoneDisplay}</a></span>
                </div>
                {status?.kind === 'error' && <div className="form__status form__status--error" role="alert">{status.text}</div>}
              </form>
            )}

            <aside className="book-aside" aria-label="Before you book">
              <div className="book-aside__card">
                <h2 className="h3">What happens next</h2>
                <ol className="book-next">
                  <li>The clinic team calls you to answer questions and find a time.</li>
                  <li>Your consultation and ultrasound scan with Ram.</li>
                  <li>If Arthrosamid® is right for you, the injection can follow in the same visit.</li>
                </ol>
              </div>
              <div className="book-aside__card">
                <h2 className="h3">Price</h2>
                <p className="book-price"><b>{PRICE.perKnee}</b> per knee, everything included</p>
                <p className="book-price"><b>{PRICE.consultationAndScan}</b> consultation and scan only</p>
              </div>
              <div className="book-aside__card">
                <h2 className="h3">Prefer to call?</h2>
                <a className="btn btn--ghost book-call" href={CLINIC.phoneHref}><Phone /> {CLINIC.phoneDisplay}</a>
                <OpeningHours />
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer onHome={false} />
    </>
  );
}
