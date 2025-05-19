import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UseCases = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pb-20 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[#8e31cc] bg-[linear-gradient(350deg,rgba(142,49,204,1)_0%,rgba(119,134,252,1)_0%,rgba(255,255,255,1)_100%,rgba(162,60,230,1)_100%)] z-0"></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[30%] right-[20%] w-[500px] h-[500px] bg-[#7786fc]/20 rounded-full blur-[150px] animate-pulse-glow"></div>
            <div className="absolute bottom-[20%] left-[30%] w-[300px] h-[300px] bg-[#7786fc]/30 rounded-full blur-[100px] animate-pulse-glow"></div>
          </div>

          <div className="nexos-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="nexos-heading mb-6">
                Naudojimo <span className="nexos-gradient-text">Atvejai</span>
              </h1>
              <p className="nexos-subheading mx-auto mb-8">
                Sužinokite, kaip įvairių sektorių įmonės naudoja Roqus Analytics platformą savo verslo iššūkiams spręsti.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Introduction */}
        <section className="py-16 bg-nexos-dark-light relative">
          <div className="nexos-container">
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-[#262B30] mb-6">
                Duomenys yra jūsų konkurencinis pranašumas. Pardavimai visada buvo žmonių verslas ir taip išliks ateityje.
                Tačiau norint pasiekti geriausius rezultatus kiekviename organizacijos sluoksnyje, sprendimų priėmėjai
                sistemingai stiprina darbuotojų galią naudoti duomenis, analitiką ir technologijas.
              </p>
              <p className="text-[#262B30]">
                Tai padeda generuoti naujas įžvalgas – matyti holistiškai ir sistemingai, nustatyti išankstinius kriterijus,
                kad šios įžvalgos taptų realiu poveikiu. Rezultatas? Augimas, viršijantis rinkos lygį, ir pelno prieš palūkanas,
                mokesčius, nusidėvėjimą ir amortizaciją (EBITDA) padidėjimas nuo 15 iki 25%.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Konkrečių sektorių naudojimo atvejai</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Use Case 1 - Pardavimų analitika */}
              <div className="bg-white/70 p-8 rounded-xl border border-nexos-purple/20 hover:border-nexos-purple/50 transition-all duration-300 shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-nexos-purple/10 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nexos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#262B30]">Pardavimų analitika</h3>
                </div>
                <div className="mb-6">
                  <h4 className="text-[#262B30] font-semibold mb-2">Problema:</h4>
                  <p className="text-[#262B30] mb-4">
                    Pardavimų vadovas nematė, kurie produktai generuoja didžiausią pelningumą skirtinguose regionuose.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-[#262B30] font-semibold mb-2">Sprendimas:</h4>
                  <p className="text-[#262B30] mb-4">
                    Sukurta interaktyvi Power BI ataskaita su produktų pelningumo analize pagal regionus.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-[#262B30] font-semibold mb-2">Rezultatai:</h4>
                  <ul className="text-[#262B30] list-disc pl-5 space-y-1">
                    <li>15% padidėjęs bendrasis pelnas dėl prekių asortimento optimizavimo</li>
                    <li>Aiškus skirtingų regionų pardavimų efektyvumo palyginimas</li>
                    <li>Greitesnis sprendimų priėmimas dėl realaus laiko duomenų</li>
                  </ul>
                </div>
                <a href="#" className="text-nexos-purple hover:text-nexos-purple-light transition-colors">Skaityti visą atvejo analizę →</a>
              </div>

              {/* Use Case 2 - Gamybos analitika */}
              <div className="bg-white/70 p-8 rounded-xl border border-nexos-purple/20 hover:border-nexos-purple/50 transition-all duration-300 shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-nexos-purple/10 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nexos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#262B30]">Gamybos analitika</h3>
                </div>
                <div className="mb-6">
                  <h4 className="text-[#262B30] font-semibold mb-2">Problema:</h4>
                  <p className="text-[#262B30] mb-4">
                    Gamybos vėlavimai dėl neefektyvaus išteklių planavimo.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-[#262B30] font-semibold mb-2">Sprendimas:</h4>
                  <p className="text-[#262B30] mb-4">
                    Realaus laiko gamybos stebėsenos sistema su automatiniais įspėjimais.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-[#262B30] font-semibold mb-2">Rezultatai:</h4>
                  <ul className="text-[#262B30] list-disc pl-5 space-y-1">
                    <li>22% sumažėjęs gamybos ciklo laikas</li>
                    <li>18% sumažėjusios atsargos</li>
                    <li>Pagerėjęs darbo jėgos planavimas ir resursų paskirstymas</li>
                  </ul>
                </div>
                <a href="#" className="text-nexos-purple hover:text-nexos-purple-light transition-colors">Skaityti visą atvejo analizę →</a>
              </div>

              {/* Use Case 3 - Atsargų valdymo analitika */}
              <div className="bg-white/70 p-8 rounded-xl border border-nexos-purple/20 hover:border-nexos-purple/50 transition-all duration-300 shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-nexos-purple/10 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nexos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#262B30]">Atsargų valdymo analitika</h3>
                </div>
                <div className="mb-6">
                  <h4 className="text-[#262B30] font-semibold mb-2">Problema:</h4>
                  <p className="text-[#262B30] mb-4">
                    Per didelės atsargos, užšaldančios apyvartines lėšas.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-[#262B30] font-semibold mb-2">Sprendimas:</h4>
                  <p className="text-[#262B30] mb-4">
                    Prognozavimo modeliai ir automatinis atsargų papildymas.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-[#262B30] font-semibold mb-2">Rezultatai:</h4>
                  <ul className="text-[#262B30] list-disc pl-5 space-y-1">
                    <li>30% sumažėjęs atsargų lygis išlaikant tą patį aptarnavimo lygį</li>
                    <li>Pagerėjęs pinigų srautų valdymas</li>
                    <li>Sumažėjusios sandėliavimo išlaidos</li>
                  </ul>
                </div>
                <a href="#" className="text-nexos-purple hover:text-nexos-purple-light transition-colors">Skaityti visą atvejo analizę →</a>
              </div>

              {/* Use Case 4 - Finansų analitika */}
              <div className="bg-white/70 p-8 rounded-xl border border-nexos-purple/20 hover:border-nexos-purple/50 transition-all duration-300 shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-nexos-purple/10 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nexos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#262B30]">Finansų analitika</h3>
                </div>
                <div className="mb-6">
                  <h4 className="text-[#262B30] font-semibold mb-2">Problema:</h4>
                  <p className="text-[#262B30] mb-4">
                    Sudėtingas ir lėtas finansinių ataskaitų rengimas, reikalaujantis daug rankinio darbo.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-[#262B30] font-semibold mb-2">Sprendimas:</h4>
                  <p className="text-[#262B30] mb-4">
                    Automatizuota finansinių ataskaitų sistema su interaktyviais dashboardais.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-[#262B30] font-semibold mb-2">Rezultatai:</h4>
                  <ul className="text-[#262B30] list-disc pl-5 space-y-1">
                    <li>80% sumažėjęs ataskaitų rengimo laikas</li>
                    <li>Pagerėjusi finansinių duomenų kokybė ir tikslumas</li>
                    <li>Greitesnis ir tikslesnis biudžeto planavimas</li>
                  </ul>
                </div>
                <a href="#" className="text-nexos-purple hover:text-nexos-purple-light transition-colors">Skaityti visą atvejo analizę →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-nexos-dark relative">
          <div className="nexos-container">
            <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Esminės duomenų analitikos naudos</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white/70 p-8 rounded-xl border border-nexos-purple/20 hover:border-nexos-purple/50 transition-all duration-300 shadow-md">
                <div className="w-16 h-16 bg-nexos-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nexos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#262B30] text-center">Tikslesni sprendimai</h3>
                <p className="text-[#262B30] text-center">
                  Priimkite aiškius, faktais paremtus sprendimus, užuot spėlioję: duomenų analitika atskleidžia paslėptus dėsningumus
                  ir parodo tikrąją verslo situaciją.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white/70 p-8 rounded-xl border border-nexos-purple/20 hover:border-nexos-purple/50 transition-all duration-300 shadow-md">
                <div className="w-16 h-16 bg-nexos-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nexos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#262B30] text-center">Efektyvesni procesai</h3>
                <p className="text-[#262B30] text-center">
                  Identifikuokite kur švaistomi ištekliai, atraskite procesų „butelio kakliukus" ir sumažinkite veiklos sąnaudas –
                  viską parodo kruopšti duomenų analizė.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white/70 p-8 rounded-xl border border-nexos-purple/20 hover:border-nexos-purple/50 transition-all duration-300 shadow-md">
                <div className="w-16 h-16 bg-nexos-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nexos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#262B30] text-center">Stipresnis verslo pamatas</h3>
                <p className="text-[#262B30] text-center">
                  Tvirti, išanalizuoti duomenys padeda priimti geriau pagrįstus sprendimus, mažinti riziką ir nuolat didinti
                  veiklos pelningumą.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-nexos-dark-light relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[30%] right-[20%] w-[500px] h-[500px] bg-nexos-purple/10 rounded-full blur-[150px] animate-pulse-glow"></div>
            <div className="absolute bottom-[20%] left-[30%] w-[300px] h-[300px] bg-nexos-purple/15 rounded-full blur-[100px] animate-pulse-glow"></div>
          </div>

          <div className="nexos-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="nexos-heading mb-6">
                Pasiruošę <span className="nexos-gradient-text">pradėti</span>?
              </h2>
              <p className="nexos-subheading mx-auto mb-8">
                Susisiekite su mumis ir sužinokite, kaip Roqus Analytics platforma gali padėti jūsų verslui.
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UseCases;
