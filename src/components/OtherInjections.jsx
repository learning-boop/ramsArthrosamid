import Reveal from './Reveal.jsx';
import { CLINIC } from '../config.js';

/** "Other options may be discussed": a short note, since the main service is Arthrosamid®. */
export default function OtherInjections() {
  return (
    <section className="section other-inj" id="other-injections" aria-labelledby="otherTitle">
      <div className="wrap other-inj__note">
        <Reveal as="h2" className="h3" id="otherTitle">Other options may be discussed</Reveal>
        <Reveal as="p" className="measure">
          Arthrosamid® isn’t right for every knee. At your consultation Ram can talk through other approaches to knee
          osteoarthritis, including exercise-based care and other injections, and explain the possible benefits and risks of each.
        </Reveal>
        <Reveal as="p"><a href={`${CLINIC.bookingUrl}?option=other`}>Ask about other options</a></Reveal>
      </div>
    </section>
  );
}
