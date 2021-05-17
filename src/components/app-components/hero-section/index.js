import { Button } from "../../base-components/button/index.js";
import React from "react";
import "./styles.css";

export function HeroSection() {
  return (
    <div className="hero-container">
      <h1>GET YOUR CAR WASHED</h1>
      <p>Grab exclusive deals</p>
      <div className="hero-btns">
        <Button
          linkTo="/services"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Wash Now!
        </Button>
      </div>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Know More
        </Button>
      </div>
    </div>
  );
}
