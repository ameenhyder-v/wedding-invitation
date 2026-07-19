import { useMemo } from "react";
import "./decor.css";

const PETAL_COLORS = ["#7b1d2e", "#9b3446", "#5d1424", "#b9893e"];

interface PetalSpec {
  left: number;
  size: number;
  delay: number;
  duration: number;
  sway: number;
  spin: number;
  color: string;
}

/** Gently falling rose petals layered over a section. */
export default function FloatingPetals({ count = 14 }: { count?: number }) {
  const petals = useMemo<PetalSpec[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i / count) * 100 + (Math.random() * 6 - 3),
        size: 10 + Math.random() * 12,
        delay: Math.random() * 14,
        duration: 11 + Math.random() * 9,
        sway: Math.random() * 120 - 60,
        spin: 200 + Math.random() * 340,
        color: PETAL_COLORS[i % PETAL_COLORS.length],
      })),
    [count]
  );

  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p, i) => (
        <svg
          key={i}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            ["--sway" as string]: `${p.sway}px`,
            ["--spin" as string]: `${p.spin}deg`,
          }}
          viewBox="0 0 20 24"
        >
          <path
            d="M10 1 C 16 6, 19 12, 15 19 C 12.5 23, 7.5 23, 5 19 C 1 12, 4 6, 10 1 Z"
            fill={p.color}
            opacity="0.75"
          />
        </svg>
      ))}
    </div>
  );
}
