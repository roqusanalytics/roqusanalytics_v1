import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "Kas yra Roqus Analytics?",
    answer: "Roqus Analytics yra duomenų analitikos įmonė, kuri specializuojasi verslo intelekto sprendimuose. Mes padedame įmonėms efektyviai rinkti, analizuoti ir vizualizuoti duomenis, kad jie galėtų priimti geresnius verslo sprendimus. Mūsų komanda turi didelę patirtį kuriant ir diegiant Power BI sprendimus, automatizuojant duomenų procesus ir kuriant išsamias analitines sistemas, pritaikytas konkretiems verslo poreikiams."
  },
  {
    question: "Kas yra Power BI sistema?",
    answer: "Power BI yra galinga Microsoft verslo analitikos platforma, lyderiaujanti rinkoje tarp duomenų vizualizacijos įrankių. Ji leidžia sujungti duomenis iš įvairių šaltinių (Excel, SQL, web servisų ir kt.), juos transformuoti ir sukurti interaktyvias ataskaitas bei valdymo skydelius. Power BI pasižymi aukšto lygio saugumu, galimybe dalintis ataskaitomis su komanda, automatiniais atnaujinimais ir pažangiomis analitikos funkcijomis, įskaitant dirbtinio intelekto galimybes. Platforma nuolat tobulinama ir atnaujinama, užtikrinant naujausias funkcijas ir saugumo standartus."
  },
  {
    question: "Kas yra duomenų analitika ir kaip ji gali padėti mano verslui?",
    answer: "Duomenų analitika yra procesas, kurio metu iš jūsų verslo duomenų išgaunamos vertingos įžvalgos. Ji padeda geriau suprasti klientų elgesį, optimizuoti procesus, sumažinti išlaidas ir priimti faktais pagrįstus sprendimus. Duomenų analitika leidžia identifikuoti tendencijas, kurios gali būti nepastebimos žiūrint tik į atskirus duomenis."
  },
  {
    question: "Ar galima integruoti Power BI su kitomis mūsų naudojamomis sistemomis?",
    answer: "Taip, Power BI gali būti integruotas su daugybe sistemų, įskaitant CRM, ERP, buhalterines programas, Excel, SQL duomenų bazes ir kt. Microsoft nuolat plečia galimų integracijų sąrašą, o mes turime patirties integruojant Power BI su įvairiomis verslo sistemomis."
  },
  {
    question: "Kaip užtikrinamas mūsų duomenų saugumas?",
    answer: "Mes taikome aukščiausius duomenų saugumo standartus. Visi duomenys yra šifruojami, prieiga prie jų yra griežtai kontroliuojama, o mūsų specialistai laikosi konfidencialumo įsipareigojimų. Taip pat reguliariai atliekame saugumo auditus ir atnaujinimus."
  },
  {
    question: "Ar atitinkate BDAR (GDPR) reikalavimus?",
    answer: "Taip, visi mūsų sprendimai atitinka BDAR (GDPR) reikalavimus. Mes užtikriname, kad asmens duomenys būtų tvarkomi teisėtai, skaidriai ir saugiai. Taip pat padedame klientams įgyvendinti BDAR reikalavimus jų duomenų tvarkymo procesuose."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(i => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-gradient-to-br from-[#E8F0FF] to-[#F2EFFE]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-[#4A89F3] via-[#7B68EE] to-[#9B7BF7] rounded-full opacity-30"></div>
        <div className="absolute top-[30%] right-[20%] w-[600px] h-[600px] bg-gradient-radial from-[#4A89F3]/40 to-transparent rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] left-[30%] w-[500px] h-[500px] bg-gradient-radial from-[#7C4DFF]/30 to-transparent rounded-full blur-[100px] animate-pulse-glow"></div>
      </div>

      <div className="nexos-container relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3 text-left mb-16 md:mb-0 md:sticky md:top-24">
            <h2 className="nexos-heading mb-6">
              Dažnai <span className="nexos-gradient-text">Užduodami Klausimai</span>
            </h2>
            <p className="nexos-subheading">
              Atsakymai į dažniausiai užduodamus klausimus apie duomenų analitiką ir mūsų paslaugas.
            </p>
          </div>

          <div className="md:w-2/3">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm border border-[#4A89F3]/20 rounded-xl overflow-hidden shadow-sm hover:shadow-[#7B68EE]/20 transition-all duration-300">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex justify-between items-center p-5 text-left"
                  >
                    <h3 className="text-lg font-medium text-[#4A89F3]">{item.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-[#7B68EE] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#7B68EE] flex-shrink-0" />
                    )}
                  </button>

                  <div
                    className={`px-5 transition-all duration-300 ease-in-out ${
                      openItems.includes(index)
                        ? "max-h-96 pb-5 opacity-100"
                        : "max-h-0 overflow-hidden opacity-0"
                    }`}
                  >
                    <p className="text-[#4A4A6A]">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
