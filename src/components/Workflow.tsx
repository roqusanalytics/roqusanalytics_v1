
import { useState, useEffect } from "react";
import {
  ArrowRight,
  FileSearch,
  BarChart3,
  Database,
  Zap,
  Users,
  FileText,
  Layers,
  Database as DatabaseIcon,
  BarChart,
  LineChart,
  PieChart,
  Gauge
} from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Poreikių analizė",
    description: "Išsiaiškiname jūsų verslo poreikius ir tikslus, kad galėtume sukurti tinkamiausią sprendimą."
  },
  {
    icon: Database,
    title: "Duomenų sujungimas",
    description: "Sujungiame ir apdorojame duomenis iš įvairių šaltinių (CRM, ERP, Excel, kt.)."
  },
  {
    icon: BarChart3,
    title: "Ataskaitų kūrimas",
    description: "Kuriame interaktyvias ataskaitas ir dashboardus, kurie atspindi svarbiausius jūsų verslo rodiklius."
  },
  {
    icon: Zap,
    title: "Diegimas ir mokymai",
    description: "Įdiegiame sprendimą ir apmokome jūsų komandą efektyviai naudotis sukurtomis ataskaitomis."
  }
];

// Duomenų šaltiniai ir rezultatai procesų diagramai
const dataSources = [
  {
    icon: Users,
    title: "CRM",
  },
  {
    icon: FileText,
    title: "SharePoint",
  },
  {
    icon: Layers,
    title: "Google Docs",
  },
  {
    icon: DatabaseIcon,
    title: "SQL",
  }
];

