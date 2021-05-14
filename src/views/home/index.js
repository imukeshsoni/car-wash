import React from "react";
import Cards from "../../components/app-components/cards/index.js";
import Footer from "../../components/app-components/footer/index.js";
import { HeroSection } from "../../components/app-components/hero-section/index.js";
import { getAllServicePlans, getVehicleByCustomerId } from "../../apis/urls.js";

import axios from "axios";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    axios
      .all([axios.get(getVehicleByCustomerId + user.email)])
      .then((responseArr) => {
        localStorage.setItem("cars", JSON.stringify(responseArr[0].data));
      })
      .catch((err) => console.log(err));
  }
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
