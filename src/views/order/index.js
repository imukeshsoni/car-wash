import React, { useState, useEffect } from "react";
import Input from "../../components/base-components/input";
import "./styles.css";
import { clickHandler } from "../../views/services/index.js";

function Order(props) {
  useEffect(() => {
    console.log(clickHandler());
  }, []);

  return (
    <div>
      <div className="orders--container">
        <div className="orders-details">
          <h2>Service Plan Name {props.name}</h2>
          <p>Service Details {props.details}</p>
          <h3> Service Amount</h3>
        </div>
        <button>Place your Order</button>
      </div>
    </div>
  );
}

export default Order;
