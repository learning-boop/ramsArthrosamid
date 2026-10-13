import { CLINIC } from '../config.js';
import Logo from './Logo.jsx';
import OpeningHours from './OpeningHours.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__brand">
          <a className="brand" href="#home" aria-label="Arthrosamid® home">
            <Logo tone="white" />
          </a>
          <p className="footer__blurb">Private musculoskeletal ultrasound scans and ultrasound-guided injections across Warwickshire, the West Midlands, Buckinghamshire and Leicestershire.</p>
          <div className="footer__regs"><span>HCPC</span><span>CSP</span><span>SoR</span></div>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={CLINIC.phoneHref}>{CLINIC.phoneDisplay}</a></li>
            <li><a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a></li>
            <li>{CLINIC.postalAddress}</li>
          </ul>
          <h4 className="footer__hours-title">Opening hours</h4>
          <OpeningHours className="hours--footer" />
        </div>
        <div className="footer__legal">
          <p>Arthrosamid® is a registered trademark of Contura. This page is for information and does not replace a consultation. Arthrosamid® is not suitable for everyone; suitability is confirmed by a clinician after assessment and, where appropriate, ultrasound scan. Individual results vary.</p>
          <p>© {new Date().getFullYear()} {CLINIC.name} · <a href={`${CLINIC.website}/privacy-policy/`}>Privacy policy</a> · <a href={`${CLINIC.website}/privacy-policy/`}>Cookie policy</a></p>
        </div>
      </div>
    </footer>
  );
}
