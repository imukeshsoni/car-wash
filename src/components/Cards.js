import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import image1 from "../images/img-1.jpg";
import image2 from "../images/img-2.jpg";
import image3 from "../images/img-home.jpg";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <CardItem
          src={image1}
          text="Explore superfast wash services at your doorstep!"
          label="Superfast"
          path="/services"
        />
        <CardItem
          src={image2}
          text="Get a deep clean wash for your car"
          label="Deep Clean"
          path="/services"
        />
        <CardItem
          src={image3}
          text={"Get the dust out of interior and feather covers of seats"}
          label={"Vaccume clean"}
          path={"/services"}
        />
      </div>
    </div>
  );
}

export default Cards;
