import React from "react";
import Cards from "../../components/app-components/cards/index.js";
import Footer from "../../components/app-components/footer/index.js";
import { HeroSection } from "../../components/app-components/hero-section/index.js";
import { getAllServicePlans } from "../../apis/urls.js";

import axios from "axios";

function Home() {
  //Getting service plans details from source

  axios
    .get(getAllServicePlans)
    .then((res) => {
      localStorage.setItem("plans", JSON.stringify(res.data));
    })
    .catch((err) => {
      alert(
        "Something went wrong while fetching the plans. Please check logs."
      );
      console.log(err);
    });

  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
