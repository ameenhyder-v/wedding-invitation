import { useEffect, useRef, useState } from "react";
import { CONTENT } from "../../content/const-content.js";
import { displayName } from "../../utils/displayName";
import ornament from "../../assets/decor/ornament-line.svg";
import velvet from "../../assets/decor/velvet.jpg";
import FloatingPetals from "../decor/FloatingPetals";
import Sparkles from "../decor/Sparkles";

interface Props {
  onHandoffStart: () => void;
  onBismillahLanded: () => void;
}

type Flight = {
  text: string;
  left: number;
  top: number;
  width: number;
  fontSize: string;
  lineHeight: string;
  dx: number;
  dy: number;
  scale: number;
};

export default function LoadingScreen({ onHandoffStart, onBismillahLanded }: Props) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const [flight, setFlight] = useState<Flight | null>(null);
  const [flightActive, setFlightActive] = useState(false);
  const [landed, setLanded] = useState(false);
  const bismillahRef = useRef<HTMLParagraphElement>(null);
  const handedOff = useRef(false);
  const { couple, hero } = CONTENT;
  const groomName = displayName(couple.groom);
  const brideName = displayName(couple.bride);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const tHold = window.setTimeout(() => setPhase("hold"), 900);
    const tExit = window.setTimeout(() => setPhase("exit"), 2400);
    return () => {
      clearTimeout(tHold);
      clearTimeout(tExit);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase !== "exit" || handedOff.current) return;
    handedOff.current = true;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    onHandoffStart();

    const finishWithoutFlight = () => {
      setLanded(true);
      window.setTimeout(onBismillahLanded, 280);
    };

    if (reduceMotion) {
      finishWithoutFlight();
      return;
    }

    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const fromEl = bismillahRef.current;
        const toEl = document.getElementById("hero-bismillah");
        if (!fromEl || !toEl) {
          finishWithoutFlight();
          return;
        }

        const from = fromEl.getBoundingClientRect();
        const to = toEl.getBoundingClientRect();
        if (from.width < 2 || to.width < 2) {
          finishWithoutFlight();
          return;
        }

        const fromStyle = getComputedStyle(fromEl);
        const toStyle = getComputedStyle(toEl);
        const fromFs = parseFloat(fromStyle.fontSize) || 1;
        const toFs = parseFloat(toStyle.fontSize) || fromFs;
        // Scale by font size so the landing size matches the real hero text
        const scale = toFs / fromFs;
        const dx = to.left + to.width / 2 - (from.left + from.width / 2);
        const dy = to.top + to.height / 2 - (from.top + from.height / 2);

        setFlight({
          text: hero.bismillah,
          left: from.left,
          top: from.top,
          width: from.width,
          fontSize: fromStyle.fontSize,
          lineHeight: fromStyle.lineHeight,
          dx,
          dy,
          scale,
        });

        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => setFlightActive(true));
        });
      });
    });

    return () => cancelAnimationFrame(id);
  }, [phase, onHandoffStart, onBismillahLanded, hero.bismillah]);

  useEffect(() => {
    if (!flightActive || !flight) return;
    const t = window.setTimeout(() => {
      onBismillahLanded();
      window.setTimeout(() => setLanded(true), 100);
    }, 1100);
    return () => clearTimeout(t);
  }, [flightActive, flight, onBismillahLanded]);

  const exiting = phase === "exit";

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center overflow-hidden ${
        landed ? "pointer-events-none" : ""
      }`}
      aria-busy={!landed}
      aria-label="Opening invitation"
    >
      <div
        className={`absolute inset-0 scale-110 bg-cover bg-center brightness-[0.26] saturate-75 animate-load-ken transition-opacity duration-[900ms] ease-out ${
          exiting ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${velvet})` }}
        aria-hidden="true"
      />
      <div
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(185,137,62,0.22),transparent_52%),radial-gradient(ellipse_at_20%_80%,rgba(123,29,46,0.35),transparent_45%),linear-gradient(180deg,rgba(10,5,7,0.72),rgba(26,4,10,0.9))] transition-opacity duration-[900ms] ease-out ${
          exiting ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute aspect-square w-[min(78vw,420px)] rounded-full border border-gold-pale/18 shadow-[inset_0_0_60px_rgba(185,137,62,0.08),0_0_80px_rgba(185,137,62,0.1)] animate-load-ring transition-opacity duration-700 ease-out max-h-[520px]:hidden ${
          exiting ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute inset-0 z-[1] transition-opacity duration-700 ease-out max-h-[520px]:hidden ${
          exiting ? "opacity-0" : "opacity-100"
        }`}
      >
        <FloatingPetals count={10} />
      </div>
      <div
        className={`pointer-events-none absolute inset-0 z-[1] transition-opacity duration-700 ease-out ${
          exiting ? "opacity-0" : "opacity-100"
        }`}
      >
        <Sparkles count={12} />
      </div>

      <div className="relative z-[2] max-w-[440px] p-6 text-center max-[480px]:p-4">
        <p
          ref={bismillahRef}
          className={`font-arabic translate-y-3 text-[clamp(22px,5vw,30px)] leading-[1.6] text-gold-light opacity-0 [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] [animation:load-rise_0.9s_ease_0.35s_forwards] max-h-[520px]:text-[clamp(16px,4vw,22px)] ${
            flight ? "invisible" : ""
          }`}
        >
          {hero.bismillah}
        </p>

        <img
          className={`mx-auto my-4 block w-[100px] opacity-0 brightness-115 transition-[opacity,transform] duration-700 ease-out [animation:load-rise_0.8s_ease_0.7s_forwards] max-h-[520px]:my-2 max-h-[520px]:w-[72px] ${
            exiting ? "!opacity-0 translate-y-2" : ""
          }`}
          src={ornament}
          alt=""
          aria-hidden="true"
        />
        <p
          className={`font-names translate-y-4 text-[clamp(38px,10vw,56px)] leading-[1.05] text-gold-pale opacity-0 [text-shadow:0_8px_40px_rgba(0,0,0,0.45)] transition-[opacity,transform] duration-700 ease-out [animation:load-rise_1s_ease_0.9s_forwards] max-[480px]:text-[clamp(32px,11vw,48px)] max-h-[520px]:text-[clamp(26px,7vw,36px)] ${
            exiting ? "!opacity-0 translate-y-3" : ""
          }`}
        >
          {groomName}{" "}
          <span className="font-serif text-[0.55em] text-gold not-italic">&amp;</span>{" "}
          {brideName}
        </p>
        <div
          className={`mx-auto mt-[30px] h-px w-[min(200px,52vw)] overflow-hidden bg-gold-pale/18 opacity-0 transition-opacity duration-500 ease-out [animation:load-rise_0.6s_ease_1.15s_forwards] max-h-[520px]:mt-4 ${
            exiting ? "!opacity-0" : ""
          }`}
          aria-hidden="true"
        >
          <span className="block h-full w-0 bg-linear-to-r from-transparent via-gold-light to-gold animate-load-progress motion-reduce:w-full" />
        </div>
      </div>

      {flight && !landed ? (
        <p
          className="font-arabic pointer-events-none fixed z-[2010] m-0 origin-center text-center text-gold-light will-change-transform [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]"
          style={{
            left: flight.left,
            top: flight.top,
            width: flight.width,
            fontSize: flight.fontSize,
            lineHeight: flight.lineHeight,
            transform: flightActive
              ? `translate(${flight.dx}px, ${flight.dy}px) scale(${flight.scale})`
              : "translate(0px, 0px) scale(1)",
            transition: flightActive
              ? "transform 1.1s cubic-bezier(0.22, 0.61, 0.36, 1)"
              : "none",
          }}
          aria-hidden="true"
        >
          {flight.text}
        </p>
      ) : null}
    </div>
  );
}
