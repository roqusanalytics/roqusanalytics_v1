import { useEffect, useState } from "react";
import {
  LineChart,
  Database,
  BarChart3,
  PieChart
} from "lucide-react";

const tools = [
  {
    icon: LineChart,
    name: "Power BI",
    description: "Interaktyvios ataskaitos ir dashboardai"
  },
  {
    icon: Database,
    name: "SQL",
    description: "Duomenų bazių valdymas ir optimizavimas"
  },
  {
    icon: BarChart3,
    name: "Python",
    description: "Duomenų analizė ir modeliavimas"
  },
  {
    icon: PieChart,
    name: "Excel",
    description: "Duomenų apdorojimas ir analizė"
  }
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-nexos-dark-light relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-nexos-purple/10 rounded-full blur-[120px] animate-pulse-glow"></div>
      </div>

      <div id="about-section" className="nexos-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="nexos-heading mb-6">
            Apie <span className="nexos-gradient-text">mus</span>
          </h2>
          <p className="nexos-subheading mx-auto">
            Mes padedame įmonėms atrasti vertę jų duomenyse ir priimti geresnius sprendimus.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="nexos-card h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Mūsų istorija</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Stebėdami verslo procesus įvairiose pramonės šakose pastebėjome, jog organizacijos dažnai susiduria su sunkumais efektyviai valdydamos savo verslo duomenis. Nepaisant plačiai paplitusio „Excel" įrankio naudojimo, jo galimybės yra ribotos, ypač tvarkant didelius duomenų srautus. Dėl to įmonės praranda konkurencinį pranašumą, neįžvelgdamos svarbių tendencijų, negalėdamos optimizuoti procesų ir priimti pagrįstus sprendimus.
                  </p>
                  <p>
                    „Roqus Analytics" gimė iš tvirto įsitikinimo, kad duomenys yra vertingiausias šiuolaikinio verslo turtas.
                  </p>
                  <p>
                    Mūsų misija – atverti šį potencialą, suteikiant organizacijoms galimybę priimti informuotus sprendimus ir siekti tvarių rezultatų.
                  </p>
                  <p>
                    Naudojant pažangius įrankius, tokius kaip SQL, Python ar Power BI, mes ne tik surenkame ir apdorojame duomenis, bet ir kuriame aiškią jų struktūrą. Atlikdami kruopštų duomenų valymą, transformavimą ir modeliavimą, taip užtikrinant duomenų kokybę ir prieinamumą. Galiausiai, pateikdami interaktyvias ir išsamias ataskaitas, mes paverčiame duomenis aiškiomis verslo įžvalgomis, kurios leidžia priimti strateginius sprendimus.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="nexos-card h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Mūsų įrankiai</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="h-12 w-12 rounded-lg bg-nexos-purple/20 flex items-center justify-center flex-shrink-0">
                        <tool.icon className="h-6 w-6 text-nexos-purple" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-1">{tool.name}</h4>
                        <p className="text-gray-300">{tool.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-nexos-dark-lighter">
                  <h3 className="text-2xl font-bold text-white mb-4">Mūsų procesas</h3>
                  <ol className="space-y-4">
                    <li className="flex gap-4 items-start">
                      <div className="h-8 w-8 rounded-full bg-nexos-purple/20 flex items-center justify-center flex-shrink-0 text-nexos-purple font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Duomenų rinkimas</h4>
                        <p className="text-gray-300">Sujungiame duomenis iš įvairių šaltinių į vieną vietą.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="h-8 w-8 rounded-full bg-nexos-purple/20 flex items-center justify-center flex-shrink-0 text-nexos-purple font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Duomenų valymas</h4>
                        <p className="text-gray-300">Užtikriname, kad duomenys būtų tikslūs, nuoseklūs ir patikimi.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="h-8 w-8 rounded-full bg-nexos-purple/20 flex items-center justify-center flex-shrink-0 text-nexos-purple font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Duomenų analizė</h4>
                        <p className="text-gray-300">Analizuojame duomenis, kad atrastume vertingas įžvalgas ir tendencijas.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="h-8 w-8 rounded-full bg-nexos-purple/20 flex items-center justify-center flex-shrink-0 text-nexos-purple font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Vizualizacija</h4>
                        <p className="text-gray-300">Kuriame interaktyvias ataskaitas, kurios padeda lengvai suprasti duomenis.</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
