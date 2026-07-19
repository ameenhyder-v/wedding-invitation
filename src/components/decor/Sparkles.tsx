import { useMemo } from "react";
import "./decor.css";

interface SparkleSpec {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

/** Soft gold sparkles — like candlelight dust over a section. */
export default function Sparkles({ count = 18 }: { count?: number }) {
  const sparkles = useMemo<SparkleSpec[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i * 37) % 100,
        top: (i * 53) % 100,
        size: 2 + (i % 4),
        delay: (i * 0.35) % 5,
        duration: 2.4 + (i % 5) * 0.4,
      })),
    [count]
  );

  return (
    <div className="sparkles" aria-hidden="true">
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
