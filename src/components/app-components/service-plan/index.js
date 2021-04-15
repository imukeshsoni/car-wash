import React from "react";
import image from "../../../assets/images/img-2.jpg";
import "./styles.css";
import { Button } from "../../base-components/button/index.js";

function ServicePlan(props) {
  return (
    <div className="service--container">
      <h2 className="service--plan--heading">
        {/* {props.heading} */}
        Service Heading
      </h2>

      <div className="service--contents">
        <img className="service--image" src={image} alt="not loaded" />
        <div className="service--description">
          <p className="">
            {/* {props.details} */}
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here'.
          </p>
          <p className="service--amount">amount: 100</p>
          {/* //TODO: Implement link for service view Select Plan */}
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--largs"
            linkTo="/"
            key="0"
          >
            Select Plan
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ServicePlan;
