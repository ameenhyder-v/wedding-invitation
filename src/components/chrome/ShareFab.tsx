import { useEffect, useState } from "react";
import { CONTENT } from "../../content/const-content.js";
import "./share-fab.css";

export default function ShareFab() {
  const [href, setHref] = useState("https://wa.me/");
  const { couple, hero, share } = CONTENT;

  useEffect(() => {
    const text =
      share?.message ??
      `You're invited to the Nikah of ${couple.groom} & ${couple.bride} — ${hero.dateBar.day}, ${hero.dateBar.dateNum} ${hero.dateBar.monthYear}. ${hero.venue}, ${hero.place}`;
    setHref(
      `https://wa.me/?text=${encodeURIComponent(`${text}\n${window.location.href}`)}`
    );
  }, [couple, hero, share]);

  return (
    <a
      className="share-fab font-caps"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share invitation on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-8.7 15l-1.2 4.3 4.4-1.2A10 10 0 1 0 12 2zm5.6 14.2c-.2.7-1.3 1.2-1.8 1.3-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-3.9-4.7-4.1-.2-.2-1.3-1.7-1.3-3.3 0-1.5.8-2.3 1.1-2.6.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.6.7 2 .8 2.1.1.2.1.3 0 .5l-.3.5c-.1.2-.3.3-.4.5-.2.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l.8-1c.2-.2.4-.2.6-.1.2.1 1.6.8 1.9.9.3.2.5.2.6.3.1.2.1 1-.1 1.7z"
        />
      </svg>
      <span className="share-fab-label">Share</span>
    </a>
  );
}
