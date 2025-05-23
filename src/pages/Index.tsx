import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import TechnologyPartners from "@/components/TechnologyPartners";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ReadyToStart from "@/components/ReadyToStart"; // Importuojame naują komponentą

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Hero2 />
        <TechnologyPartners />
        <Features />
        <Workflow />
        <Benefits />
        {/* <UseCases /> */}
        <Testimonials />
        <FAQ />

        {/* CTA Section */}
        <ReadyToStart /> {/* Naudojame naują komponentą */}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
