import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Validacijos schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Vardas turi būti bent 2 simbolių ilgio." }),
  email: z.string().email({ message: "Neteisingas el. pašto formatas." }),
  phone: z.string().optional(),
  companyName: z.string().min(2, { message: "Įmonės pavadinimas turi būti bent 2 simbolių ilgio." }),
  companySize: z.string(),
  llmCount: z.string().optional(),
  businessUseCase: z.string().optional(),
  referralSource: z.string(),
});

const ContactSales = () => {
  // Formos valdymas su react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      companySize: "",
      llmCount: "0",
      businessUseCase: "",
      referralSource: "",
    },
  });

  // Formos pateikimo funkcija
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Čia būtų API užklausa į serverį
    alert("Ačiū! Jūsų užklausa sėkmingai išsiųsta. Susisieksime su jumis artimiausiu metu.");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-20 relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[30%] right-[20%] w-[500px] h-[500px] bg-nexos-purple/10 rounded-full blur-[150px] animate-pulse-glow"></div>
            <div className="absolute bottom-[20%] left-[30%] w-[300px] h-[300px] bg-nexos-purple/15 rounded-full blur-[100px] animate-pulse-glow"></div>
          </div>

          <div className="nexos-container relative z-10">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Kairė pusė - Tekstas */}
              <div className="lg:w-1/2">
                <h1 className="nexos-heading mb-6">
                  Viena platforma <span className="nexos-gradient-text">duomenų analitikai</span>, nulis sudėtingumo
                </h1>
                <ul className="space-y-4 mt-8">
                  {[
                    "Sukurkite Power BI ataskaitas pagal jūsų poreikius",
                    "Lengvai keiskite duomenų šaltinius ir modelius",
                    "Išvenkite duomenų nutekėjimo su saugumo garantijomis",
                    "Stebėkite naudojimą ir efektyvumą",
                    "Saugus prieigos valdymas",
                    "Paprastas kaštų valdymas",
                    "Patikimas veikimas",
                    "Duomenų atsarginės kopijos"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#262B30]">
                      <span className="text-nexos-purple-light mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dešinė pusė - Forma */}
              <div className="lg:w-1/2">
                <div className="bg-nexos-dark-light p-8 rounded-xl border border-nexos-dark-lighter shadow-lg">
                  <h2 className="text-2xl font-bold text-[#262B30] mb-6">
                    Užpildykite šią formą — susisieksime, jei galėsime padėti.
                  </h2>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Pilnas vardas */}
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#262B30]">Pilnas vardas*</FormLabel>
                            <FormControl>
                              <Input placeholder="Vardas Pavardė" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* El. paštas */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#262B30]">Įmonės el. pašto adresas*</FormLabel>
                            <FormControl>
                              <Input placeholder="vardas@imone.lt" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Telefono numeris */}
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#262B30]">Telefono numeris</FormLabel>
                            <FormControl>
                              <Input placeholder="+370" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Įmonės pavadinimas */}
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#262B30]">Įmonės pavadinimas*</FormLabel>
                            <FormControl>
                              <Input placeholder="Įmonės pavadinimas" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Įmonės dydis */}
                      <FormField
                        control={form.control}
                        name="companySize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#262B30]">Įmonės dydis*</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Pasirinkite" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1-10">1-10 darbuotojų</SelectItem>
                                <SelectItem value="11-50">11-50 darbuotojų</SelectItem>
                                <SelectItem value="51-200">51-200 darbuotojų</SelectItem>
                                <SelectItem value="201-500">201-500 darbuotojų</SelectItem>
                                <SelectItem value="501+">501+ darbuotojų</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Kiek ataskaitų naudojate */}
                      <FormField
                        control={form.control}
                        name="llmCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#262B30]">Kiek Power BI ataskaitų naudojate?</FormLabel>
                            <FormControl>
                              <Input type="number" min="0" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Verslo poreikiai */}
                      <FormField
                        control={form.control}
                        name="businessUseCase"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#262B30]">Papasakokite apie savo verslo poreikius</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Jūsų žinutė"
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Kaip sužinojote */}
                      <FormField
                        control={form.control}
                        name="referralSource"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#262B30]">Kaip sužinojote apie Roqus Analytics?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Pasirinkite" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="google">Google paieška</SelectItem>
                                <SelectItem value="social">Socialiniai tinklai</SelectItem>
                                <SelectItem value="recommendation">Rekomendacija</SelectItem>
                                <SelectItem value="event">Renginys</SelectItem>
                                <SelectItem value="other">Kita</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Pateikimo mygtukas */}
                      <Button type="submit" className="nexos-button-primary w-full">
                        Pateikti
                      </Button>
                    </form>
                  </Form>

                  <p className="text-xs text-[#262B30] mt-4">
                    * Privalomi laukai
                  </p>
                  <p className="text-xs text-[#262B30] mt-2">
                    Šis puslapis yra apsaugotas reCAPTCHA ir taikoma Google Privatumo politika. Jūsų asmeniniai duomenys bus tvarkomi pagal mūsų Privatumo politiką.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactSales;
