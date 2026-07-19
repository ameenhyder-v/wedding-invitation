import { useEffect, useState } from "react";
import { CONTENT } from "../../content/const-content.js";
import { useCountdown } from "../../hooks/useCountdown";
import { mapsPlaceUrl } from "../../utils/maps";
import FloatingPetals from "../decor/FloatingPetals";
import Sparkles from "../decor/Sparkles";
import Flourish from "../decor/Flourish";
import GoldCorners from "../decor/GoldCorners";
import coupleArt from "../../assets/couple-new.png";
import islamicTile from "../../assets/decor/islamic-tile.svg";
import softLights from "../../assets/decor/soft-lights.jpg";
import "./hero.css";

export default function Hero({ active = true }: { active?: boolean }) {
  const [revealed, setRevealed] = useState(false);
  const t = useCountdown(CONTENT.weddingDateISO);

  useEffect(() => {
    if (!active) return;
    const id = setTimeout(() => setRevealed(true), 120);
    return () => clearTimeout(id);
  }, [active]);

  const { couple, hero } = CONTENT;
  const placeHref = mapsPlaceUrl(hero.mapQuery);

  return (
    <section id="home" className={`hero ${revealed ? "revealed" : ""}`}>
      <div
        className="hero-lights"
        style={{ backgroundImage: `url(${softLights})` }}
        aria-hidden="true"
      />
      <div
        className="hero-pattern"
        style={{ backgroundImage: `url(${islamicTile})` }}
        aria-hidden="true"
      />
      <div className="hero-glow" aria-hidden="true" />
      <GoldCorners />
      <FloatingPetals count={8} />
      <Sparkles count={10} />

      <div className="hero-layout">
        <div className="hero-couple">
          <img
            src={coupleArt}
            alt={`${couple.groom} and ${couple.bride}`}
            className="hero-couple-img"
          />
        </div>

        <div className="hero-intro">
          {/* <p className="hero-eyebrow font-caps">Groom&apos;s side invitation</p> */}
          <p className="hero-bismillah font-arabic">{hero.bismillah}</p>
          <Flourish width={130} />

          <p className="hero-host font-caps">
            {hero.hostLine}
            <span className="hero-host-family font-serif"> {hero.hostFamily}</span>
          </p>
          <p className="hero-invite-line font-caps">{hero.inviteLine}</p>

          <h1 className="hero-names font-script">
            <span className="hero-name hero-name-groom">{couple.groom}</span>
            <span className="hero-amp font-serif">&amp;</span>
            <span className="hero-name">{couple.bride}</span>
          </h1>

          <p className="hero-blessing font-caps">
            Your presence and blessings will make this occasion even more special
          </p>
        </div>

        <div className="hero-details">
          <div className="hero-datebar">
            <div className="hero-datecell">
              <span className="hero-day font-caps">{hero.dateBar.day}</span>
            </div>
            <div className="hero-datecell hero-datecell-mid">
              <span className="hero-datenum font-serif">{hero.dateBar.dateNum}</span>
              <span className="hero-month font-caps">{hero.dateBar.monthYear}</span>
            </div>
            <div className="hero-datecell">
              <span className="hero-time font-caps">{hero.dateBar.time}</span>
            </div>
          </div>

          {t.done ? (
            <p className="hero-cd-done font-script">Alhamdulillah, the day is here</p>
          ) : (
            <div className="hero-cd" aria-label="Countdown to Nikah">
              {(
                [
                  [t.days, "Days"],
                  [t.hours, "Hrs"],
                  [t.minutes, "Min"],
                  [t.seconds, "Sec"],
                ] as const
              ).map(([value, label], i) => (
                <div className="hero-cd-cell" key={label}>
                  {i > 0 && <span className="hero-cd-sep" aria-hidden="true">:</span>}
                  <div className="hero-cd-block">
                    <span className="hero-cd-num font-serif">
                      {label === "Days" ? value : String(value).padStart(2, "0")}
                    </span>
                    <span className="hero-cd-label font-caps">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="hero-venue">
            <p className="hero-venue-label font-caps">Venue</p>
            <p className="hero-venue-name font-serif">{hero.venue}</p>
            {hero.venueDetail ? (
              <p className="hero-venue-detail font-caps">{hero.venueDetail}</p>
            ) : null}
            <p className="hero-venue-place font-caps">{hero.place}</p>

            <div className="hero-map-actions">
              <a
                className="hero-map-btn hero-map-btn-ghost font-caps"
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
