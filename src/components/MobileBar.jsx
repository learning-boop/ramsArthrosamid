import { useEffect, useState } from 'react';
import { CLINIC } from '../config.js';
import { Phone } from './Icons.jsx';

/** Fixed call / book bar on phones. Appears once the hero has scrolled past, hides while the form is on screen. */
export default function MobileBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    document.body.classList.add('has-mobilebar');
    const hero = document.querySelector('.hero');
    const book = document.querySelector('#book');
    let ticking = false;
    const update = () => {
      const pastHero = hero ? window.scrollY > hero.offsetHeight * 0.55 : true;
      let formVisible = false;
      if (book) {
        const r = book.getBoundingClientRect();
        formVisible = r.top < window.innerHeight * 0.5 && r.bottom > 0;
      }
      setShown(pastHero && !formVisible);
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      document.body.classList.remove('has-mobilebar');
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className={`mobilebar${shown ? ' is-shown' : ''}`} aria-label="Quick actions">
      <a className="btn btn--ghost" href={CLINIC.phoneHref} aria-label={`Call ${CLINIC.phoneDisplay}`}><Phone /> Call</a>
      <a className="btn btn--primary" href="#book">Book consultation</a>
    </div>
  );
}
