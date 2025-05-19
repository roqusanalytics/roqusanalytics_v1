import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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
                Dažnai Užduodami <span className="nexos-gradient-text">Klausimai</span>
              </h1>
              <p className="nexos-subheading mx-auto mb-8">
                Atsakymai į dažniausiai užduodamus klausimus apie Roqus Analytics platformą ir paslaugas.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-nexos-dark-light relative">
          <div className="nexos-container relative z-10">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {/* Bendrieji klausimai */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Bendrieji klausimai</h2>

                  <AccordionItem value="item-1" className="bg-white/90 backdrop-blur-sm border border-nexos-purple/20 rounded-lg overflow-hidden shadow-sm hover:shadow-nexos-purple/20 transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 text-nexos-purple hover:text-nexos-purple-light transition-colors">
                      Kas yra Roqus Analytics?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#262B30]">
                      Roqus Analytics yra duomenų analitikos įmonė, kuri padeda verslams priimti geresnius sprendimus,
                      paremtus duomenimis. Mes specializuojamės Power BI ataskaitų kūrime, duomenų bazių optimizavime ir
                      ETL procesų automatizavime. Mūsų tikslas – paversti sudėtingus duomenis į aiškias, lengvai suprantamas
                      įžvalgas, kurios padeda verslams augti ir tobulėti.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-white/90 backdrop-blur-sm border border-nexos-purple/20 rounded-lg overflow-hidden shadow-sm hover:shadow-nexos-purple/20 transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 text-nexos-purple hover:text-nexos-purple-light transition-colors">
                      Kaip Roqus Analytics gali padėti mano verslui?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#262B30]">
                      Mūsų paslaugos padeda verslams:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Vizualizuoti verslo duomenis interaktyviose Power BI ataskaitose</li>
                        <li>Automatizuoti duomenų rinkimą ir apdorojimą (ETL procesus)</li>
                        <li>Optimizuoti duomenų bazes geresniam veikimui</li>
                        <li>Priimti duomenimis pagrįstus sprendimus</li>
                        <li>Sutaupyti laiką ir išteklius, kurie anksčiau buvo skiriami rankiniam ataskaitų rengimui</li>
                      </ul>
                      Mūsų sprendimai pritaikomi įvairaus dydžio ir sektorių įmonėms – nuo mažų verslų iki didelių korporacijų.
                    </AccordionContent>
                  </AccordionItem>
                </div>

                {/* Power BI klausimai */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Power BI klausimai</h2>

                  <AccordionItem value="item-3" className="bg-white/90 backdrop-blur-sm border border-nexos-purple/20 rounded-lg overflow-hidden shadow-sm hover:shadow-nexos-purple/20 transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 text-nexos-purple hover:text-nexos-purple-light transition-colors">
                      Kas yra Power BI ir kodėl turėčiau jį naudoti?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#262B30]">
                      Power BI yra Microsoft verslo analitikos įrankis, leidžiantis vizualizuoti duomenis interaktyviose ataskaitose ir dashboarduose.
                      Jis padeda paversti įvairius duomenų šaltinius į aiškias vizualizacijas ir įžvalgas.
                      <br /><br />
                      Jums verta naudoti Power BI, nes:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Jis sujungia duomenis iš skirtingų šaltinių į vieną vietą</li>
                        <li>Leidžia kurti interaktyvias ataskaitas, kurias galima filtruoti realiu laiku</li>
                        <li>Suteikia galimybę sekti svarbiausius verslo rodiklius (KPI)</li>
                        <li>Padeda atskleisti tendencijas ir modelius, kurie kitaip liktų nepastebėti</li>
                        <li>Leidžia dalintis įžvalgomis su komanda ir suinteresuotomis šalimis</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-white/90 backdrop-blur-sm border border-nexos-purple/20 rounded-lg overflow-hidden shadow-sm hover:shadow-nexos-purple/20 transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 text-nexos-purple hover:text-nexos-purple-light transition-colors">
                      Ar man reikia turėti Power BI licenciją, kad naudočiausi jūsų paslaugomis?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#262B30]">
                      Tai priklauso nuo jūsų pasirinkto bendradarbiavimo modelio:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><span className="font-semibold">Power BI ataskaitų nuoma:</span> Nereikia jokių licencijų – mes pasirūpiname visais techniniais aspektais.</li>
                        <li><span className="font-semibold">Power BI ataskaitų kūrimas jūsų aplinkai:</span> Jums reikės Power BI Pro licencijų (apie 10 EUR/mėn. vienam vartotojui) arba Premium licencijos (kaina priklauso nuo įmonės dydžio).</li>
                      </ul>
                      Mes galime patarti, koks licencijavimo modelis būtų optimaliausias jūsų verslui, atsižvelgiant į vartotojų skaičių ir poreikius.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-white/90 backdrop-blur-sm border border-nexos-purple/20 rounded-lg overflow-hidden shadow-sm hover:shadow-nexos-purple/20 transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 text-nexos-purple hover:text-nexos-purple-light transition-colors">
                      Kuo skiriasi Power BI ataskaitų kūrimas nuo ataskaitų nuomos?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#262B30]">
                      <p className="mb-2"><span className="font-semibold">Power BI ataskaitų kūrimas:</span></p>
                      <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Vienkartinis projektas su fiksuota kaina</li>
                        <li>Ataskaitos publikuojamos jūsų Power BI aplinkoje</li>
                        <li>Jūs tampate ataskaitų savininku</li>
                        <li>Reikalingos Power BI licencijos</li>
                        <li>Papildomi pakeitimai ar priežiūra – už papildomą mokestį</li>
                      </ul>

                      <p className="mb-2"><span className="font-semibold">Power BI ataskaitų nuoma:</span></p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Mėnesinis mokestis be didelės pradinės investicijos</li>
                        <li>Ataskaitos talpinamos mūsų infrastruktūroje</li>
                        <li>Mes prižiūrime ir atnaujiname ataskaitas</li>
                        <li>Nereikia jokių licencijų – viskas įskaičiuota į nuomos kainą</li>
                        <li>Reguliarūs atnaujinimai ir pakeitimai įtraukti į kainą</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </div>

                {/* Techniniai klausimai */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Techniniai klausimai</h2>

                  <AccordionItem value="item-6" className="bg-white/90 backdrop-blur-sm border border-nexos-purple/20 rounded-lg overflow-hidden shadow-sm hover:shadow-nexos-purple/20 transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 text-nexos-purple hover:text-nexos-purple-light transition-colors">
                      Kokius duomenų šaltinius galite sujungti į Power BI ataskaitas?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#262B30]">
                      Power BI gali jungtis prie daugybės duomenų šaltinių, įskaitant:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Excel failai ir CSV duomenys</li>
                        <li>SQL duomenų bazės (Microsoft SQL Server, MySQL, PostgreSQL ir kt.)</li>
                        <li>Verslo sistemos (CRM, ERP, buhalterinės programos)</li>
                        <li>Debesų paslaugos (Salesforce, Dynamics 365, SharePoint)</li>
                        <li>Web servisai ir API</li>
                        <li>Socialinių tinklų duomenys</li>
                        <li>Ir daugelis kitų</li>
                      </ul>
                      Jei turite specifinį duomenų šaltinį, kurio nėra šiame sąraše, susisiekite su mumis – greičiausiai galėsime rasti sprendimą.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="bg-white/90 backdrop-blur-sm border border-nexos-purple/20 rounded-lg overflow-hidden shadow-sm hover:shadow-nexos-purple/20 transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 text-nexos-purple hover:text-nexos-purple-light transition-colors">
                      Kas yra ETL procesai ir kodėl jie svarbūs?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#262B30]">
                      ETL reiškia Extract (ištraukti), Transform (transformuoti) ir Load (užkrauti) – tai procesas, kurio metu:
                      <ol className="list-decimal pl-5 mt-2 space-y-1">
                        <li>Duomenys ištraukiami iš įvairių šaltinių</li>
                        <li>Transformuojami (valomi, formatuojami, agreguojami)</li>
                        <li>Užkraunami į tikslinę sistemą (duomenų saugyklą, analitinę platformą)</li>
                      </ol>
                      <br />
                      ETL procesai yra svarbūs, nes:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Užtikrina duomenų kokybę ir nuoseklumą</li>
                        <li>Sujungia duomenis iš skirtingų sistemų</li>
                        <li>Paruošia duomenis analizei</li>
                        <li>Automatizuoja rutininius duomenų apdorojimo darbus</li>
                        <li>Sumažina klaidų tikimybę, lyginant su rankiniu duomenų apdorojimu</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="bg-white/90 backdrop-blur-sm border border-nexos-purple/20 rounded-lg overflow-hidden shadow-sm hover:shadow-nexos-purple/20 transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 text-nexos-purple hover:text-nexos-purple-light transition-colors">
                      Ar mano duomenys bus saugūs?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#262B30]">
                      Taip, duomenų saugumas yra mūsų prioritetas:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Dirbame pagal griežtus duomenų apsaugos standartus ir BDAR reikalavimus</li>
                        <li>Naudojame šifravimą duomenų perdavimui ir saugojimui</li>
                        <li>Taikome prieigos kontrolės mechanizmus</li>
                        <li>Pasirašome konfidencialumo sutartis (NDA)</li>
                        <li>Jei naudojate mūsų ataskaitų nuomos paslaugą, duomenys saugomi saugioje Microsoft Azure infrastruktūroje ES teritorijoje</li>
                        <li>Galime dirbti ir jūsų infrastruktūroje, jei to reikalauja jūsų saugumo politika</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </div>

                {/* Bendradarbiavimo klausimai */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-[#262B30]">Bendradarbiavimo klausimai</h2>

                  <AccordionItem value="item-9" className="bg-white/90 backdrop-blur-sm border border-nexos-purple/20 rounded-lg overflow-hidden shadow-sm hover:shadow-nexos-purple/20 transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 text-nexos-purple hover:text-nexos-purple-light transition-colors">
                      Kiek kainuoja jūsų paslaugos?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#262B30]">
                      Mūsų kainodara priklauso nuo projekto apimties ir sudėtingumo:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><span className="font-semibold">Power BI ataskaitų kūrimas:</span> Nuo 500 EUR už paprastą ataskaitą iki 3000+ EUR už sudėtingas, daugialypes ataskaitas su sudėtingais duomenų modeliais.</li>
                        <li><span className="font-semibold">Power BI ataskaitų nuoma:</span> Nuo 100 EUR/mėn., priklausomai nuo ataskaitų skaičiaus ir sudėtingumo.</li>
                        <li><span className="font-semibold">ETL procesų kūrimas:</span> Nuo 800 EUR, priklausomai nuo duomenų šaltinių skaičiaus ir transformacijų sudėtingumo.</li>
                        <li><span className="font-semibold">SQL duomenų bazių optimizavimas:</span> Nuo 500 EUR, priklausomai nuo duomenų bazės dydžio ir sudėtingumo.</li>
                      </ul>
                      <br />
                      Kiekvienam klientui parengiame individualų pasiūlymą, atsižvelgdami į specifinius poreikius. Susisiekite su mumis, ir mes paruošime detalų kainų pasiūlymą.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" className="bg-white/90 backdrop-blur-sm border border-nexos-purple/20 rounded-lg overflow-hidden shadow-sm hover:shadow-nexos-purple/20 transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 text-nexos-purple hover:text-nexos-purple-light transition-colors">
                      Kiek laiko užtrunka projekto įgyvendinimas?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#262B30]">
                      Projekto trukmė priklauso nuo jo apimties ir sudėtingumo:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><span className="font-semibold">Paprastos Power BI ataskaitos:</span> 1-2 savaitės</li>
                        <li><span className="font-semibold">Sudėtingos, daugialypės ataskaitos:</span> 3-6 savaitės</li>
                        <li><span className="font-semibold">ETL procesų kūrimas:</span> 2-8 savaitės</li>
                        <li><span className="font-semibold">SQL duomenų bazių optimizavimas:</span> 1-4 savaitės</li>
                      </ul>
                      <br />
                      Projekto pradžioje sutariame dėl aiškaus terminų plano ir reguliariai informuojame apie projekto eigą.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-11" className="bg-white/90 backdrop-blur-sm border border-nexos-purple/20 rounded-lg overflow-hidden shadow-sm hover:shadow-nexos-purple/20 transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 text-nexos-purple hover:text-nexos-purple-light transition-colors">
                      Ar teikiate mokymus ir palaikymą?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#262B30]">
                      Taip, mes teikiame:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><span className="font-semibold">Mokymus:</span> Kiekvieno projekto pabaigoje apmokome jūsų komandą naudotis sukurtomis ataskaitomis. Taip pat siūlome išplėstinius Power BI mokymus už papildomą mokestį.</li>
                        <li><span className="font-semibold">Dokumentaciją:</span> Pateikiame išsamią dokumentaciją apie sukurtus sprendimus.</li>
                        <li><span className="font-semibold">Palaikymą:</span> Siūlome įvairius palaikymo planus, nuo bazinio (reagavimas per 48 val.) iki premium (reagavimas per 4 val., įskaitant savaitgalius).</li>
                        <li><span className="font-semibold">Atnaujinimus:</span> Jei naudojate mūsų ataskaitų nuomos paslaugą, reguliarūs atnaujinimai ir pakeitimai yra įtraukti į mėnesinį mokestį.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </Accordion>
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
                Turite daugiau <span className="nexos-gradient-text">klausimų</span>?
              </h2>
              <p className="nexos-subheading mx-auto mb-8">
                Jei neradote atsakymo į savo klausimą, susisiekite su mumis ir mūsų komanda mielai jums padės.
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

export default FAQ;
