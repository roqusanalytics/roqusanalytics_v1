import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
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
                Mūsų <span className="nexos-gradient-text">Paslaugos</span>
              </h1>
              <p className="nexos-subheading mx-auto mb-8">
                Roqus Analytics teikia pažangias duomenų analitikos paslaugas, kurios padeda transformuoti
                jūsų verslo duomenis į vertingas įžvalgas ir sprendimus.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-nexos-dark-light relative">
          <div className="nexos-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <div className="bg-nexos-dark p-8 rounded-xl border border-nexos-border hover:border-nexos-purple/50 transition-all duration-300">
                <div className="w-14 h-14 bg-nexos-purple/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-nexos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#262B30]">Power BI Ataskaitų ir Dashboardų Kūrimas</h3>
                <p className="text-[#262B30] mb-4">
                  Interaktyvių ataskatitų ir vizualių dashboardų kūrimas. Didelių duomenų kiekių pavertimas lengvai suprantamais rodikliais, grafikais, diagramomis ar lentelėmis.
                </p>
                <a href="#powerbi-kurimas" className="text-nexos-purple hover:text-nexos-purple-light transition-colors"><span className="nexos-shimmer-text">Sužinoti daugiau</span> →</a>
              </div>

              {/* Service 2 */}
              <div className="bg-nexos-dark p-8 rounded-xl border border-nexos-border hover:border-nexos-purple/50 transition-all duration-300">
                <div className="w-14 h-14 bg-nexos-purple/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-nexos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#262B30]">Power BI Ataskaitų Nuoma ir Priežiūra</h3>
                <p className="text-[#262B30] mb-4">
                  Power BI Ataskaitų Nuoma ir Priežiūra – ataskaitų kūrimas pagal kliento reikalavimus. Periodiškai kas mėnesį peržiūrimos ir koreguojamos ataskaitos atsižvelgiant į veiklos pokyčius.
                </p>
                <a href="#powerbi-nuoma" className="text-nexos-purple hover:text-nexos-purple-light transition-colors"><span className="nexos-shimmer-text">Sužinoti daugiau</span> →</a>
              </div>

              {/* Service 3 */}
              <div className="bg-nexos-dark p-8 rounded-xl border border-nexos-border hover:border-nexos-purple/50 transition-all duration-300">
                <div className="w-14 h-14 bg-nexos-purple/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-nexos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#262B30]">Duomenų Valymas ir ETL Procesai</h3>
                <p className="text-[#262B30] mb-4">
                  Duomenų Valymas ir ETL (Extract, Transform, Load) paslauga, kuri užtikrina, kad klientų duomenys būtų švarūs, konsistentiški ir tinkamai struktūrizuoti analizei.
                </p>
                <a href="#etl-procesai" className="text-nexos-purple hover:text-nexos-purple-light transition-colors"><span className="nexos-shimmer-text">Sužinoti daugiau</span> →</a>
              </div>

              {/* Service 4 */}
              <div className="bg-nexos-dark p-8 rounded-xl border border-nexos-border hover:border-nexos-purple/50 transition-all duration-300">
                <div className="w-14 h-14 bg-nexos-purple/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-nexos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#262B30]">SQL Duomenų Bazių Optimizavimas</h3>
                <p className="text-[#262B30] mb-4">
                  SQL Duomenų Bazių Kūrimas ir Optimizavimas skirtų struktūruotiems Jūsų verslo duomenims saugoti ir analizuoti.
                </p>
                <a href="#sql-optimizavimas" className="text-nexos-purple hover:text-nexos-purple-light transition-colors"><span className="nexos-shimmer-text">Sužinoti daugiau</span> →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-16 bg-nexos-dark relative">
          <div className="nexos-container">
            {/* Power BI Ataskaitų ir Dashboardų Kūrimas */}
            <div id="powerbi-kurimas" className="mb-20">
              <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Power BI Ataskaitų ir Dashboardų Kūrimas</h2>
              <p className="text-[#262B30] mb-6">
                „Power BI Ataskaitų ir Dashboard'ų Kūrimas" – tai paslauga, kurios metu analizuojame jūsų verslo poreikius, sujungiame reikiamus duomenų šaltinius (CRM, ERP, Excel, kt.) ir sukuriame lengvai suprantamas, interaktyvias ataskaitas. Taip užtikriname, kad realiu laiku matysite svarbiausius veiklos rodiklius (KPI), kurių pagrindu galėsite priimti greitesnius ir tikslesnius sprendimus.
              </p>
              <p className="text-[#262B30] mb-6">
                Dirbame projekto principu: išsiaiškiname jūsų poreikius, sujungiame ir apdorojame duomenis, kuriame individualizuotas ataskaitas ir dashboardus, bei apmokome jūsų komandą.
              </p>

              <h3 className="text-xl font-bold mb-4 text-[#262B30]">Veiklos principas:</h3>
              <ul className="list-disc pl-6 mb-6 text-[#262B30] space-y-2">
                <li>Poreikių analizė</li>
                <li>Duomenų sujungimas ir modeliavimas</li>
                <li>Ataskaitų kūrimas</li>
                <li>Testavimas ir korekcijos</li>
                <li>Publikavimas ir mokymai</li>
              </ul>

              <h3 className="text-xl font-bold mb-4 text-[#262B30]">Mūsų ekspertinė sritis:</h3>
              <ul className="list-disc pl-6 mb-6 text-[#262B30] space-y-2">
                <li><span className="text-[#262B30] font-semibold">Pardavimų Analitika:</span> Pardavimų tendencijų, lyginamųjų rodiklių ir pelningumo analizė, padedanti suprasti pardavimų dinamiką.</li>
                <li><span className="text-[#262B30] font-semibold">Pirkimų Analitika:</span> Tiekėjų veiklos, kainų tendencijų ir galimybių optimizuoti išlaidas analizė.</li>
                <li><span className="text-[#262B30] font-semibold">Finansų Analitika:</span> Esminių finansinių rodiklių stebėjimas, nuokrypių analizė ir įmonės augimo bei rizikos vertinimas.</li>
                <li><span className="text-[#262B30] font-semibold">Gamybos Analitika:</span> Gamybos efektyvumo vertinimas, priežasčių analizei ir geriausių praktikų nustatymas.</li>
                <li><span className="text-[#262B30] font-semibold">Atsargų Valdymo Analitika:</span> Atsargų lygio optimizavimas, paklausos prognozavimas ir efektyvus atsargų valdymas pagal vertę.</li>
              </ul>
            </div>

            {/* Power BI Ataskaitų Nuoma ir Priežiūra */}
            <div id="powerbi-nuoma" className="mb-20">
              <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Power BI Ataskaitų Nuoma ir Priežiūra</h2>
              <p className="text-[#262B30] mb-6">
                „Power BI Ataskaitų Nuoma ir Priežiūra" – tai paslauga, kurios metu suteikiame parengtas, verslo poreikius atitinkančias Power BI ataskaitas, o jūs mokate tik fiksuotą mėnesinį mokestį. Mes pasirūpiname viskuo – nuo ataskaitų kūrimo ir duomenų prijungimo iki reguliarios priežiūros bei atnaujinimų. Taip galite naudotis šiuolaikiška analitika, išvengdami didelių pradinės investicijos kaštų.
              </p>

              <h3 className="text-xl font-bold mb-4 text-[#262B30]">Veiklos principas:</h3>
              <ul className="list-disc pl-6 mb-6 text-[#262B30] space-y-2">
                <li>Kliento poreikių įvertinimas</li>
                <li>Ataskaitų sukūrimas</li>
                <li>Nuomos planas</li>
                <li>Nuolatinė priežiūra</li>
              </ul>

              <p className="text-[#262B30]">
                Power BI Ataskaitų Nuoma ir Priežiūra – tai sprendimas, leidžiantis greitai ir paprastai turėti profesionalias, visada atnaujinamas verslo ataskaitas be didelių pradinių investicijų. Suteikiame jums galimybę koncentruotis į strateginę verslo plėtrą, kol mes rūpinamės technine platforma, duomenų atnaujinimais ir tolesniu jūsų analitikos sistemos tobulinimu.
              </p>
            </div>

            {/* Duomenų Valymas ir ETL Procesai */}
            <div id="etl-procesai" className="mb-20">
              <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Duomenų Valymas ir ETL Procesai</h2>
              <p className="text-[#262B30] mb-6">
                Duomenų valymo ir ETL procesų paslauga užtikrina, kad įvairūs jūsų verslo duomenų šaltiniai (CRM, ERP, Excel, DB, internetinės platformos ir t. t.) būtų tinkamai apdoroti ir sujungti į vientisą, patikimą duomenų bazę. Švari ir konsoliduota informacija – tai stabilus pamatas sklandžiai veikiančiai verslo analitikai, automatizuotoms įžvalgoms ir efektyviems sprendimams.
              </p>

              <h3 className="text-xl font-bold mb-4 text-[#262B30]">Veiklos principas:</h3>
              <ul className="list-disc pl-6 mb-6 text-[#262B30] space-y-2">
                <li>Projekto analizė</li>
                <li>Solution (sprendimo) kūrimas</li>
                <li>Diegimas ir automatizavimas</li>
                <li>Nuolatinė priežiūra</li>
              </ul>

              <p className="text-[#262B30]">
                Duomenų valymas ir ETL procesai – tai kiekvieno sėkmingo verslo analitikos projekto branduolys. Tik turėdami patikimus, kokybiškus duomenis galėsite efektyviai matuoti savo veiklos rodiklius, laiku pastebėti galimybes ar išvengti rizikų.
              </p>
            </div>

            {/* SQL Duomenų Bazių Kūrimas ir Optimizavimas */}
            <div id="sql-optimizavimas">
              <h2 className="text-3xl font-bold mb-6 text-[#262B30]">SQL Duomenų Bazių Kūrimas ir Optimizavimas</h2>
              <p className="text-[#262B30] mb-6">
                „SQL Duomenų Bazių Kūrimas ir Optimizavimas" – tai paslauga, kurios metu sukuriame ar perprojektuojame duomenų bazę, kad ji veiktų sklandžiai, greitai ir būtų paprasta plėsti ateityje. Prižiūrime visus procesus nuo architektūros planavimo iki užklausų derinimo (query tuning) ir veikimo stebėsenos – taip užtikriname, kad jūsų verslo informacija būtų prieinama, patikima ir efektyviai naudojama.
              </p>

              <h3 className="text-xl font-bold mb-4 text-[#262B30]">Veiklos principas:</h3>
              <ul className="list-disc pl-6 mb-6 text-[#262B30] space-y-2">
                <li>Analizė ir reikalavimų apibrėžimas</li>
                <li>Struktūros projektavimas</li>
                <li>Diegimas ir pradiniai testai</li>
                <li>Optimizavimas ir stebėsena</li>
                <li>Nuolatinė priežiūra</li>
              </ul>

              <p className="text-[#262B30]">
                SQL Duomenų Bazių Kūrimas ir Optimizavimas – tai patikima investicija į jūsų verslo technologinę bazę. Tinkamai sukurta ir prižiūrima duomenų bazė reiškia greitą duomenų pasiekiamumą, stabilumą, saugumą bei galimybę lanksčiai augti.
              </p>
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
                Susisiekite su mumis ir sužinokite, kaip mūsų paslaugos gali padėti jūsų verslui.
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

export default Services;
