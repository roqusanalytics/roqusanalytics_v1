import { useEffect, useState } from "react";
import {
  TrendingUp,
  LineChart,
  BarChart3,
  PieChart,
  Zap,
  Shield,
  ChartBar,
  BarChart,
  ArrowUpRight,
  TrendingDown,
  Percent,
  DollarSign,
  Clock,
  Target,
  Award,
  Users,
  Lightbulb,
  Rocket
} from "lucide-react";

// Animuotos ikonos, kurios atspindi procentus ir skaičius
const PercentIcon = ({ value }: { value: string }) => (
  <div className="relative flex items-center justify-center">
    <Percent className="h-6 w-6 text-nexos-purple" />
    <span className="absolute text-xs font-bold text-white">{value}</span>
  </div>
);

const ROIIcon = () => (
  <div className="relative flex items-center justify-center">
    <ArrowUpRight className="h-6 w-6 text-nexos-purple animate-pulse" />
    <span className="absolute text-xs font-bold text-white">5-10x</span>
  </div>
);

const benefits = [
  {
    icon: TrendingUp,
    title: "Finansinė nauda",
    description: "Visapusiška duomenų integracija tarp pardavimų, pirkimų, tiekimo grandinės ir klientų aptarnavimo sukuria vientisą sprendimų priėmimo naudą. PwC prognozuoja, kad analitikos diegimas duoda 20–30 % produktyvumo, greičio rinkai ir pajamų augimo.",
    items: [
      "20–30 % produktyvumo ir pajamų augimas",
      "42 % pardavimų vadovų ROI viršija lūkesčius",
      "51 % organizacijų naudoja prognozuojamąją analizę"
    ],
    stats: [
      { icon: PercentIcon, value: "30", label: "Produktyvumo augimas" },
      { icon: PercentIcon, value: "42", label: "ROI viršija lūkesčius" },
      { icon: PercentIcon, value: "51", label: "Naudoja prognozavimą" }
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-32 h-32 bg-nexos-purple/10 rounded-full animate-pulse-slow"></div>
        <div className="relative z-10 flex flex-col items-center">
          <BarChart className="h-16 w-16 text-nexos-purple mb-4" />
          <div className="flex items-center space-x-4">
            <ArrowUpRight className="h-8 w-8 text-green-500 animate-bounce" />
            <span className="text-2xl font-bold text-white">+25%</span>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: LineChart,
    title: "Strateginė nauda",
    description: "PwC tyrimas rodo, kad itin duomenimis grįsti verslai 3× labiau gerina sprendimų priėmimo kokybę, o 72 % vadovų mato analizės suteikiamą konkurencinį pranašumą. Be to, 64 % B2B įmonių planuoja dar labiau investuoti į prognozuojamąją analizę (Harvard Business School).",
    items: [
      "3× geresni sprendimai ir greitesnis reagavimas",
      "72 % vadovų įžvelgia konkurencinį pranašumą",
      "64 % įmonių didina investicijas į prognozuojamąją analizę"
    ],
    stats: [
      { icon: Lightbulb, value: "3×", label: "Geresni sprendimai" },
      { icon: PercentIcon, value: "72", label: "Konkurencinis pranašumas" },
      { icon: PercentIcon, value: "64", label: "Didina investicijas" }
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-32 h-32 bg-nexos-purple/10 rounded-full animate-pulse-slow"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <LineChart className="h-12 w-12 text-nexos-purple" />
              <div className="mt-2 text-sm text-[#262B30]">Prognozės</div>
            </div>
            <div className="flex flex-col items-center">
              <Target className="h-12 w-12 text-nexos-purple" />
              <div className="mt-2 text-sm text-[#262B30]">Tikslai</div>
            </div>
            <div className="flex flex-col items-center">
              <Rocket className="h-12 w-12 text-nexos-purple" />
              <div className="mt-2 text-sm text-[#262B30]">Augimas</div>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-nexos-purple" />
              <div className="mt-2 text-sm text-[#262B30]">Apsauga</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: BarChart3,
    title: "Operacinė nauda",
    description: "Duomenų analitika padeda optimizuoti kasdienius procesus, automatizuoti rutinines užduotis ir pagerinti bendrą veiklos efektyvumą.",
    items: [
      "Procesų optimizavimas ir neefektyvumų šalinimas",
      "Rutininių užduočių automatizavimas",
      "Greitesnis problemų identifikavimas ir sprendimas"
    ],
    stats: [
      { icon: Clock, value: "-30%", label: "Laiko taupymas" },
      { icon: Zap, value: "+45%", label: "Efektyvumas" },
      { icon: PercentIcon, value: "60", label: "Automatizacija" }
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-32 h-32 bg-nexos-purple/10 rounded-full animate-pulse-slow"></div>
        <div className="relative z-10">
          <div className="flex flex-col items-center">
            <div className="flex space-x-4 mb-4">
              <div className="h-24 w-8 bg-nexos-purple/20 rounded-t-lg relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-nexos-purple animate-rise" style={{ height: '30%' }}></div>
              </div>
              <div className="h-24 w-8 bg-nexos-purple/20 rounded-t-lg relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-nexos-purple animate-rise" style={{ height: '50%', animationDelay: '0.2s' }}></div>
              </div>
              <div className="h-24 w-8 bg-nexos-purple/20 rounded-t-lg relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-nexos-purple animate-rise" style={{ height: '70%', animationDelay: '0.4s' }}></div>
              </div>
              <div className="h-24 w-8 bg-nexos-purple/20 rounded-t-lg relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-nexos-purple animate-rise" style={{ height: '90%', animationDelay: '0.6s' }}></div>
              </div>
            </div>
            <div className="text-sm text-[#262B30]">Efektyvumo augimas</div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: PieChart,
    title: "Klientų patirties gerinimas",
    description: "Geriau suprasdami savo klientus, galite pasiūlyti jiems labiau pritaikytus produktus ir paslaugas, taip pagerinant jų pasitenkinimą ir lojalumą.",
    items: [
      "Gilesnė klientų elgesio ir poreikių analizė",
      "Personalizuoti pasiūlymai, paremti duomenimis",
      "Klientų pasitenkinimo ir lojalumo didinimas"
    ],
    stats: [
      { icon: Users, value: "+40%", label: "Klientų išlaikymas" },
      { icon: PercentIcon, value: "85", label: "Pasitenkinimas" },
      { icon: DollarSign, value: "+25%", label: "Klientų vertė" }
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-32 h-32 bg-nexos-purple/10 rounded-full animate-pulse-slow"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center">
            <div className="relative h-32 w-32">
              <PieChart className="h-32 w-32 text-nexos-purple" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Zap,
    title: "Efektyvesni procesai",
    description: "Identifikuokite kur švaistomi ištekliai, atraskite procesų butelio kakliukus ir sumažinkite veiklos sąnaudas - viską parodo kruopšti duomenų analizė.",
    items: [
      "Išteklių paskirstymo optimizavimas",
      "Procesų butelio kakliukų identifikavimas ir šalinimas",
      "Veiklos sąnaudų mažinimas"
    ],
    stats: [
      { icon: PercentIcon, value: "35", label: "Efektyvumo padidėjimas" },
      { icon: Clock, value: "-40%", label: "Laiko taupymas" },
      { icon: DollarSign, value: "-25%", label: "Išlaidų mažinimas" }
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-32 h-32 bg-nexos-purple/10 rounded-full animate-pulse-slow"></div>
        <div className="relative z-10">
          <div className="flex flex-col items-center">
            <Zap className="h-16 w-16 text-nexos-purple animate-pulse" />
            <div className="mt-4 flex items-center space-x-2">
              <Clock className="h-8 w-8 text-nexos-purple" />
              <ArrowUpRight className="h-6 w-6 text-green-500" />
              <DollarSign className="h-8 w-8 text-nexos-purple" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Shield,
    title: "Stipresnis verslo pamatas",
    description: "Tvirti, išanalizuoti duomenys padeda priimti geriau pagrįstus sprendimus, mažinti riziką ir nuolat didinti veiklos pelningumą.",
    items: [
      "Faktais pagrįsti sprendimai",
      "Rizikos mažinimas",
      "Nuolatinis veiklos pelningumas"
    ],
    stats: [
      { icon: Lightbulb, value: "+60%", label: "Geresni sprendimai" },
      { icon: Shield, value: "-45%", label: "Rizikos mažinimas" },
      { icon: TrendingUp, value: "+30%", label: "Pelningumas" }
    ],
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-32 h-32 bg-nexos-purple/10 rounded-full animate-pulse-slow"></div>
        <div className="relative z-10">
          <div className="flex flex-col items-center">
            <Shield className="h-16 w-16 text-nexos-purple" />
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-12 w-12 text-green-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const Benefits = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const benefitElements = document.querySelectorAll('.benefit-card');
      benefitElements.forEach((el, index) => {
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
    <section id="benefits" className="py-20 md:py-28 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(350deg,rgba(142,49,204,1)_0%,rgba(119,134,252,1)_0%,rgba(255,255,255,1)_100%,rgba(162,60,230,1)_100%)] z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[30%] right-[20%] w-[500px] h-[500px] bg-[#7786fc]/20 rounded-full blur-[150px] animate-pulse-glow"></div>
        <div className="absolute bottom-[20%] left-[30%] w-[300px] h-[300px] bg-[#7786fc]/30 rounded-full blur-[100px] animate-pulse-glow"></div>
      </div>

      <div className="nexos-container relative z-10">
        <div className="text-left mb-16">
          <h2 className="nexos-heading mb-10">
            Kodėl tai <span className="nexos-gradient-text">naudinga</span>
          </h2>
          <p className="nexos-subheading text-[#262B30]">
            Duomenų analitika suteikia jūsų verslui konkurencinį pranašumą ir padeda pasiekti geresnių rezultatų.
          </p>
        </div>

        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-card flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center transition-all duration-700 transform ${
                visibleItems.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Tekstinė dalis */}
              <div className="lg:w-1/2 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-lg bg-nexos-purple/20 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-nexos-purple" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#262B30]">{benefit.title}</h3>
                </div>
                <p className="text-[#262B30] mb-6">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-nexos-purple mr-2">•</span>
                      <span className="text-[#262B30]">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Statistikos ikonos */}
                <div className="flex flex-wrap gap-4 mt-6">
                  {benefit.stats?.map((stat, statIndex) => (
                    <div key={statIndex} className="flex flex-col items-center bg-nexos-dark-lighter rounded-lg p-3 w-24">
                      {typeof stat.icon === 'function' ? (
                        <stat.icon value={stat.value} />
                      ) : (
                        <div className="relative flex items-center justify-center">
                          <stat.icon className="h-6 w-6 text-nexos-purple" />
                        </div>
                      )}
                      <span className="text-[#262B30] font-bold mt-1">{stat.value}</span>
                      <span className="text-[#262B30] text-xs text-center">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vizualinė dalis - modernios iliustracijos */}
              <div className="lg:w-1/2 h-64 md:h-80 nexos-card flex items-center justify-center">
                {benefit.illustration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
