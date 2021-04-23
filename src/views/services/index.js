import React, { Component } from "react";
import Footer from "../../components/app-components/footer/index.js";
import ServicePlan from "../../components/app-components/service-plan/index.js";
import "./styles.css";

const data = [
  {
    name: "SuperFast",
    details: `Get your car Super fast, Super clean while you grab yourself a coffee.
        Cleaning of dust and dirts on the body of the car will be taken care by us.`,
    amount: "1000",
  },
  {
    name: "Deep Clean",
    details: `Get your car deeply cleaned under the hood.
        Dust inside the seats of your car will be cleaned using vaccume.
        Oiling will be done in neccessary parts.`,
    amount: "3000",
  },
  {
    name: "Mirror Clean",
    details: `Your car will be cleaned deeply by removing all the dust and dirt inside out.
        Special polishing will be done for the car body which creates a mirror effect when you look at the car.`,
    amount: "5000",
  },
];
export function clickHandler(i) {
  console.log(i);
  return data[i];
}
function Services() {
  return (
    <div>
      <div className="service--container">
        {data.map((value, i) => {
          return (
            <ServicePlan
              key={i}
              name={value.name}
              details={value.details}
              amount={value.amount}
              onClick={clickHandler(i)}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Services;
