import ArabesqueCorner from "./ArabesqueCorner";

/** Four gold arabesque corners framing a section. */
export default function OrnamentFrame({
  className = "",
  inset = 12,
}: {
  className?: string;
  inset?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-1 text-gold ${className}`}
      style={{ ["--frame-inset" as string]: `${inset}px` }}
      aria-hidden="true"
    >
      <ArabesqueCorner className="absolute top-[var(--frame-inset,12px)] left-[var(--frame-inset,12px)]" />
      <ArabesqueCorner
        className="absolute top-[var(--frame-inset,12px)] right-[var(--frame-inset,12px)]"
        flipX
      />
      <ArabesqueCorner
        className="absolute bottom-[var(--frame-inset,12px)] left-[var(--frame-inset,12px)]"
        flipY
      />
      <ArabesqueCorner
        className="absolute right-[var(--frame-inset,12px)] bottom-[var(--frame-inset,12px)]"
        flipX
        flipY
      />
    </div>
  );
}
