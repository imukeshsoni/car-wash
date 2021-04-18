import React from "react";
import img from "../../../assets/images/img-1.jpg";
import OrderItem from "./order-item";
import "./styles.css";

function Order() {
  return (
    <div className="orders--container">
      <OrderItem
        img={img}
        orderNumber="12334"
        orderDetails="Order Details are written here"
        servicePlanName="Superfast"
        washerId="1111"
        location="india"
        date="20-1-2000"
        orderAmount="1000"
      />
      <OrderItem
        img={img}
        orderNumber="12334"
        orderDetails="Order Details are written here"
        servicePlanName="Superfast"
        washerId="1111"
        location="india"
        date="20-1-2000"
        orderAmount="1000"
      />
      <OrderItem
        img={img}
        orderNumber="12334"
        orderDetails="Order Details are written here"
        servicePlanName="Superfast"
        washerId="1111"
        location="india"
        date="20-1-2000"
        orderAmount="1000"
      />
    </div>
  );
}

export default Order;
