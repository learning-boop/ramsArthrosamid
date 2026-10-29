import { useEffect, useState } from 'react';
import { NAV } from '../data/content.js';
import { CLINIC, BRAND } from '../config.js';
import { Menu, CloseIcon } from './Icons.jsx';
import Logo from './Logo.jsx';
import { OpenStatus } from './OpeningHours.jsx';

/** `onHome={false}` (booking page): section links point back to the home page and the bar is always solid. */
export default function Header({ onHome = true }) {
  const link = (href) => (onHome ? href : `./${href}`);
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = NAV.filter((n) => n.href.startsWith('#') && n.href !== '#home').map((n) => document.querySelector(n.href)).filter(Boolean);
    let ticking = false;
    const update = () => {
      setStuck(!onHome || window.scrollY > 60);
      const y = window.innerHeight * 0.4;
      const hero = document.querySelector('.hero');
      let current = hero && hero.getBoundingClientRect().bottom > y ? '#home' : '';
      sections.forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= y && r.bottom > y) current = '#' + s.id;
      });
      setActive(current);
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>
            <OpenStatus className="topbar__status" />
            Call <a href={CLINIC.phoneHref}>{CLINIC.phoneDisplay}</a>
            <span className="topbar__email">
              <span className="topbar__sep" aria-hidden="true"> · </span>
              <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
            </span>
          </span>
          <span className="topbar__clinics">Clinics in Rugby, Birmingham, Leicester, Milton Keynes and Newcastle</span>
        </div>
      </div>

      <header className={`header${stuck ? ' is-stuck' : ''}${open ? ' is-open' : ''}`} id="top">
        <div className="wrap">
          <a className="brand" href={link('#home')} aria-label={`${BRAND.name} home`}>
            <Logo tone="auto" />
          </a>

          <nav className="nav" aria-label="Page sections">
            {NAV.map((n) => (
              <a key={n.href} href={link(n.href)} className={active === n.href ? 'is-active' : undefined}>{n.label}</a>
            ))}
            <a className="btn btn--primary" href={CLINIC.bookingUrl}>Book a consultation</a>
          </nav>

          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobileNav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <Menu />}
            {open ? 'Close' : 'Menu'}
          </button>
        </div>

        <div className={`mobile-nav${open ? ' is-open' : ''}`} id="mobileNav">
          <div className="wrap">
            {NAV.map((n) => (
              <a key={n.href} href={link(n.href)} onClick={() => setOpen(false)}>{n.label}</a>
            ))}
            <a href={CLINIC.bookingUrl} onClick={() => setOpen(false)}>Book a consultation</a>
          </div>
        </div>
      </header>
    </>
  );
}
