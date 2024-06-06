import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import HowItWorks from "./components/HowItWorks";
import ServicesMenu from "./components/ServicesMenu";
import AboutUs from "./components/AboutUs";
import WhatPeopleSays from "./components/WhatPeopleSays";
import Footer from "./components/Footer";
import Bohio from "./components/Bohio";
import ScrollButton from "./components/ScrollButton";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesMenu />
      <HowItWorks />
      <WhatPeopleSays />
      <Bohio />
      <AboutUs />
      <Sponsors />
      <Footer />
      <ScrollButton />
    </>
  );
}

export default App;
