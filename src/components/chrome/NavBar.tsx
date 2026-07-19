import { useEffect, useState } from "react";
import { CONTENT } from "../../content/const-content.js";
import ornament from "../../assets/decor/ornament-line.svg";
import "./nav.css";

export default function NavBar() {
  const [solid, setSolid] = useState(false);
  const { couple } = CONTENT;

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${solid ? "nav-solid" : ""}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#home" aria-label="Home">
          <img src={ornament} alt="" className="nav-ornament" aria-hidden="true" />
          <span className="nav-mono font-script">
            {couple.groom[0]}
            <span className="nav-amp">&amp;</span>
            {couple.bride[0]}
          </span>
          <img src={ornament} alt="" className="nav-ornament nav-ornament-flip" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
