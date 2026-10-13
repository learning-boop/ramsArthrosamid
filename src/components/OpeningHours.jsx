import { useEffect, useState } from 'react';
import { OPENING_HOURS } from '../config.js';

/** Current day and minutes-past-midnight in UK time, whatever the visitor's own time zone. */
function ukNow() {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
    .formatToParts(new Date())
    .reduce((acc, p) => ({ ...acc, [p.type]: p.value }), {});
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parts.weekday);
  return { day, minutes: Number(parts.hour) * 60 + Number(parts.minute) };
}
const toMin = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };

/** Whether the clinic line is open right now; re-checks every minute. */
export function useOpenNow() {
  const check = () => {
    const { day, minutes } = ukNow();
    const today = OPENING_HOURS.find((h) => h.days.includes(day));
    return Boolean(today?.open && minutes >= toMin(today.open) && minutes < toMin(today.close));
  };
  const [open, setOpen] = useState(check);
  useEffect(() => {
    const t = setInterval(() => setOpen(check()), 60000);
    return () => clearInterval(t);
  }, []);
  return open;
}

/** Small "Open now / Closed" pill. */
export function OpenStatus({ className = '' }) {
  const open = useOpenNow();
  return (
    <span className={`open-status${open ? ' is-open' : ''} ${className}`}>
      <i aria-hidden="true" />{open ? 'Open now' : 'Closed now'}
    </span>
  );
}

/** The opening-hours table, with today's row highlighted. */
export default function OpeningHours({ className = '' }) {
  const { day } = ukNow();
  return (
    <dl className={`hours ${className}`}>
      {OPENING_HOURS.map((h) => (
        <div key={h.label} className={`hours__row${h.days.includes(day) ? ' is-today' : ''}${h.open ? '' : ' is-closed'}`}>
          <dt>{h.label}</dt>
          <dd>{h.display}</dd>
        </div>
      ))}
    </dl>
  );
}
