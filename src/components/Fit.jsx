import Reveal from './Reveal.jsx';
import SelfCheck from './SelfCheck.jsx';
import { Check, Cross } from './Icons.jsx';
import { FIT_YES, FIT_NO } from '../data/content.js';

export default function Fit() {
  return (
    <section className="section fit" id="fit" aria-labelledby="fitTitle">
      <div className="wrap">
        <Reveal as="p" className="kicker">Is it for me?</Reveal>
        <Reveal as="h2" className="h2 measure" id="fitTitle">Who Arthrosamid® tends to help, and who should wait</Reveal>
        <Reveal as="p" className="lead measure">Suitability depends on your symptom pattern, history, examination and what the scan shows. As a guide:</Reveal>
        <div className="fit__cols">
          <Reveal className="fit__col fit__col--yes">
            <h3 className="h3">Often a good fit if you</h3>
            <ul>
              {FIT_YES.map((t) => <li key={t}><Check />{t}</li>)}
            </ul>
          </Reveal>
          <Reveal className="fit__col fit__col--no" delay={0.15}>
            <h3 className="h3">Not recommended if you</h3>
            <ul>
              {FIT_NO.map((t) => <li key={t}><Cross />{t}</li>)}
            </ul>
            <p className="fit__foot">Your clinician will go through your medical history and, where appropriate, scan the joint before confirming Arthrosamid® is a safe and sensible option for you.</p>
          </Reveal>
        </div>
        <Reveal><SelfCheck /></Reveal>
      </div>
    </section>
  );
}
