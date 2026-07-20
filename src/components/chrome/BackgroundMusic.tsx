import { useCallback, useEffect, useRef, useState } from "react";
import { CONTENT } from "../../content/const-content.js";

export default function BackgroundMusic({
  loaderVisible = false,
}: {
  loaderVisible?: boolean;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const autoStarted = useRef(false);

  const src = CONTENT.audio?.src ?? "/audio/ambient.mp3";
  const volume = CONTENT.audio?.volume ?? 0.32;

  const play = useCallback(async () => {
    const el = audioRef.current;
    if (!el) return false;
    el.volume = volume;
    try {
      await el.play();
      setPlaying(true);
      return true;
    } catch {
      return false;
    }
  }, [volume]);

  const pause = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    setPlaying(false);
  }, []);

  const toggle = useCallback(async () => {
    if (playing) {
      pause();
    } else {
      await play();
    }
  }, [pause, play, playing]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const startWhenReady = () => {
      if (autoStarted.current) return;
      void play().then((ok) => {
        if (ok) autoStarted.current = true;
      });
    };

    const onGesture = () => {
      if (autoStarted.current) return;
      void play().then((ok) => {
        if (ok) {
          autoStarted.current = true;
          document.removeEventListener("pointerdown", onGesture, true);
        }
      });
    };

    startWhenReady();
    el.addEventListener("canplaythrough", startWhenReady, { once: true });
    document.addEventListener("pointerdown", onGesture, { capture: true, passive: true });

    return () => {
      el.removeEventListener("canplaythrough", startWhenReady);
      document.removeEventListener("pointerdown", onGesture, true);
    };
  }, [play]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
    };
  }, []);

  const z = loaderVisible ? "z-[2050]" : "z-[1100]";

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" playsInline aria-hidden="true" />

      <div
        className={`fixed left-[max(14px,env(safe-area-inset-left,0px))] bottom-[max(18px,env(safe-area-inset-bottom,0px))] ${z} flex flex-col items-center gap-2 max-[720px]:left-[max(12px,env(safe-area-inset-left,0px))] max-[720px]:bottom-[max(14px,env(safe-area-inset-bottom,0px))] max-h-[500px]:landscape:bottom-[max(10px,env(safe-area-inset-bottom,0px))]`}
      >
        <button
          type="button"
          onClick={toggle}
          className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border shadow-[0_8px_22px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-[transform,background,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 ${
            playing
              ? "border-gold/55 bg-linear-to-br from-maroon/90 to-night-deep/95 text-gold-light shadow-[0_10px_26px_rgba(185,137,62,0.2)]"
              : "border-gold-pale/35 bg-night-deep/75 text-gold/85 hover:border-gold/45 hover:text-gold-light"
          }`}
          aria-pressed={playing}
          aria-label={playing ? "Pause background music" : "Play background music"}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="currentColor" d="M8 5h3v14H8V5zm5 0h3v14h-3V5z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path
                d="M9 18V5l12-2v13"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="6" cy="18" r="2.5" fill="currentColor" />
              <circle cx="18" cy="16" r="2.5" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
