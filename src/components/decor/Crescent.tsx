export default function Crescent({ visible = true }: { visible?: boolean }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={`h-[22px] w-[22px] text-gold transition-all duration-800 ease-out delay-250 ${
        visible ? "rotate-0 scale-100 opacity-100" : "-rotate-30 scale-[0.6] opacity-0"
      }`}
      aria-hidden="true"
    >
      <path
        d="M38 8 A20 20 0 1 0 38 52 A15.5 15.5 0 1 1 38 8 Z"
        fill="currentColor"
      />
      <path
        d="M46 20 l1.6 4.2 4.4.4-3.4 3 1 4.4-3.6-2.4-3.6 2.4 1-4.4-3.4-3 4.4-.4z"
        fill="currentColor"
      />
    </svg>
  );
}
