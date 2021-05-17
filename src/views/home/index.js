import React from "react";
import Cards from "../../components/app-components/cards/index.js";
import Footer from "../../components/app-components/footer/index.js";
import { HeroSection } from "../../components/app-components/hero-section/index.js";
import { getAllServicePlans } from "../../apis/urls.js";


import axios from "axios";

function Home() {

  const plans = JSON.parse(localStorage.getItem("plans"));

  //Getting service plans details from source if plans are not available
  if (!plans) {
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

  }


  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
