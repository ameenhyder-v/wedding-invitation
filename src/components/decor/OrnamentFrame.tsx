import ArabesqueCorner from "./ArabesqueCorner";
import "./decor.css";

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
      className={`ornament-frame ${className}`}
      style={{ ["--frame-inset" as string]: `${inset}px` }}
      aria-hidden="true"
    >
      <ArabesqueCorner className="frame-tl" />
      <ArabesqueCorner className="frame-tr" flipX />
      <ArabesqueCorner className="frame-bl" flipY />
      <ArabesqueCorner className="frame-br" flipX flipY />
    </div>
  );
}
