/** Gold arabesque flourish, used under headings (as in the reference card). */
export default function Flourish({
  width = 150,
  className = "",
}: {
  width?: number;
  className?: string;
}) {
  return (
    <svg
      className={`block text-gold ${className}`}
      width={width}
      viewBox="0 0 160 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12 C 24 12, 30 5, 44 5 C 58 5, 60 19, 74 19 C 80 19, 80 12, 80 12 C 80 12, 80 5, 86 5 C 100 5, 102 19, 116 19 C 130 19, 136 12, 156 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="80" cy="12" r="2.6" fill="currentColor" />
      <circle cx="8" cy="12" r="1.6" fill="currentColor" />
      <circle cx="152" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}
