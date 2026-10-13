import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/*
 * Front view of the knee in three states. Switching state animates the joint: in osteoarthritis the
 * cartilage thins, the joint space narrows, bone spurs form and the lining becomes inflamed; with
 * Arthrosamid® the lining calms and a cushioning hydrogel layer forms inside it (cartilage is not regrown).
 */
const STATES = [
  { key: 'healthy', label: 'Healthy knee', note: 'Smooth cartilage cushions the bones, and a thin, calm lining keeps the joint moving freely.' },
  { key: 'oa', label: 'Osteoarthritis', note: 'Cartilage wears thin, the joint space narrows, bone spurs form and the lining becomes inflamed, causing pain, stiffness and swelling.' },
  { key: 'gel', label: 'With Arthrosamid®', note: 'The hydrogel joins the lining, forming a cushioning layer that calms inflammation. It doesn’t regrow cartilage; it protects the joint from the inside.' },
];

export default function KneeAnatomy() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.45 });
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);

  // Walk through the three states once it's on screen, until the visitor takes over.
  useEffect(() => {
    if (!inView || touched || reduce) return undefined;
    const t = setInterval(() => setActive((a) => (a + 1) % STATES.length), 3600);
    return () => clearInterval(t);
  }, [inView, touched, reduce]);

  const pick = (i) => { setTouched(true); setActive(i); };
  const state = STATES[active].key;

  return (
    <figure className={`anat anat--${state}`} ref={ref}>
      <div className="anat__tabs" role="tablist" aria-label="Knee condition">
        {STATES.map((s, i) => (
          <button
            key={s.key}
            type="button"
            role="tab"
            aria-selected={active === i}
            className={`anat__tab${active === i ? ' is-on' : ''}`}
            onClick={() => pick(i)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <svg className="anat__svg" viewBox="0 0 540 560" role="img" aria-labelledby="anatTitle anatDesc">
        <title id="anatTitle">{`Knee joint: ${STATES[active].label}`}</title>
        <desc id="anatDesc">{STATES[active].note}</desc>
        <defs>
          <linearGradient id="anatBone" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ead9bf" />
            <stop offset=".45" stopColor="#f8efe1" />
            <stop offset="1" stopColor="#e2cfb2" />
          </linearGradient>
          <radialGradient id="anatInflame" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#e26b52" stopOpacity=".45" />
            <stop offset="1" stopColor="#e26b52" stopOpacity="0" />
          </radialGradient>
          <filter id="anatSoft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="10" /></filter>
        </defs>

        {/* Inflammation glow (osteoarthritis) */}
        <ellipse className="anat__inflame" cx="200" cy="290" rx="150" ry="95" fill="url(#anatInflame)" filter="url(#anatSoft)" />

        {/* Joint capsule / synovial lining */}
        <path className="anat__capsule" d="M84,236 C70,268 72,318 92,348 C120,388 280,388 308,348 C328,318 330,268 316,236 C298,206 102,206 84,236 Z" />
        {/* Hydrogel layer integrated with the lining (Arthrosamid) */}
        <path className="anat__gel" d="M92,240 C80,268 82,314 99,341 C126,377 274,377 301,341 C318,314 320,268 308,240 C292,214 108,214 92,240 Z" />

        {/* Tibia + fibula */}
        <g className="anat__tibia">
          <path className="anat__bone" d="M288,330 C300,326 313,334 311,350 L305,556 L287,556 L285,350 C284,338 284,332 288,330 Z" />
          <path className="anat__bone" d="M98,296 C98,286 130,283 160,287 L200,289 L240,287 C270,283 302,286 302,296 C302,312 286,325 266,332 C250,339 243,352 241,378 L241,556 L169,556 L169,378 C167,352 160,339 144,332 C124,325 98,312 98,296 Z" />
          <path className="anat__spur" d="M98,300 L86,306 L99,308 Z M302,300 L314,306 L301,308 Z" />
          <path className="anat__cart anat__cart--tibia" d="M108,291 C132,285 162,288 194,290 M206,290 C238,288 268,285 292,291" />
        </g>

        {/* Menisci */}
        <path className="anat__meniscus" d="M100,289 C108,279 124,276 140,282 L132,290 Z M300,289 C292,279 276,276 260,282 L268,290 Z" />

        {/* Femur (moves down slightly as the joint space narrows) */}
        <g className="anat__femur">
          <path className="anat__bone" d="M164,0 L236,0 L236,150 C236,176 270,186 286,206 C299,223 299,251 286,263 C273,275 252,273 240,263 C228,253 218,251 200,251 C182,251 172,253 160,263 C148,273 127,275 114,263 C101,251 101,223 114,206 C130,186 164,176 164,150 Z" />
          <ellipse className="anat__patella" cx="200" cy="200" rx="30" ry="36" />
          <path className="anat__spur" d="M104,250 L92,262 L108,258 Z M296,250 L308,262 L292,258 Z" />
          <path className="anat__cart anat__cart--femur" d="M109,236 C107,256 124,272 144,270 C154,269 160,263 160,263 M291,236 C293,256 276,272 256,270 C246,269 240,263 240,263" />
        </g>

        {/* Pain points (osteoarthritis) */}
        <g className="anat__ache" aria-hidden="true">
          {[[96, 270], [304, 270], [130, 318], [270, 318], [200, 300]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="5" style={{ animationDelay: `${i * 0.18}s` }} />
          ))}
        </g>

        {/* Labels */}
        <g className="anat__labels" aria-hidden="true">
          <g><line x1="236" y1="70" x2="352" y2="70" /><circle cx="236" cy="70" r="3" /><text x="360" y="66">Femur</text><text className="sub" x="360" y="84">thigh bone</text></g>
          <g><line x1="226" y1="200" x2="352" y2="160" /><circle cx="226" cy="200" r="3" /><text x="360" y="156">Kneecap</text></g>
          <g className="anat__lbl-cart"><line x1="280" y1="262" x2="352" y2="236" /><circle cx="280" cy="262" r="3" /><text x="360" y="232">Cartilage</text><text className="sub anat__state-text" x="360" y="250">{state === 'healthy' ? 'smooth and thick' : 'worn thin'}</text></g>
          <g><line x1="294" y1="286" x2="352" y2="290" /><circle cx="294" cy="286" r="3" /><text x="360" y="295">Meniscus</text></g>
          <g className="anat__lbl-lining"><line x1="318" y1="320" x2="352" y2="336" /><circle cx="318" cy="320" r="3" /><text x="360" y="334">{state === 'gel' ? 'Arthrosamid® layer' : 'Synovial lining'}</text><text className="sub anat__state-text" x="360" y="352">{state === 'healthy' ? 'thin and calm' : state === 'oa' ? 'inflamed' : 'cushioned and calmer'}</text></g>
          <g className="anat__lbl-spur"><line x1="92" y1="262" x2="46" y2="300" /><circle cx="94" cy="260" r="3" /><text x="0" y="322" textAnchor="start">Bone spur</text></g>
          <g><line x1="241" y1="460" x2="352" y2="460" /><circle cx="241" cy="460" r="3" /><text x="360" y="456">Tibia</text><text className="sub" x="360" y="474">shin bone</text></g>
          <g><line x1="305" y1="520" x2="352" y2="520" /><circle cx="305" cy="520" r="3" /><text x="360" y="525">Fibula</text></g>
        </g>
      </svg>

      <figcaption className="anat__note" aria-live="polite">
        <strong>{STATES[active].label}</strong>
        {STATES[active].note}
      </figcaption>
    </figure>
  );
}