const dataOutputs = [
  {
    icon: BarChart,
    title: "Pardavimų ataskaitos",
  },
  {
    icon: LineChart,
    title: "Pirkimų įžvalgos",
  },
  {
    icon: PieChart,
    title: "Finansinės ataskaitos",
  },
  {
    icon: Gauge,
    title: "Gamybos KPI",
  }
];

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isFlowVisible, setIsFlowVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 3000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const flowObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFlowVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('workflow-section');
    const flowElement = document.getElementById('process-flow-section');

    if (element) observer.observe(element);
    if (flowElement) flowObserver.observe(flowElement);

    return () => {
      clearInterval(interval);
      if (element) observer.unobserve(element);
      if (flowElement) flowObserver.unobserve(flowElement);
    };
  }, []);

  return (
    <section id="workflow" className="py-20 md:py-28 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#8e31cc] bg-[linear-gradient(350deg,rgba(142,49,204,1)_0%,rgba(119,134,252,1)_0%,rgba(255,255,255,1)_100%,rgba(162,60,230,1)_100%)] z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] left-[50%] w-[300px] h-[300px] bg-[#7786fc]/20 rounded-full blur-[80px] animate-pulse-glow"></div>
        <div className="absolute bottom-[20%] right-[30%] w-[400px] h-[400px] bg-[#7786fc]/30 rounded-full blur-[100px] animate-pulse-glow"></div>
      </div>

      <div id="workflow-section" className="nexos-container relative z-10">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#262B30] mb-10">
            Kaip <span className="text-[#7786fc] font-bold">Tai Veikia</span>
          </h2>
          <p className="text-xl text-[#262B30] max-w-3xl">
            Paprastas keturių žingsnių procesas, kuris padeda transformuoti jūsų duomenis į
            vertingas įžvalgas ir sprendimus.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl mb-4 transition-all duration-300 flex gap-4 items-start ${
                    activeStep === index ? "nexos-card nexos-glow" : "bg-transparent border border-transparent"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`h-10 w-10 rounded-lg flex items-center justify-center transition-colors ${
                      activeStep === index ? "bg-nexos-purple text-white" : "bg-nexos-dark text-gray-400"
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className={`${activeStep === index ? "text-gray-300" : "text-gray-400"}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="nexos-card w-full max-w-lg aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-nexos-purple/30 to-transparent opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div
                      className={`h-16 w-16 rounded-full bg-nexos-purple/20 flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                        activeStep >= 2 ? "scale-110" : "scale-100"
                      }`}
                    >
                      {(() => {
                        const StepIcon = steps[activeStep].icon;
                        return <StepIcon className="h-8 w-8 text-nexos-purple" />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {steps[activeStep].title}
                    </h3>
                    <div className="flex justify-center gap-1 mb-4">
                      {steps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                            i === activeStep ? "w-6 bg-nexos-purple" : "bg-gray-600"
                          }`}
                        ></div>
                      ))}
                    </div>
                    <p className="text-gray-300">{steps[activeStep].description}</p>

                    {activeStep < steps.length - 1 && (
                      <div className="mt-6 flex justify-center">
                        <ArrowRight
                          className="h-6 w-6 text-nexos-purple animate-pulse"
                          onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Procesų diagrama */}
        <div
          id="process-flow-section"
          className={`mt-20 transition-all duration-1000 transform ${
            isFlowVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-left mb-12">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#262B30] mb-8">
              Duomenų <span className="text-[#8e31cc] font-bold">transformacija</span>
            </h3>
            <p className="text-xl text-[#262B30] max-w-3xl">
              Sujungiame duomenis iš įvairių šaltinių ir paverčiame juos vertingomis įžvalgomis
            </p>
          </div>
          <div className="flex flex-col items-center">
            {/* Desktop išdėstymas - rodomas TIK didesniuose ekranuose */}
            <div className="hidden sm:block w-full">
              <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-12 relative">
                {/* Vienas didelis SVG elementas visoms linijoms - stilius kaip pavyzdyje */}
                <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
                    {/* Centrinės linijos pagal mermaid.js pavyzdį */}
                    <path
                      d="M 450,200 L 550,200"
                      stroke="#4f46e5"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                    <path
                      d="M 650,200 L 750,200"
                      stroke="#4f46e5"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />

                    {/* Linijos iš kairės pusės komponentų į centrinę liniją */}
                    <path
                      d="M 300,50 L 450,50 L 450,200"
                      stroke="#4f46e5"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                    <path
                      d="M 300,135 L 450,135 L 450,200"
                      stroke="#4f46e5"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                    <path
                      d="M 300,220 L 450,220 L 450,200"
                      stroke="#4f46e5"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                    <path
                      d="M 300,305 L 450,305 L 450,200"
                      stroke="#4f46e5"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />

                    {/* Linija iš centrinės linijos į Power BI */}
                    <path
                      d="M 550,200 L 600,200"
                      stroke="#4f46e5"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />

                    {/* Linija iš Power BI į dešinę centrinę liniją */}
                    <path
                      d="M 600,200 L 650,200"
                      stroke="#4f46e5"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />

                    {/* Linijos iš dešinės centrinės linijos į dešinės pusės komponentus */}
                    <path
                      d="M 750,200 L 750,50 L 900,50"
                      stroke="#4f46e5"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                    <path
                      d="M 750,200 L 750,135 L 900,135"
                      stroke="#4f46e5"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                    <path
                      d="M 750,200 L 750,220 L 900,220"
                      stroke="#4f46e5"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                    <path
                      d="M 750,200 L 750,305 L 900,305"
                      stroke="#4f46e5"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                  </svg>
                </div>

                {/* Kairė pusė - duomenų šaltiniai */}
                <div className="flex flex-col space-y-6 md:w-1/3 relative" style={{ zIndex: 10 }}>
                  {dataSources.map((source, index) => (
                    <div key={`source-${index}`} className="flex items-center justify-end">
                      <div className="nexos-card flex items-center p-4 w-[280px] whitespace-nowrap">
                        <div className="h-10 w-10 rounded-md bg-nexos-purple/20 flex items-center justify-center mr-3">
                          <source.icon className="h-5 w-5 text-nexos-purple" />
                        </div>
                        <span className="text-lg font-medium text-white">{source.title}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Centras - Power BI */}
                <div className="flex items-center justify-center md:w-1/3" style={{ zIndex: 10 }}>
                  <div className="nexos-card nexos-glow p-6 text-center relative">
                    {/* Švytėjimo efektas aplink centrinį elementą */}
                    <div className="absolute inset-0 bg-nexos-purple/5 rounded-xl blur-md"></div>

                    <div className="h-20 w-20 mx-auto mb-4 flex items-center justify-center relative">
                      <svg viewBox="0 0 32 32" className="h-16 w-16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 16H10V26H6V16Z" fill="#A066FF" />
                        <path d="M14 10H18V26H14V10Z" fill="#A066FF" />
                        <path d="M22 4H26V26H22V4Z" fill="#A066FF" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">POWER BI</h3>
                    <p className="text-sm text-gray-300">Roqus analytics</p>
                  </div>
                </div>

                {/* Dešinė pusė - rezultatai */}
                <div className="flex flex-col space-y-6 md:w-1/3 relative" style={{ zIndex: 10 }}>
                  {dataOutputs.map((output, index) => (
                    <div key={`output-${index}`} className="flex items-center">
                      <div className="nexos-card flex items-center p-4 w-[280px] whitespace-nowrap">
                        <div className="h-10 w-10 rounded-md bg-nexos-purple/20 flex items-center justify-center mr-3">
                          <output.icon className="h-5 w-5 text-nexos-purple" />
                        </div>
                        <span className="text-lg font-medium text-white">{output.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobilios versijos jungiančios linijos - rodoma TIK mažuose ekranuose */}
            <div className="sm:hidden flex flex-col items-center my-6 w-full">
              {/* Viršutinė dalis - duomenų šaltiniai */}
              <div className="w-full grid grid-cols-2 gap-4 mb-6 relative">
                {dataSources.map((source, index) => (
                  <div key={`mobile-source-${index}`} className="nexos-card flex items-center p-3 whitespace-nowrap w-full">
                    <div className="h-8 w-8 rounded-md bg-nexos-purple/20 flex items-center justify-center mr-2">
                      <source.icon className="h-4 w-4 text-nexos-purple" />
                    </div>
                    <span className="text-sm font-medium text-white">{source.title}</span>
                  </div>
                ))}

                {/* Jungiančios linijos iš duomenų šaltinių - plonesnės ir elegantiškesnės */}
                <div className="absolute bottom-[-20px] left-1/4 w-[2px] h-[20px] bg-indigo-600 rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-20px] right-1/4 w-[2px] h-[20px] bg-indigo-600 rounded-full animate-pulse"></div>
              </div>

              {/* Jungiančios linijos - plonesnės ir elegantiškesnės */}
              <div className="h-16 w-[2px] bg-indigo-600 rounded-full mb-6 animate-pulse"></div>

              {/* Power BI centras */}
              <div className="nexos-card nexos-glow p-5 text-center mb-6 w-full max-w-[200px]">
                <div className="h-14 w-14 mx-auto mb-3 flex items-center justify-center">
                  <svg viewBox="0 0 32 32" className="h-12 w-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 16H10V26H6V16Z" fill="#A066FF" />
                    <path d="M14 10H18V26H14V10Z" fill="#A066FF" />
                    <path d="M22 4H26V26H22V4Z" fill="#A066FF" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">POWER BI</h3>
                <p className="text-xs text-gray-300">Roqus analytics</p>
              </div>

              {/* Jungiančios linijos - plonesnės ir elegantiškesnės */}
              <div className="h-16 w-[2px] bg-indigo-600 rounded-full mb-6 animate-pulse"></div>

              {/* Apatinė dalis - rezultatai */}
              <div className="w-full grid grid-cols-2 gap-4 relative">
                {/* Jungiančios linijos į rezultatus - plonesnės ir elegantiškesnės */}
                <div className="absolute top-[-20px] left-1/4 w-[2px] h-[20px] bg-indigo-600 rounded-full animate-pulse"></div>
                <div className="absolute top-[-20px] right-1/4 w-[2px] h-[20px] bg-indigo-600 rounded-full animate-pulse"></div>

                {dataOutputs.map((output, index) => (
                  <div key={`mobile-output-${index}`} className="nexos-card flex items-center p-3 whitespace-nowrap w-full">
                    <div className="h-8 w-8 rounded-md bg-nexos-purple/20 flex items-center justify-center mr-2">
                      <output.icon className="h-4 w-4 text-nexos-purple" />
                    </div>
                    <span className="text-sm font-medium text-white">{output.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
