import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import image1 from "../images/img-1.jpg";
import image2 from "../images/img-2.jpg";
import image3 from "../images/img-home.jpg";
function Cards() {
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
  const onclick = (selectedIndex) => {
    const path = data[selectedIndex].path;
  };

  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        {data.map((value, i) => {
          return (
            <CardItem
              key={i}
              src={value.imagePath}
              text={value.title}
              label={value.heading}
              onclick={() => {
                onclick(i);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
