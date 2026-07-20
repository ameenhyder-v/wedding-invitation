import { useCallback, useState } from "react";
import LoadingScreen from "./components/intro/LoadingScreen";
import NavBar from "./components/chrome/NavBar";
import ShareFab from "./components/chrome/ShareFab";
import BackgroundMusic from "./components/chrome/BackgroundMusic";
import ScrollHint from "./components/chrome/ScrollHint";
import Hero from "./components/sections/Hero";
import Footer from "./components/sections/Footer";

export default function App() {
  const [ready, setReady] = useState(false);
  const [bismillahReady, setBismillahReady] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);

  const onHandoffStart = useCallback(() => {
    setReady(true);
  }, []);

  const onBismillahLanded = useCallback(() => {
    setBismillahReady(true);
    window.setTimeout(() => setLoaderGone(true), 420);
  }, []);

  return (
    <main
      className="group bg-night overflow-x-clip"
      data-state={ready ? "ready" : "loading"}
    >
      <BackgroundMusic loaderVisible={!loaderGone} />
      {!loaderGone && (
        <LoadingScreen
          onHandoffStart={onHandoffStart}
          onBismillahLanded={onBismillahLanded}
        />
      )}
      <div
        className={`transition-opacity duration-[700ms] ease-out overflow-x-clip ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <NavBar />
        <Hero active={ready} bismillahReady={bismillahReady} />
        <Footer />
        <ShareFab />
        <ScrollHint active={loaderGone} />
      </div>
    </main>
  );
}
