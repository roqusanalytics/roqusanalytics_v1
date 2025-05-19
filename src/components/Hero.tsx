
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const capabilities = ["pardavimams", "pirkimams", "gamybai", "atsargų valdymui", "finansams"];
  const [currentCapability, setCurrentCapability] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentCapability((prev) => (prev + 1) % capabilities.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[30%] -left-[10%] w-[500px] h-[500px] bg-nexos-purple/20 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-nexos-purple/15 rounded-full blur-[100px] animate-pulse-glow"></div>
      </div>

      <div className="nexos-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`transition-all duration-500 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="nexos-heading mb-10 text-[54px]">
              Duomenų analitika pritaikyta <br />
              <span className="nexos-gradient-text">
                jūsų {capabilities[currentCapability]}
              </span>
            </h1>

            <p className="nexos-subheading mx-auto mb-8 text-[24px]">
              Roqus analytics transformuoja duomenis į vertingas įžvalgas ir ataskaitas
              aukščiausio lygio vadovams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-sales">
                <Button className="nexos-button-primary nexos-contact-button w-full md:w-auto">
                  Susisiekti
                </Button>
              </Link>
              <Link to="/paslaugos">
                <Button variant="outline" className="nexos-button-secondary w-full md:w-auto">
                  <span className="nexos-shimmer-text">Sužinoti daugiau</span>
                </Button>
              </Link>
            </div>
          </div>

          <div
            className={`mt-14 relative transition-all duration-700 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative mx-auto">
              <div className="nexos-glow">
                <div className="relative z-10 rounded-xl overflow-hidden border border-nexos-dark-lighter shadow-2xl">
                  <div className="bg-nexos-dark-light p-3 border-b border-nexos-dark-lighter flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="bg-nexos-dark-light p-6">
                    <div className="flex gap-4 flex-wrap md:flex-nowrap">
                      <div className="w-full md:w-1/2 nexos-card">
                        <h3 className="text-sm text-gray-400 mb-3">Duomenys</h3>
                        <p className="text-white">Pardavimų duomenų analizė ir pagrindinių tendencijų apibendrinimas.</p>
                      </div>
                      <div className="w-full md:w-1/2 nexos-card">
                        <h3 className="text-sm text-gray-400 mb-3">Rezultatai</h3>
                        <ul className="text-white text-sm space-y-2">
                          <li>• Pardavimai padidėjo 24% lyginant su praėjusiais metais</li>
                          <li>• Šiaurės regionas pasiekė geriausius rezultatus (+32%)</li>
                          <li>• Skaitmeninių produktų pardavimai išaugo 43%</li>
                          <li>• Naujų klientų pritraukimas padidėjo 18%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-sm text-gray-400">
            Duomenys: Jūsų konkurencinis pranašumas
          </div>

          <div className="mt-4 text-center text-gray-300 max-w-3xl mx-auto">
            <p>
              Pardavimai visada buvo žmonių verslas ir taip išliks ateityje. Tačiau norint pasiekti geriausius rezultatus kiekviename organizacijos sluoksnyje, sprendimų priėmėjai sistemingai stiprina darbuotojų galią naudoti duomenis, analitiką ir technologijas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
