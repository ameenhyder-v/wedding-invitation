import { useMemo } from "react";

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
    <div className="sparkles pointer-events-none absolute inset-0 z-2 overflow-hidden" aria-hidden="true">
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="sparkle absolute rounded-full bg-[radial-gradient(circle,var(--color-gold-pale)_0%,var(--color-gold)_55%,transparent_70%)] opacity-0 shadow-[0_0_6px_rgba(231,211,164,0.7)] animate-sparkle-twinkle"
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
