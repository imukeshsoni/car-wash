import React from "react";
import CardItem from "./card-item/index.js";
import "./styles.css";
import image1 from "../../../assets/images/superfast.jpeg";
import image2 from "../../../assets/images/img-2.jpg";
import image3 from "../../../assets/images/img-home.jpg";
function Cards() {
  const plans = JSON.parse(localStorage.getItem("plans"));

  if (!plans) {
    return "No plans available right now";
  }
  return (
    <div className="cards">
      <h1 className="cards__heading">Check out these services for your car!</h1>
      <div className="cards__container">
        {plans.map((value, i) => {
          return (
            <CardItem
              key={i}
              src={value.imagePath}
              text={value.serviceDetails}
              label={value.serviceName}
              amount={value.serviceAmount}
              path="/services"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
