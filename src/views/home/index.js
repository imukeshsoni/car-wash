import React from "react";
import Cards from "../../components/app-components/cards/index.js";
import Footer from "../../components/app-components/footer/index.js";
import { HeroSection } from "../../components/app-components/hero-section/index.js";
function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
