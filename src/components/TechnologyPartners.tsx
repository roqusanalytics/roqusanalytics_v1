import { useState, useEffect } from "react";

type Technology = {
  name: string;
  logo: string;
  scale: number;
  blendMode: "normal" | "multiply" | "screen" | "overlay";
};

const technologies: Technology[] = [
  {
    name: "Microsoft",
    logo: "/tools/microsoft.png",
    scale: 0.6, // Sumažintas dydis
    blendMode: "normal"
  },
  {
    name: "Power BI",
    logo: "/tools/Microsoft-Power-BI-Symbol.png",
    scale: 1.1, // Nustatytas į 1.1 dydį
    blendMode: "normal"
  },
  {
    name: "Azure",
    logo: "/tools/Microsoft_Azure.png",
    scale: 0.6, // Sumažintas dydis
    blendMode: "normal"
  },
  {
    name: "SQL Server",
    logo: "/tools/SQL.png",
    scale: 0.6, // Sumažintas dydis
    blendMode: "multiply" // Panaikina permatomą foną
  },
  {
    name: "Python",
    logo: "/tools/python.png",
    scale: 0.6, // Sumažintas dydis
    blendMode: "multiply" // Panaikina permatomą foną
  },
];

const TechnologyPartners = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [logoSizes, setLogoSizes] = useState<{ width: number; height: number }[]>(
    technologies.map(() => ({ width: 0, height: 0 }))
  );

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('technology-partners');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="technology-partners" className="py-8 md:py-12 relative">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 bg-gradient-to-b from-[#f2f6fa] to-[#e9f0f7]">
        <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-nexos-purple/5 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-[20%] left-[30%] w-[300px] h-[300px] bg-nexos-purple/5 rounded-full blur-[100px] animate-pulse-glow"></div>
      </div>

      <div className="nexos-container relative z-10">
        <div 
          className={`text-center mb-8 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-base font-bold text-[#262B30]">
            Dirbame su <span className="nexos-gradient-text">pirmaujančiomis</span> technologijomis
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`transition-all duration-500 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              } flex flex-col items-center`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-32 h-24 flex items-center justify-center overflow-hidden">
                <div className="w-24 h-20 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className={`transition-all duration-300 transform ${
                      hoveredIndex === index 
                        ? "filter-none" 
                        : "grayscale opacity-70"
                    }`}
                    style={{ 
                      objectFit: "contain",
                      transform: hoveredIndex === index ? `scale(${tech.scale * 1.1})` : `scale(${tech.scale})`,
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                      mixBlendMode: tech.blendMode as any,
                      backgroundColor: "transparent"
                    }}
                    onLoad={(e) => {
                      const img = e.target as HTMLImageElement;
                      const newSizes = [...logoSizes];
                      newSizes[index] = { width: img.naturalWidth, height: img.naturalHeight };
                      setLogoSizes(newSizes);
                    }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;