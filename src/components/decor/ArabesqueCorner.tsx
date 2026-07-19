/** Gold arabesque corner — Islamic wedding ornament */
export default function ArabesqueCorner({
  className = "",
  flipX = false,
  flipY = false,
}: {
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
}) {
  const scaleX = flipX ? -1 : 1;
  const scaleY = flipY ? -1 : 1;

  return (
    <svg
      className={`arabesque-corner ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      style={{ transform: `scale(${scaleX}, ${scaleY})` }}
    >
      <path
        d="M8 8 C 28 10, 22 36, 42 42 C 62 48, 58 18, 82 24 C 98 28, 102 48, 112 52"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M8 8 C 12 28, 36 22, 42 42 C 18 58, 24 82, 28 108"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M42 42 C 50 34, 58 38, 62 48 M42 42 C 34 50, 38 58, 48 62"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
      />
      <circle cx="42" cy="42" r="3.2" fill="currentColor" />
      <circle cx="82" cy="24" r="2.2" fill="currentColor" opacity="0.85" />
      <circle cx="28" cy="82" r="2.2" fill="currentColor" opacity="0.85" />
      <circle cx="8" cy="8" r="2.6" fill="currentColor" />
      <path
        d="M70 18 C 74 12, 82 14, 84 20 C 86 26, 78 28, 74 24 C 70 20, 70 18, 70 18 Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M18 70 C 12 74, 14 82, 20 84 C 26 86, 28 78, 24 74 C 20 70, 18 70, 18 70 Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}
