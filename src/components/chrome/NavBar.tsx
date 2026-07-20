import { useEffect, useState } from "react";
import { CONTENT } from "../../content/const-content.js";
import ornament from "../../assets/decor/ornament-line.svg";

export default function NavBar() {
  const [solid, setSolid] = useState(false);
  const { couple } = CONTENT;

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-[1100] pointer-events-none px-[clamp(12px,2.5vw,32px)] pt-[env(safe-area-inset-top,0px)] transition-[background,backdrop-filter,box-shadow,opacity] duration-[450ms] ease-out group-data-[state=loading]:opacity-0 max-[720px]:pl-[max(10px,env(safe-area-inset-left,0px))] max-[720px]:pr-[max(10px,env(safe-area-inset-right,0px))] ${
        solid
          ? "bg-[rgba(12,5,8,0.72)] shadow-[0_8px_28px_rgba(0,0,0,0.28)] backdrop-blur-[14px] backdrop-saturate-110"
          : ""
      }`}
    >
      <div className="flex min-h-16 items-center justify-center max-[1100px]:min-h-11 max-[720px]:min-h-12">
        <a
          className="pointer-events-auto flex flex-col items-center gap-0.5 px-3 py-1.5 no-underline transition-transform duration-[350ms] ease-out hover:scale-[1.03] max-[1100px]:flex-row max-[1100px]:gap-2 max-[1100px]:px-2 max-[1100px]:py-0.5"
          href="#home"
          aria-label="Home"
        >
          <img
            src={ornament}
            alt=""
            className="h-auto w-[54px] opacity-80 max-[1100px]:w-[34px] max-[720px]:w-9"
            aria-hidden="true"
          />
          <span className="font-names text-[clamp(28px,4vw,38px)] leading-none tracking-wide text-gold-light [text-shadow:0_2px_18px_rgba(185,137,62,0.35)] max-[1100px]:text-[clamp(22px,3vw,28px)] max-[720px]:text-[clamp(24px,6.5vw,30px)]">
            {couple.groom[0]}
            <span className="mx-0.5 text-[0.55em] text-gold">&amp;</span>
            {couple.bride[0]}
          </span>
          <img
            src={ornament}
            alt=""
            className="h-auto w-[54px] scale-y-[-1] opacity-80 max-[1100px]:w-[34px] max-[720px]:w-9"
            aria-hidden="true"
          />
        </a>
      </div>
    </header>
  );
}
