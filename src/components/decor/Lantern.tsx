/** Soft glowing lantern — Kerala / Islamic wedding motif */
export default function Lantern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-auto w-[clamp(28px,5vw,40px)] animate-soft-float drop-shadow-[0_0_10px_rgba(231,211,164,0.35)] text-gold ${className}`}
      viewBox="0 0 48 72"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 4 V12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="24" cy="4" r="2.2" fill="currentColor" />
      <path d="M14 16 H34 L36 22 H12 Z" fill="currentColor" opacity="0.9" />
      <path
        d="M12 22 H36 L32 52 H16 Z"
        fill="var(--color-gold-pale)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M18 28 H30 M18 36 H30 M18 44 H30"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.55"
      />
      <path d="M16 52 H32 L30 58 H18 Z" fill="currentColor" opacity="0.85" />
      <ellipse cx="24" cy="62" rx="6" ry="3" fill="currentColor" opacity="0.35" />
    </svg>
  );
}
