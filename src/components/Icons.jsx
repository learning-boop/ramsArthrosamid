const base = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

export const Check = (p) => (
  <svg viewBox="0 0 24 24" strokeWidth="2.4" {...base} {...p}><path d="M20 6 9 17l-5-5" /></svg>
);
export const Cross = (p) => (
  <svg viewBox="0 0 24 24" strokeWidth="2.4" {...base} {...p}><path d="M18 6 6 18M6 6l12 12" /></svg>
);
export const Phone = (p) => (
  <svg viewBox="0 0 24 24" strokeWidth="2" {...base} {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6.2 6.2l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
);
export const Pin = (p) => (
  <svg viewBox="0 0 24 24" strokeWidth="2" {...base} {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const ChevronLeft = (p) => (
  <svg viewBox="0 0 24 24" strokeWidth="2.2" {...base} {...p}><path d="m15 18-6-6 6-6" /></svg>
);
export const ChevronRight = (p) => (
  <svg viewBox="0 0 24 24" strokeWidth="2.2" {...base} {...p}><path d="m9 18 6-6-6-6" /></svg>
);
export const ChevronDown = (p) => (
  <svg viewBox="0 0 24 24" strokeWidth="2.2" {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>
);
export const Plus = (p) => (
  <svg viewBox="0 0 24 24" strokeWidth="2.4" {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Menu = (p) => (
  <svg viewBox="0 0 24 24" strokeWidth="2" {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" strokeWidth="2" {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);

/*
 * "How it works" icons: two-tone illustrations drawn on a 64 grid.
 * Navy outlines (currentColor), gel-blue fills, a gold accent. Colours come from CSS variables.
 */
const ink = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
export const StageIcon = ({ kind }) => {
  if (kind === 'needle') return (
    // Syringe releasing a gel drop onto an ultrasound target
    <svg className="stage-icon" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="20" cy="46" r="13" fill="none" stroke="var(--gel)" strokeWidth="2" strokeDasharray="3 4" opacity=".7" />
      <circle cx="20" cy="46" r="6.5" fill="none" stroke="var(--gel)" strokeWidth="2" opacity=".5" />
      <path className="stage-icon__drop" d="M20 39c3.4 4.1 5 6.9 5 9.2a5 5 0 0 1-10 0c0-2.3 1.6-5.1 5-9.2Z" fill="var(--gel)" />
      <rect x="33" y="11" width="10" height="30" rx="3" transform="rotate(45 38 26)" fill="var(--surface)" />
      <path d="M29.5 34.5l7.5-7.5" stroke="var(--gel)" strokeWidth="6.5" strokeLinecap="round" />
      <g {...ink}>
        <rect x="33" y="11" width="10" height="30" rx="3" transform="rotate(45 38 26)" />
        <path d="M27.4 36.6l-3.4 3.4" />
        <path d="M48.6 15.4l5-5" />
        <path d="M50 7l7 7" />
        <path d="M37.5 30.5l-2-2M41 27l-2-2M44.5 23.5l-2-2" strokeWidth="1.8" />
      </g>
      <path d="M45.4 18.6l-4-4" stroke="var(--gold)" strokeWidth="2.6" strokeLinecap="round" transform="translate(1.8 -1.8)" />
    </svg>
  );
  if (kind === 'lining') return (
    // Knee joint: thigh bone above, shin bone below, a cushioning gel layer between
    <svg className="stage-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path className="stage-icon__glow" d="M10 33c0-6 9-8 22-8s22 2 22 8-9 8-22 8-22-2-22-8Z" fill="var(--gel)" opacity=".18" />
      <g {...ink} fill="var(--surface)">
        <path d="M24 4v12c-5 2-8 5-8 9 0 3 3 5 7 5 3 0 5-2 9-2s6 2 9 2c4 0 7-2 7-5 0-4-3-7-8-9V4" />
        <path d="M18 60V46c-3-1-5-3-5-6 0-2 2-3 5-3h28c3 0 5 1 5 3 0 3-2 5-5 6v14" />
      </g>
      <path d="M17 33.5c5 1.6 10 2.2 15 2.2s10-.6 15-2.2" fill="none" stroke="var(--gel)" strokeWidth="4" strokeLinecap="round" />
      <path d="M12 33c-1.5-1.5-1.5-3.5 0-5M52 33c1.5-1.5 1.5-3.5 0-5" fill="none" stroke="var(--gold)" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
  return (
    // Gel drop inside four gold segments: one per year of reported relief
    <svg className="stage-icon" viewBox="0 0 64 64" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          className="stage-icon__seg"
          d="M32 6a26 26 0 0 1 24.3 16.6"
          transform={`rotate(${i * 90 + 4} 32 32)`}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="4"
          strokeLinecap="round"
          style={{ '--i': i }}
        />
      ))}
      <path d="M32 17c6.5 7.8 9.8 13.4 9.8 17.8a9.8 9.8 0 0 1-19.6 0c0-4.4 3.3-10 9.8-17.8Z" fill="var(--gel)" />
      <path d="M27.5 35.5a4.6 4.6 0 0 0 3.6 4.4" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity=".9" />
      <path d="M32 17c6.5 7.8 9.8 13.4 9.8 17.8a9.8 9.8 0 0 1-19.6 0c0-4.4 3.3-10 9.8-17.8Z" {...ink} />
    </svg>
  );
};
