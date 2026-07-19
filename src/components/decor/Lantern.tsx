import "./decor.css";

/** Soft glowing lantern — Kerala / Islamic wedding motif */
export default function Lantern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`lantern ${className}`}
      viewBox="0 0 48 72"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 4 V12"
        stroke="var(--gold)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="24" cy="4" r="2.2" fill="var(--gold)" />
      <path d="M14 16 H34 L36 22 H12 Z" fill="var(--gold)" opacity="0.9" />
      <path
        d="M12 22 H36 L32 52 H16 Z"
        fill="var(--gold-pale)"
        stroke="var(--gold)"
        strokeWidth="1"
      />
      <path
        d="M18 28 H30 M18 36 H30 M18 44 H30"
        stroke="var(--gold)"
        strokeWidth="0.8"
        opacity="0.55"
      />
      <path d="M16 52 H32 L30 58 H18 Z" fill="var(--gold)" opacity="0.85" />
      <ellipse cx="24" cy="62" rx="6" ry="3" fill="var(--gold)" opacity="0.35" />
    </svg>
  );
}
