
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, LineChart, PieChart } from "lucide-react";

const ReadyToStart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverButton, setHoverButton] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  const handleMouseMove = (e) => {
    const container = document.getElementById('contact-section');
    if (container) {
      const rect = container.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <section
      id="contact-section"
      className="py-20 md:py-28 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Modern blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-300 opacity-90"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] animate-pulse-slow"
          style={{
            transform: `translate(${(mousePosition.x / 50)}px, ${(mousePosition.y / 50)}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
        <div
          className="absolute bottom-[15%] left-[20%] w-[350px] h-[350px] bg-blue-200/20 rounded-full blur-[120px] animate-pulse-glow"
          style={{
            transform: `translate(${-(mousePosition.x / 70)}px, ${-(mousePosition.y / 70)}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
      </div>

      {/* Floating icons */}
      <div className="absolute w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[15%] right-[25%] text-white/20 animate-float" style={{ animationDelay: '0s' }}>
          <BarChart3 size={48} />
        </div>
        <div className="absolute top-[60%] right-[15%] text-white/15 animate-float" style={{ animationDelay: '1.5s' }}>
          <LineChart size={36} />
        </div>
        <div className="absolute top-[40%] left-[15%] text-white/10 animate-float" style={{ animationDelay: '0.8s' }}>
          <PieChart size={42} />
        </div>
      </div>

      {/* Content container */}
      <div className="nexos-container relative z-10">
        <div
          className={`bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20 shadow-xl transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-left">
            <h2 className="text-[40px] font-bold mb-6 text-white">
              Pasiruošę <span className="text-blue-100">pradėti</span>?
            </h2>
            <p className="text-[20px] mb-8 text-white/90 max-w-2xl">
              Susisiekite su mumis ir sužinokite, kaip duomenų analitika gali padėti jūsų verslui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact-sales">
                <Button
                  className="bg-white text-blue-600 hover:bg-blue-50 nexos-button-standard w-full md:w-auto group"
                  onMouseEnter={() => setHoverButton('contact')}
                  onMouseLeave={() => setHoverButton(null)}
                >
                  <span>Susisiekti</span>
                  <ArrowRight className={`ml-1 transition-transform duration-300 ${hoverButton === 'contact' ? 'translate-x-1' : ''}`} />
                </Button>
              </Link>
              <Link to="/paslaugos">
                <Button
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 nexos-button-standard w-full md:w-auto"
                  onMouseEnter={() => setHoverButton('more')}
                  onMouseLeave={() => setHoverButton(null)}
                >
                  <span className={`transition-all duration-300 ${hoverButton === 'more' ? 'nexos-shimmer-text' : 'text-white'}`}>
                    Sužinoti daugiau
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;
