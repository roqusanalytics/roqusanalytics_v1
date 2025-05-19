import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
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
                Apie <span className="nexos-gradient-text">Mus</span>
              </h1>
              <p className="nexos-subheading mx-auto mb-8">
                Sužinokite daugiau apie Roqus Analytics, mūsų misiją, viziją ir komandą.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-nexos-dark-light relative">
          <div className="nexos-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Apie Roqus Analytics</h2>
                <p className="text-[#262B30] mb-4">
                  Roqus Analytics yra duomenų analitikos įmonė, kuri padeda verslams priimti geresnius sprendimus,
                  paremtus duomenimis. Mes specializuojamės Power BI ataskaitų kūrime, duomenų bazių optimizavime ir
                  ETL procesų automatizavime.
                </p>
                <p className="text-[#262B30] mb-4">
                  Mūsų tikslas – paversti sudėtingus duomenis į aiškias, lengvai suprantamas įžvalgas, kurios padeda
                  verslams augti ir tobulėti. Mes tikime, kad duomenų analitika turėtų būti prieinama visoms įmonėms,
                  nepriklausomai nuo jų dydžio ar techninio išprusimo.
                </p>
                <p className="text-[#262B30]">
                  Dirbame su įvairaus dydžio įmonėmis – nuo smulkių verslų iki didelių korporacijų, padėdami jiems
                  efektyviau išnaudoti savo duomenis ir priimti geresnius, duomenimis pagrįstus sprendimus.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-nexos-dark rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-nexos-purple/20 to-nexos-purple-dark/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-nexos-purple to-nexos-purple-dark flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">R</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-nexos-dark relative">
          <div className="nexos-container">
            <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Mūsų vertybės</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-nexos-dark-light p-8 rounded-xl border border-nexos-border">
                <div className="w-14 h-14 bg-nexos-purple/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-nexos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#262B30]">Kokybė</h3>
                <p className="text-[#262B30]">
                  Mes siekiame aukščiausios kokybės visuose mūsų darbuose. Nuo duomenų valymo iki galutinių ataskaitų,
                  mes kruopščiai tikriname kiekvieną detalę, kad užtikrintume tikslumą ir patikimumą.
                </p>
              </div>

              <div className="bg-nexos-dark-light p-8 rounded-xl border border-nexos-border">
                <div className="w-14 h-14 bg-nexos-purple/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-nexos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#262B30]">Inovacijos</h3>
                <p className="text-[#262B30]">
                  Mes nuolat ieškome naujų būdų, kaip pagerinti mūsų paslaugas ir sprendimus. Sekame naujausias
                  technologijas ir tendencijas, kad galėtume pasiūlyti pažangiausius sprendimus mūsų klientams.
                </p>
              </div>

              <div className="bg-nexos-dark-light p-8 rounded-xl border border-nexos-border">
                <div className="w-14 h-14 bg-nexos-purple/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-nexos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#262B30]">Bendradarbiavimas</h3>
                <p className="text-[#262B30]">
                  Mes tikime, kad geriausių rezultatų pasiekiame dirbdami kartu su mūsų klientais. Glaudžiai
                  bendradarbiaujame su jūsų komanda, kad suprastume jūsų poreikius ir sukurtume sprendimus,
                  kurie atitinka jūsų verslo tikslus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-nexos-dark-light relative">
          <div className="nexos-container">
            <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Kodėl verta rinktis mus?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-nexos-dark p-8 rounded-xl border border-nexos-border">
                <h3 className="text-xl font-bold mb-4 text-[#262B30]">Patirtis ir ekspertizė</h3>
                <p className="text-[#262B30]">
                  Mūsų komandą sudaro patyrę duomenų analitikos specialistai, turintys gilias žinias apie Power BI,
                  SQL, ETL procesus ir duomenų modeliavimą. Mes dirbame su įvairių dydžių ir sektorių įmonėmis,
                  todėl turime platų supratimą apie skirtingus verslo poreikius ir iššūkius.
                </p>
              </div>

              <div className="bg-nexos-dark p-8 rounded-xl border border-nexos-border">
                <h3 className="text-xl font-bold mb-4 text-[#262B30]">Lankstūs bendradarbiavimo modeliai</h3>
                <p className="text-[#262B30]">
                  Siūlome įvairius bendradarbiavimo modelius, nuo vienkartinių projektų iki ilgalaikės partnerystės.
                  Galite rinktis tarp Power BI ataskaitų kūrimo jūsų aplinkai arba ataskaitų nuomos, priklausomai nuo
                  jūsų poreikių ir biudžeto.
                </p>
              </div>

              <div className="bg-nexos-dark p-8 rounded-xl border border-nexos-border">
                <h3 className="text-xl font-bold mb-4 text-[#262B30]">Orientacija į rezultatus</h3>
                <p className="text-[#262B30]">
                  Mūsų tikslas – ne tik sukurti gražias ataskaitas, bet ir užtikrinti, kad jos duotų realią vertę jūsų
                  verslui. Mes padedame jums suprasti ir interpretuoti duomenis, kad galėtumėte priimti geresnius sprendimus
                  ir pasiekti savo verslo tikslus.
                </p>
              </div>

              <div className="bg-nexos-dark p-8 rounded-xl border border-nexos-border">
                <h3 className="text-xl font-bold mb-4 text-[#262B30]">Nuolatinis palaikymas ir mokymai</h3>
                <p className="text-[#262B30]">
                  Mes nesibaigiam ties ataskaitų sukūrimu. Teikiame nuolatinį palaikymą, apmokome jūsų komandą naudotis
                  sukurtomis ataskaitomis ir padedame adaptuoti sprendimus prie kintančių verslo poreikių.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-16 bg-nexos-dark relative">
          <div className="nexos-container">
            <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Mūsų ekspertizė</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#262B30]">Power BI</h3>
                <p className="text-[#262B30] mb-4">
                  Esame Microsoft Power BI ekspertai, turintys gilią patirtį kuriant interaktyvias ataskaitas ir dashboardus.
                  Mūsų komanda gali sujungti duomenis iš įvairių šaltinių, sukurti sudėtingus duomenų modelius ir
                  vizualizuoti informaciją taip, kad ji būtų lengvai suprantama ir naudinga.
                </p>
                <ul className="text-[#262B30] list-disc pl-5 space-y-2">
                  <li>Interaktyvių ataskaitų ir dashboardų kūrimas</li>
                  <li>Duomenų modeliavimas ir DAX formulės</li>
                  <li>Power BI diegimas ir konfigūravimas</li>
                  <li>Power BI ataskaitų nuoma ir priežiūra</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#262B30]">Duomenų inžinerija</h3>
                <p className="text-[#262B30] mb-4">
                  Turime didelę patirtį kuriant ir optimizuojant duomenų srautus. Mūsų komanda gali padėti jums
                  sujungti duomenis iš skirtingų šaltinių, išvalyti ir transformuoti juos, bei sukurti efektyvias
                  duomenų saugyklas.
                </p>
                <ul className="text-[#262B30] list-disc pl-5 space-y-2">
                  <li>ETL procesų kūrimas ir automatizavimas</li>
                  <li>Duomenų valymas ir transformavimas</li>
                  <li>SQL duomenų bazių kūrimas ir optimizavimas</li>
                  <li>Duomenų integravimas iš įvairių šaltinių</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-nexos-dark-light relative">
          <div className="nexos-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Mūsų komanda</h2>
              <p className="text-[#262B30]">
                Mūsų komandą sudaro patyrę duomenų analitikos specialistai, turintys gilias žinias apie Power BI,
                SQL, ETL procesus ir duomenų modeliavimą. Mes esame pasišventę padėti mūsų klientams pasiekti
                sėkmę naudojant duomenų analitiką.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-nexos-dark p-6 rounded-xl border border-nexos-border text-center">
                <div className="w-24 h-24 rounded-full bg-nexos-purple/10 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-nexos-purple text-2xl font-bold">NR</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-[#262B30]">Nerijus Roqus</h3>
                <p className="text-nexos-purple mb-3">Įkūrėjas ir direktorius</p>
                <p className="text-[#262B30] text-sm">
                  Nerijus turi daugiau nei 10 metų patirties duomenų analitikos srityje ir yra Roqus Analytics įkūrėjas.
                  Jis specializuojasi Power BI ataskaitų kūrime ir duomenų modeliavime.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-nexos-dark p-6 rounded-xl border border-nexos-border text-center">
                <div className="w-24 h-24 rounded-full bg-nexos-purple/10 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-nexos-purple text-2xl font-bold">TP</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-[#262B30]">Tomas Petrauskas</h3>
                <p className="text-nexos-purple mb-3">Duomenų inžinierius</p>
                <p className="text-[#262B30] text-sm">
                  Tomas specializuojasi ETL procesų kūrime ir duomenų bazių optimizavime. Jis turi didelę patirtį
                  dirbant su SQL Server, MySQL ir PostgreSQL duomenų bazėmis.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-nexos-dark p-6 rounded-xl border border-nexos-border text-center">
                <div className="w-24 h-24 rounded-full bg-nexos-purple/10 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-nexos-purple text-2xl font-bold">GJ</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-[#262B30]">Gintarė Jankauskaitė</h3>
                <p className="text-nexos-purple mb-3">Klientų sėkmės vadovė</p>
                <p className="text-[#262B30] text-sm">
                  Gintarė dirba su mūsų klientais, padėdama jiems maksimaliai išnaudoti duomenų analitikos sprendimus.
                  Ji taip pat veda mokymus ir teikia palaikymą klientams.
                </p>
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
                Tapkite mūsų <span className="nexos-gradient-text">komandos dalimi</span>
              </h2>
              <p className="nexos-subheading mx-auto mb-8">
                Mes visada ieškome talentingų žmonių, kurie nori prisijungti prie mūsų misijos.
                Peržiūrėkite mūsų atviras pozicijas arba susisiekite su mumis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="nexos-button-primary w-full md:w-auto">
                  Karjeros galimybės
                </Button>
                <Link to="/contact-sales">
                  <Button variant="outline" className="nexos-button-secondary nexos-contact-button w-full md:w-auto">
                    Susisiekti
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

export default About;
