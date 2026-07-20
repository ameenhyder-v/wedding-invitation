import { useReveal } from "../../hooks/useReveal";
import Crescent from "./Crescent";

export default function OrnateDivider() {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`mx-auto flex max-w-[420px] items-center justify-center gap-4 px-6 py-3 ${
        visible ? "group/divider" : ""
      }`}
    >
      <span
        className={`h-px flex-1 origin-center bg-linear-to-r from-transparent via-gold to-transparent transition-all duration-[1100ms] ease-out ${
          visible ? "scale-x-100 opacity-75" : "scale-x-0 opacity-0"
        }`}
      />
      <Crescent visible={visible} />
      <span
        className={`h-px flex-1 origin-center bg-linear-to-r from-transparent via-gold to-transparent transition-all duration-[1100ms] ease-out ${
          visible ? "scale-x-100 opacity-75" : "scale-x-0 opacity-0"
        }`}
      />
    </div>
  );
}
