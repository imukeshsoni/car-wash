import React from "react";
import "./styles.css";

function OrderItem(props) {
  return (
    <div className="order--container">
      <img src={props.img} className="order--image" />
      <div>
        <h2 className="order--number">{props.orderNumber}</h2>
        <div className="order--details">
          <div>{props.orderDetails}</div>
          <div>Service Name : {props.servicePlanName}</div>
          <div>Washer : {props.washerId}</div>
          <div>location : {props.location}</div>
          <div>Date : {props.date}</div>
          <div className="order--amount">
            Order amount : {props.orderAmount}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
