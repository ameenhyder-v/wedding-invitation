import { useEffect, useState } from "react";
import { CONTENT } from "../../content/const-content.js";
import mandala from "../../assets/decor/mandala.svg";
import ornament from "../../assets/decor/ornament-line.svg";
import velvet from "../../assets/decor/velvet.jpg";
import FloatingPetals from "../decor/FloatingPetals";
import Sparkles from "../decor/Sparkles";
import "./loading-screen.css";

interface Props {
  onFinished: () => void;
}

export default function LoadingScreen({ onFinished }: Props) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const { couple, hero } = CONTENT;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = window.setTimeout(() => setPhase("hold"), 1000);
    const t2 = window.setTimeout(() => setPhase("exit"), 2800);
    const t3 = window.setTimeout(() => {
      document.body.style.overflow = "";
      onFinished();
    }, 3550);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, [onFinished]);

  return (
    <div
      className={`load-screen load-${phase}`}
      aria-busy={phase !== "exit"}
      aria-label="Opening invitation"
    >
      <div
        className="load-bg"
        style={{ backgroundImage: `url(${velvet})` }}
        aria-hidden="true"
      />
      <div className="load-veil" aria-hidden="true" />
      <div className="load-ring" aria-hidden="true" />
      <FloatingPetals count={10} />
      <Sparkles count={12} />

      <div className="load-center">
        <img className="load-mandala" src={mandala} alt="" aria-hidden="true" />
        <p className="load-bismillah font-arabic">{hero.bismillah}</p>
        <img className="load-ornament" src={ornament} alt="" aria-hidden="true" />
        <p className="load-names font-script">
          {couple.groom} <span>&amp;</span> {couple.bride}
        </p>
        <div className="load-bar" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
