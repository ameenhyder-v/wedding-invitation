import { useEffect, useState } from "react";

function pageCanScroll() {
  const root = document.documentElement;
  return root.scrollHeight > window.innerHeight + 40;
}

/** Soft cue that more of the invitation waits below — fades away after first scroll. */
export default function ScrollHint({ active = false }: { active?: boolean }) {
  const [canScroll, setCanScroll] = useState(false);
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!active) {
      setCanScroll(false);
      setVisible(false);
      setLeaving(false);
      return;
    }

    const measure = () => setCanScroll(pageCanScroll());

    measure();
    window.addEventListener("resize", measure, { passive: true });
    window.addEventListener("orientationchange", measure);

    const showId = window.setTimeout(() => {
      measure();
      setVisible(true);
    }, 850);

    const hide = () => {
      if (window.scrollY < 28) return;
      setLeaving(true);
      window.setTimeout(() => setVisible(false), 500);
    };

    window.addEventListener("scroll", hide, { passive: true });

    return () => {
      clearTimeout(showId);
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
      window.removeEventListener("scroll", hide);
    };
  }, [active]);

  if (!canScroll || !visible) return null;

  return (
    <>
      {/* Soft fade at bottom of viewport — reads as “more below” without a scrollbar */}
      <div
        className={`pointer-events-none fixed inset-x-0 bottom-0 z-[1040] h-[min(28vh,220px)] bg-linear-to-t from-night/85 via-night/35 to-transparent transition-opacity duration-500 ease-out max-h-[500px]:landscape:h-[min(18vh,120px)] ${
          leaving ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />

      <a
        href="#blessings"
        className={`font-caps group/hint pointer-events-auto fixed left-1/2 z-[1050] flex -translate-x-1/2 flex-col items-center gap-2 transition-[opacity,transform] duration-500 ease-out max-h-[500px]:landscape:gap-1 ${
          leaving ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"
        } bottom-[max(76px,calc(64px+env(safe-area-inset-bottom,0px)))] max-[720px]:bottom-[max(72px,calc(58px+env(safe-area-inset-bottom,0px)))] max-[480px]:bottom-[max(68px,calc(54px+env(safe-area-inset-bottom,0px)))] max-h-[500px]:landscape:bottom-[max(12px,env(safe-area-inset-bottom,0px))] max-h-[500px]:landscape:left-[max(16px,env(safe-area-inset-left,0px))] max-h-[500px]:landscape:translate-x-0`}
        aria-label="Scroll down to blessings"
      >
        <span className="text-[clamp(8px,2vw,10px)] tracking-[clamp(2px,0.8vw,3.5px)] text-gold/55 uppercase transition-colors group-hover/hint:text-gold/75 max-h-[500px]:landscape:text-[8px] max-h-[500px]:landscape:tracking-[2px]">
          Scroll down
        </span>

        <span className="relative flex h-[clamp(36px,9vw,44px)] w-[clamp(22px,5.5vw,26px)] items-start justify-center rounded-full border border-gold/35 bg-night-deep/40 shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-sm max-h-[500px]:landscape:h-8 max-h-[500px]:landscape:w-5">
          <span className="mt-[clamp(7px,1.8vw,9px)] h-[clamp(6px,1.6vw,8px)] w-[clamp(3px,0.9vw,4px)] rounded-full bg-gold/70 animate-scroll-hint-dot max-h-[500px]:landscape:mt-1.5 max-h-[500px]:landscape:h-1.5 max-h-[500px]:landscape:w-1" />
        </span>

        <svg
          className="h-[clamp(10px,2.5vw,12px)] w-[clamp(10px,2.5vw,12px)] text-gold/55 animate-scroll-hint max-h-[500px]:landscape:h-2.5 max-h-[500px]:landscape:w-2.5"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 4.5 L6 8.5 L10 4.5"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </>
  );
}
