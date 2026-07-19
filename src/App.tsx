import { useCallback, useState } from "react";
import LoadingScreen from "./components/intro/LoadingScreen";
import NavBar from "./components/chrome/NavBar";
import ShareFab from "./components/chrome/ShareFab";
import Hero from "./components/sections/Hero";
import Footer from "./components/sections/Footer";

export default function App() {
  const [ready, setReady] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);

  const finishLoader = useCallback(() => {
    setReady(true);
    window.setTimeout(() => setLoaderGone(true), 850);
  }, []);

  return (
    <main className={ready ? "app-ready" : "app-loading"}>
      {!loaderGone && <LoadingScreen onFinished={finishLoader} />}
      <div className={`app-shell ${ready ? "is-in" : ""}`}>
        <NavBar />
        <Hero active={ready} />
        <Footer />
        <ShareFab />
      </div>
    </main>
  );
}
