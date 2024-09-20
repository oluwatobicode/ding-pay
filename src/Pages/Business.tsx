import React from "react";

import Features from "../Ui/bussiness/Features";
import Benefits from "../Ui/bussiness/Benefits";
import HowItWorks from "../Ui/bussiness/HowItWorks";
import FAQ from "../Ui/bussiness/FAQ";
import Footer from "../Ui/bussiness/Footer";
import BussinessHero from "../Ui/bussiness/BussinessHero";
import MobileNav from "../Ui/bussiness/MobileNav";

const Bussiness: React.FC = () => {
  return (
    <>
      <MobileNav />
      <main className="bussiness-main">
        <BussinessHero />
        <Features />
        <Benefits />
        <HowItWorks />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};
export default Bussiness;
