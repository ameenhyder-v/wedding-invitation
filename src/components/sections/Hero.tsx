import { useEffect, useState } from "react";
import { CONTENT } from "../../content/const-content.js";
import { useCountdown } from "../../hooks/useCountdown";
import { mapsPlaceUrl } from "../../utils/maps";
import { displayName } from "../../utils/displayName";
import FloatingPetals from "../decor/FloatingPetals";
import Sparkles from "../decor/Sparkles";
import Flourish from "../decor/Flourish";
import GoldCorners from "../decor/GoldCorners";
import coupleArt from "../../assets/couple-new.png";
import islamicTile from "../../assets/decor/islamic-tile.svg";
import softLights from "../../assets/decor/soft-lights.jpg";

const ease = "ease-[cubic-bezier(0.22,0.61,0.36,1)]";

export default function Hero({
  active = true,
  bismillahReady = true,
}: {
  active?: boolean;
  bismillahReady?: boolean;
}) {
  const [revealed, setRevealed] = useState(false);
  const t = useCountdown(CONTENT.weddingDateISO);

  useEffect(() => {
    if (!active) return;
    const id = setTimeout(() => setRevealed(true), 120);
    return () => clearTimeout(id);
  }, [active]);

  const { couple, hero, family } = CONTENT;
  const placeHref = mapsPlaceUrl(hero.mapQuery);
  const groomName = displayName(couple.groom);
  const brideName = displayName(couple.bride);

  const revealItem = (delay: string) =>
    `opacity-0 translate-y-5 transition-[opacity,transform] duration-1000 ${ease} motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none ${
      revealed ? `opacity-100 translate-y-0 ${delay}` : ""
    }`;

  return (
    <section
      id="home"
      className={`group/hero relative z-2 flex min-h-svh items-center justify-center overflow-x-clip overflow-y-clip px-[clamp(16px,3vw,40px)] pt-[clamp(64px,8vh,88px)] pb-[clamp(24px,4vh,40px)] text-gold-pale scroll-mt-[76px] bg-[radial-gradient(ellipse_at_25%_60%,rgba(123,29,46,0.35),transparent_50%),radial-gradient(ellipse_at_80%_30%,rgba(185,137,62,0.12),transparent_45%),linear-gradient(195deg,#0a0507_0%,#1a060c_55%,#1a060c_100%)] max-[1100px]:z-1 max-[1100px]:min-h-0 max-[1100px]:items-start max-[1100px]:px-0 max-[1100px]:pt-[52px] max-[1100px]:pb-7 max-[720px]:pt-[52px] max-[720px]:pb-5 max-[390px]:pt-12 max-[390px]:pb-4 max-h-[500px]:landscape:min-h-0 max-h-[500px]:landscape:px-4 max-h-[500px]:landscape:pt-12 max-h-[500px]:landscape:pb-4 ${
        revealed ? "is-revealed" : ""
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-[center_30%] opacity-[0.08] mix-blend-soft-light animate-ambient-drift mask-fade-b"
        style={{ backgroundImage: `url(${softLights})` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-size-[140px] opacity-10 mix-blend-soft-light mask-fade-b-mid"
        style={{ backgroundImage: `url(${islamicTile})` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_75%,rgba(185,137,62,0.14),transparent_42%),radial-gradient(ellipse_at_70%_20%,rgba(74,14,28,0.4),transparent_50%)]"
        aria-hidden="true"
      />
      <GoldCorners revealed={revealed} />
      <div className="max-[1100px]:[&_.petal:nth-child(n+7)]:hidden max-[1100px]:[&_.sparkle:nth-child(n+12)]:hidden">
        <FloatingPetals count={8} />
        <Sparkles count={10} />
      </div>

      <div className="relative z-4 grid w-[min(1180px,100%)] min-w-0 grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] grid-rows-[auto_auto] items-end gap-x-[clamp(20px,3.5vw,48px)] gap-y-3.5 min-[1400px]:w-[min(1240px,100%)] max-[1100px]:w-full max-[1100px]:grid-cols-1 max-[1100px]:grid-rows-none max-[1100px]:gap-0 max-h-[500px]:landscape:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] max-h-[500px]:landscape:items-center max-h-[500px]:landscape:gap-x-4 max-h-[500px]:landscape:gap-y-2.5">
        <div
          className={`relative z-5 col-start-1 row-span-full flex min-h-[min(78vh,720px)] min-w-0 items-end justify-center self-stretch bg-transparent transition-[opacity,transform] duration-[1300ms] delay-[350ms] ${ease} motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:scale-100 motion-reduce:transition-none max-[1100px]:order-2 max-[1100px]:z-1 max-[1100px]:col-auto max-[1100px]:row-auto max-[1100px]:min-h-0 max-[1100px]:w-[min(76vw,620px)] max-[1100px]:max-w-[min(76vw,620px)] max-[1100px]:justify-self-center max-[1100px]:my-1.5 max-[1100px]:mb-7 max-[720px]:w-[min(86vw,400px)] max-[720px]:max-w-[min(86vw,400px)] max-[720px]:my-1 max-[720px]:mb-7 max-[390px]:w-[min(88vw,340px)] max-[390px]:mb-6 max-h-[500px]:landscape:order-1 max-h-[500px]:landscape:col-start-1 max-h-[500px]:landscape:row-span-full max-h-[500px]:landscape:m-0 max-h-[500px]:landscape:w-full max-h-[500px]:landscape:max-w-none max-h-[500px]:landscape:min-h-0 ${
            revealed
              ? "opacity-100 translate-x-0 scale-100 max-[1100px]:translate-y-0"
              : "opacity-0 -translate-x-6 scale-[0.97] max-[1100px]:translate-x-0 max-[1100px]:translate-y-2"
          }`}
        >
          <img
            src={coupleArt}
            alt={`${couple.groom} and ${couple.bride}`}
            className="h-auto max-h-[min(78vh,720px)] w-full object-contain object-bottom max-[1100px]:max-h-none max-h-[500px]:landscape:max-h-[min(68svh,220px)]"
          />
        </div>

        <div className="col-start-2 row-start-1 w-full max-w-[540px] min-w-0 justify-self-center self-end text-center min-[1400px]:max-w-[560px] max-[1100px]:order-1 max-[1100px]:col-auto max-[1100px]:row-auto max-[1100px]:mx-auto max-[1100px]:w-full max-[1100px]:max-w-[680px] max-[1100px]:px-[clamp(20px,4vw,40px)] max-[720px]:max-w-none max-[720px]:px-4 max-[390px]:px-3 max-h-[500px]:landscape:order-2 max-h-[500px]:landscape:col-start-2 max-h-[500px]:landscape:row-start-1 max-h-[500px]:landscape:max-w-none max-h-[500px]:landscape:px-0">
          <p
            id="hero-bismillah"
            className={`font-arabic text-[clamp(22px,2.4vw+0.6rem,34px)] leading-[1.5] text-gold-light [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] min-[721px]:max-[1100px]:text-[clamp(28px,3.8vw,38px)] max-[720px]:text-[clamp(18px,5vw,24px)] max-[720px]:leading-[1.4] motion-reduce:opacity-100 ${
              bismillahReady ? "opacity-100" : "opacity-0"
            }`}
          >
            {hero.bismillah}
          </p>
          <Flourish
            width={130}
            className={`mx-auto my-1.5 mb-3 block max-w-full opacity-90 min-[721px]:max-[1100px]:my-2 min-[721px]:max-[1100px]:mb-3.5 min-[721px]:max-[1100px]:!w-[150px] max-[720px]:my-1 max-[720px]:mb-2 max-[720px]:!w-[92px] ${revealItem("delay-[180ms]")}`}
          />

          <p
            className={`font-caps px-1 text-[clamp(10px,0.35vw+0.55rem,12.5px)] leading-[1.75] tracking-[2.4px] text-gold-pale/78 uppercase text-balance min-[721px]:max-[1100px]:text-[clamp(12px,1.5vw,15px)] min-[721px]:max-[1100px]:tracking-[2.2px] min-[721px]:max-[1100px]:leading-[1.8] max-[720px]:text-[9.5px] max-[720px]:tracking-[1.2px] max-[720px]:leading-[1.55] max-[390px]:text-[9px] max-[390px]:tracking-wide ${revealItem("delay-[280ms]")}`}
          >
            {hero.hostLine}
            <span className="font-serif mt-1 block text-[clamp(20px,1.6vw+0.7rem,28px)] tracking-[0.4px] text-gold-light normal-case italic min-[721px]:max-[1100px]:mt-1.5 min-[721px]:max-[1100px]:text-[clamp(24px,3.2vw,32px)] max-[720px]:mt-1 max-[720px]:text-[clamp(18px,5vw,22px)]">
              {" "}
              {hero.hostFamily}
            </span>
          </p>
          <p
            className={`font-caps mt-2.5 px-1 text-[clamp(10px,0.35vw+0.55rem,12.5px)] leading-[1.75] tracking-[2.4px] text-gold-pale/85 uppercase text-balance min-[721px]:max-[1100px]:mt-3 min-[721px]:max-[1100px]:text-[clamp(12px,1.5vw,15px)] min-[721px]:max-[1100px]:tracking-[2.2px] min-[721px]:max-[1100px]:leading-[1.8] max-[720px]:mt-1.5 max-[720px]:text-[9.5px] max-[720px]:tracking-[1.2px] max-[720px]:leading-[1.55] max-[390px]:text-[9px] max-[390px]:tracking-wide ${revealItem("delay-[380ms]")}`}
          >
            {hero.inviteLine}
          </p>

          <h1
            className={`font-names my-3 mb-2 flex w-full flex-col items-center overflow-visible px-2 box-border min-[721px]:max-[1100px]:my-3.5 min-[721px]:max-[1100px]:mb-2.5 max-[720px]:my-1.5 max-[720px]:mb-0.5 max-[720px]:px-1 ${revealItem("delay-[480ms]")}`}
          >
            <span className="text-shimmer block max-w-full box-border px-[0.18em] py-[0.08em] text-[clamp(46px,5vw+0.5rem,82px)] leading-[1.05] motion-reduce:animate-none min-[721px]:max-[1100px]:text-[clamp(60px,9vw,84px)] max-[720px]:px-[0.2em] max-[720px]:py-[0.1em] max-[720px]:text-[clamp(36px,10.5vw,48px)] max-[390px]:text-[clamp(32px,10.5vw,42px)] max-h-[500px]:landscape:text-[clamp(26px,5.5vw,40px)]">
              {groomName}
            </span>
            <span className="font-serif my-0.5 text-[clamp(22px,2vw+0.4rem,34px)] text-gold italic [-webkit-text-fill-color:var(--color-gold)] min-[721px]:max-[1100px]:text-[clamp(26px,3.5vw,36px)] max-[720px]:m-0 max-[720px]:text-[clamp(18px,4.5vw,24px)]">
              &amp;
            </span>
            <span className="text-shimmer block max-w-full box-border px-[0.18em] py-[0.08em] text-[clamp(42px,4.5vw+0.5rem,72px)] leading-[1.05] motion-reduce:animate-none min-[721px]:max-[1100px]:text-[clamp(54px,8vw,76px)] max-[720px]:px-[0.2em] max-[720px]:py-[0.1em] max-[720px]:text-[clamp(34px,9.5vw,44px)] max-[390px]:text-[clamp(30px,9.5vw,38px)] max-h-[500px]:landscape:text-[clamp(24px,5vw,36px)]">
              {brideName}
            </span>
          </h1>

          <p
            className={`font-caps mt-1 px-1 text-[clamp(9px,0.3vw+0.5rem,11px)] leading-[1.7] tracking-[2px] text-gold-pale/72 uppercase text-balance min-[721px]:max-[1100px]:mt-1.5 min-[721px]:max-[1100px]:text-[clamp(11px,1.4vw,13px)] min-[721px]:max-[1100px]:tracking-[2.2px] max-[720px]:mt-1 max-[720px]:text-[9px] max-[720px]:tracking-[1.2px] max-[390px]:text-[8.5px] ${revealItem("delay-[540ms]")}`}
          >
            {hero.brideOfLine}
            <span className="font-serif mt-0.5 block text-[clamp(16px,1.2vw+0.55rem,22px)] tracking-[0.3px] text-gold-light normal-case italic min-[721px]:max-[1100px]:text-[clamp(18px,2.4vw,24px)] max-[720px]:text-[clamp(15px,4vw,18px)]">
              {family.brideParents}
            </span>
          </p>

          <p
            className={`font-caps mx-auto mt-2.5 max-w-[380px] text-[clamp(10px,0.3vw+0.55rem,12px)] leading-[1.7] tracking-[2px] text-gold-light/78 uppercase text-balance min-[721px]:max-[1100px]:mt-3 min-[721px]:max-[1100px]:max-w-[460px] min-[721px]:max-[1100px]:text-[clamp(11px,1.5vw,14px)] min-[721px]:max-[1100px]:tracking-[2.2px] max-[720px]:mt-2 max-[720px]:max-w-[300px] max-[720px]:px-2 max-[720px]:text-[9px] max-[720px]:tracking-[1.4px] max-[720px]:leading-[1.55] max-h-[500px]:landscape:hidden ${revealItem("delay-[620ms]")}`}
          >
            Your presence and blessings will make this occasion even more special
          </p>
        </div>

        <div className="col-start-2 row-start-2 w-full max-w-[540px] min-w-0 justify-self-center self-start pb-1 text-center min-[1400px]:max-w-[560px] max-[1100px]:order-3 max-[1100px]:z-4 max-[1100px]:col-auto max-[1100px]:row-auto max-[1100px]:mx-auto max-[1100px]:w-full max-[1100px]:max-w-[680px] max-[1100px]:px-[clamp(20px,4vw,40px)] max-[1100px]:pb-2 max-[720px]:max-w-none max-[720px]:px-4 max-[390px]:px-3 max-h-[500px]:landscape:order-3 max-h-[500px]:landscape:col-start-2 max-h-[500px]:landscape:row-start-2 max-h-[500px]:landscape:max-w-none max-h-[500px]:landscape:px-0">
          <div
            className={`mx-auto flex w-fit max-w-full items-stretch justify-center border border-gold-light/35 bg-cream/6 px-1.5 py-2 backdrop-blur-sm min-[721px]:max-[1100px]:w-full min-[721px]:max-[1100px]:max-w-[440px] min-[721px]:max-[1100px]:px-2 min-[721px]:max-[1100px]:py-3 max-[720px]:w-full max-[720px]:max-w-[300px] max-[720px]:px-0.5 max-[720px]:py-1.5 max-[390px]:max-w-full ${revealItem("delay-700")}`}
          >
            <div className="flex min-w-0 flex-col items-center justify-center px-[clamp(10px,1.8vw,18px)] py-1 min-[721px]:max-[1100px]:px-4 min-[721px]:max-[1100px]:py-1.5 max-[720px]:flex-1 max-[720px]:px-1 max-[720px]:py-0.5">
              <span className="font-caps border-y border-gold-light/45 px-0.5 py-[7px] text-[clamp(10px,0.4vw+0.5rem,13px)] tracking-[1.6px] whitespace-nowrap text-gold-pale min-[721px]:max-[1100px]:px-0.5 min-[721px]:max-[1100px]:py-2 min-[721px]:max-[1100px]:text-[clamp(12px,1.6vw,15px)] min-[721px]:max-[1100px]:tracking-[1.8px] max-[720px]:px-0 max-[720px]:py-1.5 max-[720px]:text-[9px] max-[720px]:tracking-[0.7px] max-[390px]:text-[8.5px] max-[390px]:tracking-[0.4px]">
                {hero.dateBar.day}
              </span>
            </div>
            <div className="flex min-w-0 flex-col items-center justify-center border-x border-gold-light/45 px-[clamp(10px,1.8vw,18px)] py-1 min-[721px]:max-[1100px]:px-4 min-[721px]:max-[1100px]:py-1.5 max-[720px]:flex-1 max-[720px]:px-1 max-[720px]:py-0.5">
              <span className="font-serif text-[clamp(24px,2.2vw+0.6rem,36px)] leading-none text-gold-light min-[721px]:max-[1100px]:text-[clamp(32px,4.5vw,42px)] max-[720px]:text-[clamp(20px,5.5vw,26px)]">
                {hero.dateBar.dateNum}
              </span>
              <span className="font-caps text-[clamp(8px,0.3vw+0.45rem,11px)] tracking-[1.2px] whitespace-nowrap text-gold-pale min-[721px]:max-[1100px]:text-[clamp(10px,1.3vw,13px)] max-[720px]:text-[8px] max-[720px]:tracking-[0.5px] max-[390px]:text-[7.5px]">
                {hero.dateBar.monthYear}
              </span>
            </div>
            <div className="flex min-w-0 flex-col items-center justify-center px-[clamp(10px,1.8vw,18px)] py-1 min-[721px]:max-[1100px]:px-4 min-[721px]:max-[1100px]:py-1.5 max-[720px]:flex-1 max-[720px]:px-1 max-[720px]:py-0.5">
              <span className="font-caps border-y border-gold-light/45 px-0.5 py-[7px] text-[clamp(10px,0.4vw+0.5rem,13px)] tracking-[1.6px] whitespace-nowrap text-gold-pale min-[721px]:max-[1100px]:px-0.5 min-[721px]:max-[1100px]:py-2 min-[721px]:max-[1100px]:text-[clamp(12px,1.6vw,15px)] min-[721px]:max-[1100px]:tracking-[1.8px] max-[720px]:px-0 max-[720px]:py-1.5 max-[720px]:text-[9px] max-[720px]:tracking-[0.7px] max-[390px]:text-[8.5px] max-[390px]:tracking-[0.4px]">
                {hero.dateBar.time}
              </span>
            </div>
          </div>

          {t.done ? (
            <p
              className={`font-script mt-4 text-center text-[clamp(18px,2vw+0.5rem,24px)] text-gold-light ${revealItem("delay-[820ms]")}`}
            >
              Alhamdulillah, the day is here
            </p>
          ) : (
            <div
              className={`mx-auto mt-4 flex w-fit max-w-full items-stretch justify-center border border-gold-light/28 bg-night-deep/35 px-2.5 py-2 backdrop-blur-[10px] min-[721px]:max-[1100px]:mt-[18px] min-[721px]:max-[1100px]:w-full min-[721px]:max-[1100px]:max-w-[400px] min-[721px]:max-[1100px]:px-3.5 min-[721px]:max-[1100px]:py-3 max-[720px]:mt-3.5 max-[720px]:w-full max-[720px]:max-w-[280px] max-[720px]:px-1 max-[720px]:py-1.5 max-[390px]:max-w-full max-h-[500px]:landscape:mt-2 ${revealItem("delay-[820ms]")}`}
              aria-label="Countdown to reception"
            >
              {(
                [
                  [t.days, "Days"],
                  [t.hours, "Hrs"],
                  [t.minutes, "Min"],
                  [t.seconds, "Sec"],
                ] as const
              ).map(([value, label], i) => (
                <div className="flex items-center" key={label}>
                  {i > 0 && (
                    <span
                      className="self-center px-0.5 pb-2 text-[13px] leading-none text-gold/55"
                      aria-hidden="true"
                    >
                      :
                    </span>
                  )}
                  <div className="flex min-w-10 flex-col items-center px-1.5 py-0.5 min-[721px]:max-[1100px]:min-w-[52px] min-[721px]:max-[1100px]:px-2.5 min-[721px]:max-[1100px]:py-1 max-[720px]:min-w-0 max-[720px]:flex-1 max-[720px]:px-0.5 max-[720px]:py-0.5">
                    <span className="font-serif text-[clamp(16px,1.2vw+0.55rem,22px)] leading-none text-gold-light tabular-nums min-[721px]:max-[1100px]:text-[clamp(22px,3vw,28px)] max-[720px]:text-[clamp(15px,4vw,18px)]">
                      {label === "Days" ? value : String(value).padStart(2, "0")}
                    </span>
                    <span className="font-caps mt-0.5 text-[9px] tracking-[1.4px] text-gold-light/70 uppercase min-[721px]:max-[1100px]:text-[10px] min-[721px]:max-[1100px]:tracking-[1.6px] max-[720px]:text-[8px] max-[720px]:tracking-wide">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div
            className={`mt-5 flex w-full flex-col items-center gap-0.5 min-[721px]:max-[1100px]:mt-[26px] max-[720px]:mt-[18px] max-h-[500px]:landscape:mt-2 ${revealItem("delay-[940ms]")}`}
          >
            <p className="font-caps mb-1 text-[9px] tracking-[3px] text-gold/85 uppercase min-[721px]:max-[1100px]:text-[11px] min-[721px]:max-[1100px]:tracking-[3.2px]">
              Venue
            </p>
            <p className="font-serif text-[clamp(18px,1.4vw+0.6rem,26px)] leading-[1.25] text-gold-pale min-[721px]:max-[1100px]:text-[clamp(24px,3.2vw,30px)] max-[720px]:text-[clamp(17px,4.8vw,21px)]">
              {hero.venue}
            </p>
            {hero.venueDetail ? (
              <p className="font-caps mt-0.5 text-[clamp(9px,0.3vw+0.45rem,11px)] tracking-[2.2px] text-gold-light/70 uppercase min-[721px]:max-[1100px]:text-xs min-[721px]:max-[1100px]:tracking-[2.4px] max-[720px]:text-[9px] max-[720px]:tracking-[1.6px]">
                {hero.venueDetail}
              </p>
            ) : null}
            <p className="font-caps mt-0.5 text-[clamp(9px,0.3vw+0.45rem,11px)] tracking-[2.2px] text-gold-light/70 uppercase min-[721px]:max-[1100px]:text-xs min-[721px]:max-[1100px]:tracking-[2.4px] max-[720px]:text-[9px] max-[720px]:tracking-[1.6px]">
              {hero.place}
            </p>

            <div className="mt-3 flex w-full max-w-[280px] justify-center min-[721px]:max-[1100px]:mt-3.5 min-[721px]:max-[1100px]:max-w-[340px] max-[720px]:mt-3 max-[720px]:max-w-full max-h-[500px]:landscape:mt-2">
              <a
                className="font-caps inline-flex min-h-11 min-w-[168px] items-center justify-center border border-gold/40 bg-transparent px-5 py-2.5 text-[10px] tracking-[1.6px] text-gold uppercase no-underline transition-[color,border-color,transform,background] duration-250 ease-out hover:border-gold-light/65 hover:text-gold-light min-[721px]:max-[1100px]:min-h-12 min-[721px]:max-[1100px]:min-w-[220px] min-[721px]:max-[1100px]:px-[22px] min-[721px]:max-[1100px]:py-3 min-[721px]:max-[1100px]:text-[11px] max-[720px]:w-full max-[720px]:max-w-[280px] max-[720px]:min-w-0"
                href={placeHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
