import { useEffect, useState } from "react";
import {
  BarChart3,
  LineChart,
  Database,
  PieChart,
  Globe,
  Handshake,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: BarChart3,
    title: "Power BI Ataskaitų ir Dashboardų Kūrimas",
    description: "Interaktyvių ataskaitų ir vizualių dashboardų kūrimas. Didelių duomenų kiekių pavertimas lengvai suprantamais rodikliais."
  },
  {
    icon: Handshake,
    title: "Power BI Ataskaitų Nuoma ir Priežiūra",
    description: "Ataskaitų kūrimas pagal kliento reikalavimus. Periodiškai kas mėnesį peržiūrimos ir koreguojamos ataskaitos."
  },
  {
    icon: Database,
    title: "Duomenų Valymas ir ETL Procesai",
    description: "Paslauga, kuri užtikrina, kad klientų duomenys būtų švarūs, konsistentiški ir tinkamai struktūrizuoti analizei."
  },
  {
    icon: Globe,
    title: "SQL Duomenų Bazių Optimizavimas",
    description: "SQL Duomenų Bazių Kūrimas ir Optimizavimas skirtų struktūruotiems Jūsų verslo duomenims saugoti ir analizuoti."
  }
];

const Features = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const featureElements = document.querySelectorAll('.feature-card');
      featureElements.forEach((el, index) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85 &&
            !visibleItems.includes(index)) {
          setVisibleItems(prev => [...prev, index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleItems]);

  return (
    <section id="features" className="py-20 md:py-28 relative">
      {/* Tamsus fonas su gradientu */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#921de0] bg-[linear-gradient(190deg,rgba(146,29,224,1)_0%,rgba(13,5,36,1)_32%,rgba(41,12,56,1)_75%,rgba(135,68,171,1)_100%)] z-0"></div>

      {/* Violetinis žėrėjimas */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-[#921de0]/20 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-[20%] left-[20%] w-[500px] h-[500px] bg-[#8744ab]/20 rounded-full blur-[150px] animate-pulse-slow"></div>
      </div>

      {/* Elipsės formos tinklelis su radialine kaukė */}
      <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center z-0 pointer-events-none overflow-hidden">
        <div className="relative w-[120%] h-[900px] max-w-[1800px] -top-[10%]">
          {/* SVG mask for grid ellipse */}
          <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="gridMask" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="70%" stopColor="white" stopOpacity="0.5" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <mask id="ellipseMask">
                <ellipse cx="50%" cy="50%" rx="50%" ry="45%" fill="url(#gridMask)" />
              </mask>
            </defs>
          </svg>

          {/* Grid with mask */}
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(216, 54, 206, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(216, 54, 206, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, transparent 75%)'
            }}
          ></div>
        </div>
      </div>

      <div className="nexos-container relative z-10">
        <div className="text-left mb-16">
          <div className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-nexos-purple/10 border border-nexos-purple/20">
            <span className="text-sm font-medium text-nexos-purple">KĄ MES SIŪLOME</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">
            Atraskite <span className="text-[#E6E1F9] font-bold">mūsų paslaugas</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Roqus Analytics teikia pažangias duomenų analitikos paslaugas, kurios padeda transformuoti
            jūsų verslo duomenis į vertingas įžvalgas ir sprendimus.
          </p>
        </div>

        {/* Modernizuotas kortelių išdėstymas 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card relative transform transition-all duration-500 ${
                visibleItems.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } group overflow-hidden rounded-3xl hover:translate-y-[-5px] ${
                index === 0 ? "md:-translate-y-6" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Kortelės background su efektu */}
              <div className={`absolute inset-0 backdrop-blur-sm rounded-3xl transition-all duration-300
                border group-hover:border-[#921de0]/50 group-hover:bg-[#8744ab]/10
                group-hover:shadow-xl group-hover:shadow-[#921de0]/20 z-0 ${
                  index === 0
                  ? "bg-gradient-to-b from-[#921de0]/20 to-[#8744ab]/20 border-[#921de0]/30"
                  : "bg-[#8744ab]/10 border-white/10"
                }`}>
                {/* Dekoratyvinis kampas - pataisytas, kad neišeitų už kortelės ribų */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#921de0]/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Vidinis rėmelis */}
                <div className={`absolute inset-[8px] rounded-2xl border ${
                  index === 0
                  ? "border-[#921de0]/30 bg-gradient-to-b from-[#921de0]/10 to-[#8744ab]/10"
                  : "border-[#8744ab]/20 bg-[#290C38]/20"
                }`}></div>

                {/* Specialus žymėjimas pirmajai kortelei */}
                {index === 0 && (
                  <>
                    {/* Juostelė kampe - pataisyta, kad būtų geriau matoma */}
                    <div className="absolute -top-1 -right-1 z-10">
                      <div className="bg-gradient-to-r from-[#921de0] to-[#8744ab] text-white text-xs font-bold py-1.5 px-5 rounded-br-xl rounded-tl-xl shadow-lg transform rotate-0 origin-top-right border border-white/10">
                        POPULIARU
                      </div>
                    </div>

                    {/* Subtilus švytėjimas aplink kortelę */}
                    <div className="absolute -inset-0.5 bg-[#921de0]/20 rounded-3xl blur-sm opacity-40"></div>

                    {/* Papildomas efektas - linija viršuje */}
                    <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#921de0]/50 to-transparent"></div>
                  </>
                )}
              </div>

              {/* Kortelės turinys */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Ikona kvadrato formoje su apvaliais kraštais */}
                <div className="flex justify-center w-full mb-8">
                  <div className="relative">
                    {/* Tamsus kvadratas su apvaliais kampais */}
                    <div className="h-20 w-20 bg-[#290C38] rounded-2xl transform transition-all duration-300
                      group-hover:bg-[#3A1249] shadow-lg border border-[#921de0]/30 flex items-center justify-center">
                      {/* Ikona */}
                      <feature.icon className={`h-9 w-9 text-[#921de0] transform transition-all duration-300
                        ${hoveredItem === index ? 'scale-110' : ''}`} />
                    </div>
                  </div>
                </div>

                {/* Tekstas - centruotas */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#921de0] transition-colors duration-300 text-center">{feature.title}</h3>
                <p className="text-gray-300 mb-5 flex-grow text-base leading-relaxed text-center">{feature.description}</p>

                {/* Learn More mygtukas su efektu - centruotas */}
                <div className="mt-auto pt-2 flex justify-center">
                  <a href="#" className="inline-flex items-center text-[#921de0] font-medium
                    transition-all duration-300 relative group">
                    <span className="relative z-10 nexos-shimmer-text">Sužinoti Daugiau</span>
                    <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
          <Button className="bg-[#921de0] hover:bg-[#8744ab] text-white flex items-center w-full md:w-auto border-0 shadow-lg shadow-[#921de0]/20">
            <span className="nexos-shimmer-text">Išbandyti Dabar</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Link to="/contact-sales">
            <Button variant="outline" className="border-[#921de0] text-white hover:bg-[#921de0]/10 w-full md:w-auto nexos-contact-button">
              Susisiekite su Mumis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
