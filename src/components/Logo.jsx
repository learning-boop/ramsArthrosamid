import { BRAND } from '../config.js';

/**
 * Logo: the round knee icon from the clinic logo, with the brand name and the tagline set as live text
 * (sharp at any size, and able to turn white). `tone="auto"` lets the header switch from white over the
 * video to navy once it turns solid; "navy" and "white" are fixed.
 */
export default function Logo({ tone = 'navy', className = '' }) {
  return (
    <span className={`logo logo--${tone} ${className}`}>
      <span className="logo__icon" aria-hidden="true">
        <img className="logo__icon-img logo__icon-img--navy" src="./logo-icon.png" alt="" width="122" height="121" />
        <img className="logo__icon-img logo__icon-img--white" src="./logo-icon-white.png" alt="" width="122" height="121" />
      </span>
      <span className="logo__text">
        <span className="logo__name">{BRAND.name}</span>
        <span className="logo__tag">Move Better – Feel Better</span>
      </span>
    </span>
  );
}
