import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
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
                Kaip <span className="nexos-gradient-text">Tai Veikia</span>
              </h1>
              <p className="nexos-subheading mx-auto mb-8">
                Sužinokite, kaip Roqus Analytics platforma veikia ir kaip ji gali padėti jūsų verslui.
              </p>
            </div>
          </div>
        </section>

        {/* General Process Steps */}
        <section className="py-16 bg-nexos-dark-light relative">
          <div className="nexos-container">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Bendras duomenų analitikos procesas</h2>

              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 bg-nexos-purple/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-nexos-purple">1</span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold mb-4 text-[#262B30]">Duomenų rinkimas</h3>
                  <p className="process-description mb-4">
                    Pirmasis žingsnis yra duomenų rinkimas iš įvairių šaltinių. Mūsų platforma gali integruotis su daugybe
                    duomenų šaltinių, įskaitant jūsų esamas sistemas, duomenų bazes, API ir trečiųjų šalių paslaugas.
                  </p>
                  <p className="process-description">
                    Mes užtikriname, kad duomenų rinkimo procesas būtų saugus, efektyvus ir atitiktų visus duomenų
                    apsaugos reikalavimus.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="w-full md:w-1/3 flex justify-center md:order-last">
                  <div className="w-24 h-24 bg-nexos-purple/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-nexos-purple">2</span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold mb-4 text-[#262B30]">Duomenų apdorojimas</h3>
                  <p className="process-description mb-4">
                    Surinkti duomenys yra apdorojami naudojant pažangius algoritmus ir mašininio mokymosi modelius.
                    Šis procesas apima duomenų valymą, transformavimą ir normalizavimą.
                  </p>
                  <p className="process-description">
                    Mūsų platforma automatiškai identifikuoja ir tvarko trūkstamus duomenis, anomalijas ir kitas
                    problemas, užtikrindama aukštą duomenų kokybę.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 bg-nexos-purple/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-nexos-purple">3</span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold mb-4 text-[#262B30]">Analizė ir įžvalgos</h3>
                  <p className="process-description mb-4">
                    Apdoroti duomenys yra analizuojami naudojant statistinius metodus ir mašininio mokymosi algoritmus,
                    siekiant išgauti vertingas įžvalgas ir tendencijas.
                  </p>
                  <p className="process-description">
                    Mūsų platforma gali atlikti įvairias analizes, įskaitant prognozavimą, segmentavimą,
                    anomalijų aptikimą ir koreliacijų analizę.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="w-full md:w-1/3 flex justify-center md:order-last">
                  <div className="w-24 h-24 bg-nexos-purple/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-nexos-purple">4</span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold mb-4 text-[#262B30]">Vizualizacija</h3>
                  <p className="process-description mb-4">
                    Analizės rezultatai yra pateikiami interaktyviose ir informatyviose vizualizacijose,
                    kurios padeda geriau suprasti duomenis ir komunikuoti įžvalgas.
                  </p>
                  <p className="process-description">
                    Mūsų platforma siūlo įvairias vizualizacijos priemones, įskaitant diagramas, grafikus,
                    žemėlapius ir interaktyvias ataskaitas.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 bg-nexos-purple/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-nexos-purple">5</span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold mb-4 text-[#262B30]">Veiksmai ir sprendimai</h3>
                  <p className="process-description mb-4">
                    Galiausiai, įžvalgos yra naudojamos priimti duomenimis pagrįstus sprendimus ir imtis veiksmų,
                    kurie padeda pasiekti jūsų verslo tikslus.
                  </p>
                  <p className="process-description">
                    Mūsų platforma gali automatizuoti tam tikrus veiksmus, pavyzdžiui, siųsti įspėjimus,
                    generuoti ataskaitas ar inicijuoti darbo eigas, remiantis analizės rezultatais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Power BI Ataskaitų Kūrimo Procesas */}
        <section className="py-16 bg-nexos-dark relative">
          <div className="nexos-container">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Power BI Ataskaitų Kūrimo Procesas</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-nexos-dark-light p-8 rounded-xl border border-nexos-border">
                  <div className="w-12 h-12 bg-nexos-purple/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-nexos-purple">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#262B30]">Poreikių analizė</h3>
                  <p className="process-description">
                    Susitinkame su klientu ir nustatome pagrindinius verslo poreikius, tikslus ir rodiklius,
                    kuriuos reikia stebėti. Identifikuojame duomenų šaltinius ir apibrėžiame ataskaitos funkcionalumą.
                  </p>
                </div>

                <div className="bg-nexos-dark-light p-8 rounded-xl border border-nexos-border">
                  <div className="w-12 h-12 bg-nexos-purple/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-nexos-purple">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#262B30]">Duomenų sujungimas</h3>
                  <p className="process-description">
                    Sujungiame skirtingus duomenų šaltinius (Excel, SQL, CRM, ERP ir kt.) į vieningą duomenų modelį.
                    Sukuriame ryšius tarp lentelių ir optimizuojame duomenų struktūrą.
                  </p>
                </div>

                <div className="bg-nexos-dark-light p-8 rounded-xl border border-nexos-border">
                  <div className="w-12 h-12 bg-nexos-purple/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-nexos-purple">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#262B30]">Ataskaitų kūrimas</h3>
                  <p className="process-description">
                    Kuriame interaktyvias ataskaitas su vizualiais elementais: diagramomis, grafikais, lentelėmis ir KPI rodikliais.
                    Pritaikome filtrus, sąveikas ir navigaciją tarp puslapių.
                  </p>
                </div>

                <div className="bg-nexos-dark-light p-8 rounded-xl border border-nexos-border">
                  <div className="w-12 h-12 bg-nexos-purple/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-nexos-purple">4</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#262B30]">Testavimas ir diegimas</h3>
                  <p className="process-description">
                    Testuojame ataskaitas su realiais duomenimis, tikriname veikimą ir tikslumą.
                    Diegiame ataskaitas Power BI tarnyboje ir nustatome prieigos teises.
                  </p>
                </div>

                <div className="bg-nexos-dark-light p-8 rounded-xl border border-nexos-border md:col-span-2">
                  <div className="w-12 h-12 bg-nexos-purple/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-nexos-purple">5</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#262B30]">Mokymai ir palaikymas</h3>
                  <p className="process-description">
                    Apmokome vartotojus, kaip naudotis ataskaitomis, interpretuoti duomenis ir atlikti paprastus pakeitimus.
                    Teikiame nuolatinį palaikymą, atnaujinimus ir tobulinimus pagal kintančius verslo poreikius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ETL Procesų Veikimo Principas */}
        <section className="py-16 bg-nexos-dark-light relative">
          <div className="nexos-container">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#262B30]">ETL Procesų Veikimo Principas</h2>

              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-1/4 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-nexos-purple/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl font-bold text-nexos-purple">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#262B30]">Duomenų šaltinių identifikavimas</h3>
                  </div>
                  <div className="w-full md:w-3/4 bg-nexos-dark p-6 rounded-xl border border-nexos-border">
                    <p className="process-description">
                      Identifikuojame visus reikalingus duomenų šaltinius: duomenų bazes, failus, API, trečiųjų šalių sistemas.
                      Analizuojame duomenų struktūrą, formatą ir kokybę. Nustatome duomenų atnaujinimo dažnumą ir apimtį.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-1/4 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-nexos-purple/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl font-bold text-nexos-purple">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#262B30]">Duomenų ištraukimas (Extract)</h3>
                  </div>
                  <div className="w-full md:w-3/4 bg-nexos-dark p-6 rounded-xl border border-nexos-border">
                    <p className="process-description">
                      Sukuriame saugius ir efektyvius duomenų ištraukimo procesus iš įvairių šaltinių.
                      Optimizuojame užklausas, kad sumažintume apkrovą šaltinio sistemoms.
                      Nustatome inkrementinio duomenų ištraukimo logiką, kad būtų apdorojami tik nauji ar pasikeitę duomenys.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-1/4 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-nexos-purple/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl font-bold text-nexos-purple">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#262B30]">Duomenų transformavimas (Transform)</h3>
                  </div>
                  <div className="w-full md:w-3/4 bg-nexos-dark p-6 rounded-xl border border-nexos-border">
                    <p className="process-description">
                      Valome duomenis: šaliname dublikatus, tvarkome trūkstamas reikšmes, koreguojame klaidas.
                      Transformuojame duomenis: keičiame formatus, skaičiuojame išvestinius rodiklius, agreguojame duomenis.
                      Standartizuojame duomenis: suvienodiname kodavimą, nomenklatūrą, matavimo vienetus.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-1/4 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-nexos-purple/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl font-bold text-nexos-purple">4</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#262B30]">Duomenų užkrovimas (Load)</h3>
                  </div>
                  <div className="w-full md:w-3/4 bg-nexos-dark p-6 rounded-xl border border-nexos-border">
                    <p className="process-description">
                      Užkrauname apdorotus duomenis į tikslinę sistemą: duomenų saugyklą, analitinę duomenų bazę ar Power BI.
                      Optimizuojame užkrovimo procesą, kad būtų efektyviai išnaudojami sistemos resursai.
                      Užtikriname duomenų vientisumą ir nuoseklumą užkrovimo metu.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-1/4 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-nexos-purple/10 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl font-bold text-nexos-purple">5</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#262B30]">Automatizavimas</h3>
                  </div>
                  <div className="w-full md:w-3/4 bg-nexos-dark p-6 rounded-xl border border-nexos-border">
                    <p className="process-description">
                      Automatizuojame visą ETL procesą pagal nustatytą grafiką ar įvykius.
                      Sukuriame stebėsenos ir pranešimų sistemą, kuri informuoja apie klaidas ar problemas.
                      Dokumentuojame procesus ir sukuriame atsarginių kopijų strategiją.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-nexos-dark relative">
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
                Susisiekite su mumis ir sužinokite, kaip mūsų platforma gali padėti jūsų verslui.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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

export default HowItWorks;
