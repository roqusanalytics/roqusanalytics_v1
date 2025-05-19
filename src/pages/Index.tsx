
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Features />
        <Workflow />
        <Benefits />
        {/* <UseCases /> */}
        <Testimonials />
        <FAQ />

        {/* CTA Section */}
        <section id="contact" className="py-20 md:py-28 bg-nexos-dark-light relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[30%] right-[20%] w-[500px] h-[500px] bg-nexos-purple/10 rounded-full blur-[150px] animate-pulse-glow"></div>
            <div className="absolute bottom-[20%] left-[30%] w-[300px] h-[300px] bg-nexos-purple/15 rounded-full blur-[100px] animate-pulse-glow"></div>
          </div>

          <div className="nexos-container relative z-10">
            <div className="text-left">
              <h2 className="nexos-heading mb-10">
                Pasiruošę <span className="nexos-gradient-text">pradėti</span>?
              </h2>
              <p className="nexos-subheading mb-8">
                Susisiekite su mumis ir sužinokite, kaip duomenų analitika gali padėti jūsų verslui.
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

export default Index;
