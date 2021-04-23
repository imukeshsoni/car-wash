import React from "react";
import image from "../../../assets/images/img-2.jpg";
import "./styles.css";
import { Button } from "../../base-components/button/index.js";

function ServicePlan({ name, details, amount, onClick }) {
  return (
    <div className="service--contents">
      <img className="service--image" src={image} alt="not loaded" />
      <h2 className="service--plan--heading">{name}</h2>
      <div className="service--description">
        <p className="">{details}</p>
        <p className="service--amount">amount: {amount}</p>
        <Button
          buttonStyle="btn--outline"
          buttonSize="btn--largs"
          linkTo="/order"
          key="0"
          onClick={onClick}
        >
          Select Plan
        </Button>
      </div>
    </div>
  );
}

export default ServicePlan;
