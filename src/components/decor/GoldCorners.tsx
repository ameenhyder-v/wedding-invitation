function Corner() {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className="block h-auto w-full">
      <path
        d="M8 8 C30 10 24 38 48 44 C70 50 66 18 92 26 C106 30 110 48 116 54"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M8 8 C12 30 38 24 48 44 C22 60 28 86 32 112"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="48" cy="44" r="3" fill="currentColor" />
      <circle cx="8" cy="8" r="2.4" fill="currentColor" />
      <path
        d="M72 20 C78 12 90 16 90 26 C90 34 78 34 74 28 C70 22 72 20 72 20Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

export default function GoldCorners({ revealed = false }: { revealed?: boolean }) {
  const cornerBase = `absolute block w-[clamp(56px,11vw,96px)] opacity-0 transition-opacity duration-[1200ms] ease-out delay-[800ms] max-[720px]:w-10 ${
    revealed ? "opacity-100 max-[720px]:opacity-55" : ""
  }`;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-5 text-gold/65 max-[480px]:hidden"
      aria-hidden="true"
    >
      <span
        className={`${cornerBase} top-[clamp(70px,12vh,96px)] left-[clamp(10px,2vw,24px)] max-[720px]:top-[78px]`}
      >
        <Corner />
      </span>
      <span
        className={`${cornerBase} top-[clamp(70px,12vh,96px)] right-[clamp(10px,2vw,24px)] -scale-x-100 max-[720px]:top-[78px]`}
      >
        <Corner />
      </span>
    </div>
  );
}
