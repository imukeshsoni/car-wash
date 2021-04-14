import React from "react";
import CardItem from "./card-item/index.js";
import "./styles.css";
import image1 from "../../../assets/images/img-1.jpg";
import image2 from "../../../assets/images/img-2.jpg";
import image3 from "../../../assets/images/img-home.jpg";
import { useHistory } from "react-router-dom";
function Cards() {
  let history = useHistory();
  const data = [
    {
      imagePath: image1,
      title: "Explore superfast wash services at your doorstep!",
      heading: "Superfast",
      path: "/services",
    },
    {
      imagePath: image2,
      title: "Explore superfast wash services at your doorstep!",
      heading: "Superfast",
      path: "/services",
    },
    {
      imagePath: image3,
      title: "Explore superfast wash services at your doorstep!",
      heading: "Superfast",
      path: "/services",
    },
  ];

  return (
    <div className="cards">
      <h1 className="cards__heading">Check out these services for your car!</h1>
      <div className="cards__container">
        {data.map((value, i) => {
          return (
            <CardItem
              key={i}
              src={value.imagePath}
              text={value.title}
              label={value.heading}
              path={value.path}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
