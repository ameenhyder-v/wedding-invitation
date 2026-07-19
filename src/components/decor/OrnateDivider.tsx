import { useReveal } from "../../hooks/useReveal";
import Crescent from "./Crescent";
import "./decor.css";

export default function OrnateDivider() {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`divider ${visible ? "in" : ""}`}>
      <span className="divider-line" />
      <Crescent />
      <span className="divider-line" />
    </div>
  );
}
