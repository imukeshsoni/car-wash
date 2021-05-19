import React from "react";
import CardItem from "./card-item/index.js";
import "./styles.css";
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
