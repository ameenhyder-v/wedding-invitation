import { CONTENT } from "../../content/const-content.js";
import { useReveal } from "../../hooks/useReveal";
import { displayName } from "../../utils/displayName";
import FloatingPetals from "../decor/FloatingPetals";
import Sparkles from "../decor/Sparkles";
import islamicTile from "../../assets/decor/islamic-tile.svg";

export default function Footer() {
  const [ref, visible] = useReveal();
  const { couple, footer } = CONTENT;
  const groomName = displayName(couple.groom);
  const brideName = displayName(couple.bride);

  return (
    <footer
      id="blessings"
      ref={ref}
      className="relative z-1 mt-0 overflow-hidden px-[clamp(16px,3vw,32px)] pt-[clamp(24px,4vh,40px)] pb-[max(8px,env(safe-area-inset-bottom,0px))] text-center text-gold-pale scroll-mt-[76px] bg-[radial-gradient(ellipse_at_50%_100%,rgba(185,137,62,0.08),transparent_48%),#1a060c] max-[1100px]:z-3 max-[720px]:px-4 max-[720px]:pt-5 max-[720px]:[&_.petal:nth-child(n+5)]:hidden max-[720px]:[&_.sparkle:nth-child(n+5)]:hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-size-[140px] opacity-[0.06] mix-blend-soft-light mask-fade-t max-[720px]:opacity-5"
        style={{ backgroundImage: `url(${islamicTile})` }}
        aria-hidden="true"
      />
      <FloatingPetals count={6} />
      <Sparkles count={6} />

      <div className="relative z-3 mx-auto max-w-[min(640px,100%)] pt-0">
        <p
          className={`font-names text-shimmer-slow mt-0 px-[0.2em] text-[clamp(34px,5vw+0.5rem,54px)] leading-[1.15] transition-all duration-1000 ease-[cubic-bezier(0.22,0.61,0.36,1)] delay-[120ms] motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {groomName}{" "}
          <span className="font-serif text-[0.55em] text-gold not-italic [-webkit-text-fill-color:var(--color-gold)]">
            &amp;
          </span>{" "}
          {brideName}
        </p>
        <p
          className={`font-caps mt-1.5 text-[clamp(10px,0.4vw+0.5rem,12px)] tracking-[3px] text-gold uppercase transition-opacity duration-1000 ease-out delay-300 motion-reduce:opacity-100 motion-reduce:transition-none ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {couple.hashtag}
        </p>
        <p
          className={`font-serif mx-auto mt-3.5 max-w-[440px] px-2 text-[clamp(14px,1vw+0.55rem,17px)] leading-[1.7] text-gold-pale/78 italic transition-all duration-1000 ease-[cubic-bezier(0.22,0.61,0.36,1)] delay-[450ms] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          {footer.dua}
        </p>
        <p
          className={`font-caps mt-2.5 px-2 text-[clamp(9px,0.3vw+0.45rem,11px)] leading-[1.5] tracking-[2.2px] text-gold-light/65 uppercase transition-opacity duration-1000 ease-out delay-[600ms] motion-reduce:opacity-100 motion-reduce:transition-none ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {footer.closing}
        </p>

        <p className="mt-4 mb-0 font-sans text-[8px] leading-relaxed tracking-[0.14em] text-gold-pale/22 max-[720px]:mt-3 max-[720px]:text-[7.5px]">
          © All rights reserved ·{" "}
          <a
            href="https://ameenhyder.online"
            className="text-inherit no-underline transition-colors hover:text-gold-pale/38"
            target="_blank"
            rel="noopener noreferrer"
          >
            ameenhyder.online
          </a>
        </p>
      </div>
    </footer>
  );
}
