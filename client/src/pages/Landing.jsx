import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Landing/Header";
import Hot from "../components/Landing/Hot";
import Authenticity from "../components/Landing/Authenticity";
import MonthlyDeal from "../components/Landing/MonthlyDeal";
import Testimonials from "../components/Landing/Testimonials";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Hot />
      <Authenticity />
      <MonthlyDeal />
      <Testimonials />
    </>
  );
};

export default Landing;
