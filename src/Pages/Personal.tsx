import React from "react";
import Hero from "../Ui/personal/Hero";
import HowItWorks from "../Ui/personal/HowItWorks";
import Features from "../Ui/personal/Features";
import Benefits from "../Ui/personal/Benefits";
import FAQ from "../Ui/personal/FAQ";
import Footer from "../Ui/personal/Footer";
import MobileNav from "../Ui/personal/MobileNav";

const Personal: React.FC = () => {
  return (
    <>
      <MobileNav />
      <main className="">
        <Hero />
        <Features />
        <Benefits />
        <HowItWorks />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};
export default Personal;
