import {
  ShoppingCart,
  TrendingUp,
  Factory,
  Package,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: ShoppingCart,
    title: "Pardavimų analitika",
    problem: "Pardavimų vadovas nematė, kurie produktai generuoja didžiausią pelningumą skirtinguose regionuose.",
    solution: "Sukurta interaktyvi Power BI ataskaita su produktų pelningumo analize pagal regionus, klientų segmentus ir pardavimo kanalus.",
    result: "15% padidėjęs bendrasis pelnas dėl prekių asortimento optimizavimo ir efektyvesnio pardavimų komandos darbo."
  },
  {
    icon: Factory,
    title: "Gamybos analitika",
    problem: "Gamybos vėlavimai dėl neefektyvaus išteklių planavimo ir nenumatytų įrangos gedimų.",
    solution: "Realaus laiko gamybos stebėsenos sistema su automatiniais įspėjimais ir prediktyvinės priežiūros modeliais.",
    result: "22% sumažėjęs gamybos ciklo laikas ir 18% sumažėjusios atsargos, 35% mažiau neplanuotų prastovų."
  },
  {
    icon: Package,
    title: "Atsargų valdymo analitika",
    problem: "Per didelės atsargos, užšaldančios apyvartines lėšas, kartu su prekių trūkumu populiariausiems produktams.",
    solution: "Prognozavimo modeliai ir automatinis atsargų papildymas, ABC analizė ir optimalių atsargų lygio nustatymas.",
    result: "30% sumažėjęs atsargų lygis išlaikant tą patį aptarnavimo lygį, 25% mažiau prekių trūkumo atvejų."
  },
  {
    icon: TrendingUp,
    title: "Finansų analitika",
    problem: "Sudėtinga ir laikui imli finansinių ataskaitų konsolidacija iš skirtingų sistemų ir padalinių.",
    solution: "Automatizuota finansinių duomenų konsolidacija ir interaktyvios ataskaitos su galimybe analizuoti duomenis įvairiais pjūviais.",
    result: "75% sumažėjęs ataskaitų rengimo laikas, 20% tikslesnis biudžeto planavimas, geresnis pinigų srautų valdymas."
  },
  {
    icon: BarChart3,
    title: "Rinkodaros analitika",
    problem: "Neaiškus rinkodaros kampanijų efektyvumas ir investicijų grąža (ROI) skirtinguose kanaluose.",
    solution: "Integruota rinkodaros analitikos sistema, sujungianti duomenis iš visų rinkodaros kanalų ir CRM.",
    result: "40% padidėjęs rinkodaros ROI, 28% sumažėjusios klientų pritraukimo išlaidos, tikslesnis biudžeto paskirstymas."
  }
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 md:py-28 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-nexos-purple/10 rounded-full blur-[120px] animate-pulse-glow"></div>
      </div>

      <div id="use-cases-section" className="nexos-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="nexos-heading mb-6">
            Naudojimo <span className="nexos-gradient-text">atvejai</span>
          </h2>
          <p className="nexos-subheading mx-auto">
            Realūs pavyzdžiai, kaip duomenų analitika padeda įmonėms spręsti problemas ir pasiekti geresnių rezultatų.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="nexos-card">
              <div className="h-12 w-12 rounded-lg bg-nexos-purple/20 flex items-center justify-center mb-4">
                <useCase.icon className="h-6 w-6 text-nexos-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>

              <div className="space-y-4 mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-nexos-purple mb-1">Problema</h4>
                  <p className="text-gray-300 text-sm">{useCase.problem}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-nexos-purple mb-1">Sprendimas</h4>
                  <p className="text-gray-300 text-sm">{useCase.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-nexos-purple mb-1">Rezultatas</h4>
                  <p className="text-gray-300 text-sm">{useCase.result}</p>
                </div>
              </div>

              <Button className="nexos-button-primary w-full mt-auto">
                Sužinoti daugiau
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
