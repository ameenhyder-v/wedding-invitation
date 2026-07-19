import { CONTENT } from "../../content/const-content.js";
import { useReveal } from "../../hooks/useReveal";
import FloatingPetals from "../decor/FloatingPetals";
import Sparkles from "../decor/Sparkles";
import islamicTile from "../../assets/decor/islamic-tile.svg";
import "./footer.css";

export default function Footer() {
  const [ref, visible] = useReveal();
  const { couple, footer } = CONTENT;

  return (
    <footer id="blessings" ref={ref} className={`site-footer ${visible ? "in" : ""}`}>
      <div
        className="footer-pattern"
        style={{ backgroundImage: `url(${islamicTile})` }}
        aria-hidden="true"
      />
      <FloatingPetals count={6} />
      <Sparkles count={6} />

      <div className="footer-inner">
        <p className="footer-names font-script">
          {couple.groom} <span className="footer-amp">&amp;</span> {couple.bride}
        </p>
        <p className="footer-hashtag font-caps">{couple.hashtag}</p>
        <p className="footer-dua font-serif">{footer.dua}</p>
        <p className="footer-closing font-caps">{footer.closing}</p>
      </div>
    </footer>
  );
}
