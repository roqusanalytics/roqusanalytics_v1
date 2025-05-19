import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Komponentas, kuris automatiškai slenka puslapį į viršų, kai pasikeičia maršrutas.
 * Šis komponentas neturi vizualios dalies, jis tik atlieka slinkimo funkciją.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Kai pasikeičia maršrutas, slenka puslapį į viršų
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
