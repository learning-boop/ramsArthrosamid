import Reveal from './Reveal.jsx';
import ParallaxImage from './ParallaxImage.jsx';
import { PainIcon } from './Icons.jsx';
import { PAIN_MOMENTS } from '../data/content.js';

export default function Feel() {
  return (
    <section className="section section--mist feel" id="feel" aria-labelledby="feelTitle">
      <div className="wrap">
        <div>
          <Reveal as="h2" className="h2" id="feelTitle">You know the feeling.</Reveal>
          <Reveal as="p" className="lead feel__intro">Knee osteoarthritis creeps into every part of the day. These are the moments that tell you something needs to change.</Reveal>
          <ul className="moments">
            {PAIN_MOMENTS.map((m, i) => (
              <Reveal as="li" key={m.title} className="moment" delay={0.08 + i * 0.08}>
                <span className="moment__icon"><PainIcon kind={m.icon} /></span>
                <div>
                  <h3 className="moment__title">{m.title}</h3>
                  <p>{m.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal as="p" className="feel__turn">Managing isn’t the same as living.</Reveal>
          <Reveal as="p" className="lead measure">
            Painkillers wear off. Steroid injections last a few months. Arthrosamid® is designed to keep working for years.
          </Reveal>
        </div>
        <div className="feel__side">
        <ParallaxImage className="feel__photo" src="./media/feel-stairs.jpg" alt="An older man slowly climbing a long flight of outdoor steps" ratio="4 / 3" from="right" />
        <Reveal as="aside" className="feel__aside" delay={0.2}>
          <p className="feel__stat">5.4 million</p>
          <p className="lead">people in the UK live with knee osteoarthritis. Most are told to manage it, or wait for a new knee.</p>
          <p className="feel__src">Prevalence estimate: Versus Arthritis, 2023.</p>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
