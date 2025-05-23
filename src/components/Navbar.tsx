
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0
  });
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<{[key: string]: HTMLElement | null}>({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Efektas, kuris nustato pradinę akcento linijos poziciją pagal aktyvų puslapį
  useEffect(() => {
    // Funkcija, kuri atnaujina akcento linijos poziciją pagal aktyvų puslapį
    const updateIndicatorForActivePage = () => {
      const paths = ['/paslaugos', '/kaip-tai-veikia', '/naudojimo-atvejai', '/duk', '/apie-mus'];
      const activePath = paths.find(path => path === location.pathname);

      if (activePath && navItemsRef.current[activePath]) {
        const element = navItemsRef.current[activePath];
        if (element) {
          const rect = element.getBoundingClientRect();
          const navRect = navRef.current?.getBoundingClientRect() || { left: 0 };

          // Sklandesnė animacija su requestAnimationFrame
          requestAnimationFrame(() => {
            setIndicatorStyle({
              left: rect.left - navRect.left,
              width: rect.width,
              opacity: 0.75 // Dar labiau matoma permatomumo reikšmė
            });
          });
        }
      } else {
        // Jei nėra aktyvaus puslapio, paslepiame indikatorių
        requestAnimationFrame(() => {
          setIndicatorStyle({
            left: 0,
            width: 0,
            opacity: 0
          });
        });
      }
    };

    // Palaukiame, kol DOM bus atnaujintas
    const timer = setTimeout(updateIndicatorForActivePage, 150);

    // Pridedame lango dydžio keitimo stebėjimą
    window.addEventListener('resize', updateIndicatorForActivePage);
    return () => {
      window.removeEventListener('resize', updateIndicatorForActivePage);
      clearTimeout(timer);
    };
  }, [location.pathname]);

  // Funkcijos, kurios seka pelės judesius
  const handleMouseEnter = (path: string) => {
    setHoveredItem(path);

    const element = navItemsRef.current[path];
    if (element && navRef.current) {
      const rect = element.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();

      // Sklandesnė animacija su requestAnimationFrame
      requestAnimationFrame(() => {
        setIndicatorStyle({
          left: rect.left - navRect.left,
          width: rect.width,
          opacity: 0.9 // Dar labiau matoma permatomumo reikšmė
        });
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);

    // Grąžiname indikatorių į aktyvaus puslapio poziciją
    const paths = ['/paslaugos', '/kaip-tai-veikia', '/naudojimo-atvejai', '/duk', '/apie-mus'];
    const activePath = paths.find(path => path === location.pathname);

    if (activePath && navItemsRef.current[activePath]) {
      const element = navItemsRef.current[activePath];
      if (element && navRef.current) {
        const rect = element.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();

        // Sklandesnė animacija su requestAnimationFrame
        requestAnimationFrame(() => {
          setIndicatorStyle({
            left: rect.left - navRect.left,
            width: rect.width,
            opacity: 0.75 // Dar labiau matoma permatomumo reikšmė aktyviam elementui
          });
        });
      }
    } else {
      // Jei nėra aktyvaus puslapio, paslepiame indikatorių
      requestAnimationFrame(() => {
        setIndicatorStyle({
          left: 0,
          width: 0,
          opacity: 0
        });
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-nexos-dark/90 backdrop-blur-lg py-4 shadow-lg animate-navbar-slide-down animate-navbar-glow"
          : "bg-transparent py-6"
      }`}
    >
      <div className="nexos-container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#262B30] flex items-center gap-2 group">
              <div className="w-48 h-12 flex items-center justify-center relative overflow-visible">
                <img
                  src="/logo-notion-analytics-large.svg"
                  alt="Roqus Analytics Logo"
                  className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute -inset-1 bg-[#4285F4]/10 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center space-x-8 relative"
            ref={navRef}
            onMouseLeave={handleMouseLeave}
          >
            {/* Akcento linija, kuri seka pelės judesius */}
            <div
              className="absolute bottom-0 h-[2px] bg-gradient-to-r from-nexos-purple/60 to-nexos-purple-light/60 rounded-full z-10 shadow-[0_0_4px_rgba(139,92,246,0.25)] transition-all duration-400 ease-in-out"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
                transform: 'translateZ(0)', // Aktyvuoja hardware acceleration
                willChange: 'left, width', // Optimizuoja animaciją
              }}
            ></div>

            <Link
              to="/paslaugos"
              ref={(el) => navItemsRef.current['/paslaugos'] = el}
              onMouseEnter={() => handleMouseEnter('/paslaugos')}
              className={`relative px-2 py-3 text-[#262B30] hover:text-[#262B30] transition-all duration-300 ${
                location.pathname === '/paslaugos' ? 'text-[#262B30] font-normal' : ''
              }`}
            >
              Paslaugos
            </Link>
            <Link
              to="/kaip-tai-veikia"
              ref={(el) => navItemsRef.current['/kaip-tai-veikia'] = el}
              onMouseEnter={() => handleMouseEnter('/kaip-tai-veikia')}
              className={`relative px-2 py-3 text-[#262B30] hover:text-[#262B30] transition-all duration-300 ${
                location.pathname === '/kaip-tai-veikia' ? 'text-[#262B30] font-normal' : ''
              }`}
            >
              Kaip tai veikia?
            </Link>
            <Link
              to="/naudojimo-atvejai"
              ref={(el) => navItemsRef.current['/naudojimo-atvejai'] = el}
              onMouseEnter={() => handleMouseEnter('/naudojimo-atvejai')}
              className={`relative px-2 py-3 text-[#262B30] hover:text-[#262B30] transition-all duration-300 ${
                location.pathname === '/naudojimo-atvejai' ? 'text-[#262B30] font-normal' : ''
              }`}
            >
              Use cases
            </Link>
            <Link
              to="/duk"
              ref={(el) => navItemsRef.current['/duk'] = el}
              onMouseEnter={() => handleMouseEnter('/duk')}
              className={`relative px-2 py-3 text-[#262B30] hover:text-[#262B30] transition-all duration-300 ${
                location.pathname === '/duk' ? 'text-[#262B30] font-normal' : ''
              }`}
            >
              DUK
            </Link>
            <Link
              to="/apie-mus"
              ref={(el) => navItemsRef.current['/apie-mus'] = el}
              onMouseEnter={() => handleMouseEnter('/apie-mus')}
              className={`relative px-2 py-3 text-[#262B30] hover:text-[#262B30] transition-all duration-300 ${
                location.pathname === '/apie-mus' ? 'text-[#262B30] font-normal' : ''
              }`}
            >
              Apie mus
            </Link>
            <Link
              to="/contact-sales"
              onMouseEnter={() => handleMouseLeave()} // Grąžiname indikatorių į aktyvaus puslapio poziciją
            >
              <Button className="nexos-button-primary nexos-contact-button text-sm py-2 px-4 rounded-lg">
                Susisiekti
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-[#262B30] p-2 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-nexos-purple/10 hover:bg-nexos-purple/20' : 'hover:bg-nexos-dark-light/50'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="transition-transform duration-300 transform rotate-90" />
              ) : (
                <Menu size={24} className="transition-transform duration-300 hover:scale-110" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-nexos-dark-light/90 backdrop-blur-lg rounded-lg p-4 animate-fade-in border border-nexos-dark-lighter shadow-lg">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center mb-2 pb-2 border-b border-nexos-dark-lighter">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center w-full">
                  <img src="/logo-notion-analytics-large.svg" alt="Roqus Analytics Logo" className="h-12 w-48" />
                </Link>
              </div>
              <Link
                to="/paslaugos"
                onClick={() => setIsMenuOpen(false)}
                className={`relative text-[#262B30] hover:text-[#262B30] transition-all duration-300 py-2 pl-3 rounded-md ${
                  location.pathname === '/paslaugos'
                    ? 'text-[#262B30] font-medium bg-gradient-to-r from-nexos-purple/10 to-transparent border-l-2 border-nexos-purple'
                    : 'hover:bg-nexos-dark/40 hover:pl-4'
                }`}
              >
                Paslaugos
              </Link>
              <Link
                to="/kaip-tai-veikia"
                onClick={() => setIsMenuOpen(false)}
                className={`relative text-[#262B30] hover:text-[#262B30] transition-all duration-300 py-2 pl-3 rounded-md ${
                  location.pathname === '/kaip-tai-veikia'
                    ? 'text-[#262B30] font-medium bg-gradient-to-r from-nexos-purple/10 to-transparent border-l-2 border-nexos-purple'
                    : 'hover:bg-nexos-dark/40 hover:pl-4'
                }`}
              >
                Kaip tai veikia?
              </Link>
              <Link
                to="/naudojimo-atvejai"
                onClick={() => setIsMenuOpen(false)}
                className={`relative text-[#262B30] hover:text-[#262B30] transition-all duration-300 py-2 pl-3 rounded-md ${
                  location.pathname === '/naudojimo-atvejai'
                    ? 'text-[#262B30] font-medium bg-gradient-to-r from-nexos-purple/10 to-transparent border-l-2 border-nexos-purple'
                    : 'hover:bg-nexos-dark/40 hover:pl-4'
                }`}
              >
                Use cases
              </Link>
              <Link
                to="/duk"
                onClick={() => setIsMenuOpen(false)}
                className={`relative text-[#262B30] hover:text-[#262B30] transition-all duration-300 py-2 pl-3 rounded-md ${
                  location.pathname === '/duk'
                    ? 'text-[#262B30] font-medium bg-gradient-to-r from-nexos-purple/10 to-transparent border-l-2 border-nexos-purple'
                    : 'hover:bg-nexos-dark/40 hover:pl-4'
                }`}
              >
                DUK
              </Link>
              <Link
                to="/apie-mus"
                onClick={() => setIsMenuOpen(false)}
                className={`relative text-[#262B30] hover:text-[#262B30] transition-all duration-300 py-2 pl-3 rounded-md ${
                  location.pathname === '/apie-mus'
                    ? 'text-[#262B30] font-medium bg-gradient-to-r from-nexos-purple/10 to-transparent border-l-2 border-nexos-purple'
                    : 'hover:bg-nexos-dark/40 hover:pl-4'
                }`}
              >
                Apie mus
              </Link>
              <Link to="/contact-sales">
                <Button
                  onClick={() => setIsMenuOpen(false)}
                  className="nexos-button-primary nexos-contact-button text-sm py-2 px-4 rounded-lg w-full"
                >
                  Susisiekti
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
