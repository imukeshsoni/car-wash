import React, { useState } from "react";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
import { selectOrders, setOrders } from "../../../redux/orderSlice";

function Order() {
  let orders = useSelector(selectOrders);

  const handleCancel = (i) => {
    debugger;
  };

  if (!orders) {
    orders = JSON.parse(localStorage.getItem("orders"));
  }
  if (!orders) {
    return "No orders yet";
  }
  return (
    <div className="orders--container">
      <h2>Your Orders</h2>
      <table>
        <thead className="order--table--heading">
          <th>Order Id</th>
          <th>Date</th>
          <th>Address</th>
          <th>Order Status</th>
          <th>Payment Mode</th>
          <th>Payment Status</th>
          <th>Service Plan</th>
          <th>Vehicle</th>
          <th>Washer Contact</th>
          <th>Cancel Order</th>
        </thead>
        <tbody>
          {orders.map((value, i) => {
            return (
              <tr className="order--table--row" key={i}>
                <td>{value.id}</td>
                <td>{value.date}</td>
                <td>{value.location}</td>
                <td>{value.orderStatus}</td>
                <td>{value.paymentStatus}</td>
                <td>{value.paymentMode}</td>
                <td>{value.servicePlanId}</td>
                <td>{value.vehicleId}</td>
                <td>{value.washerEmail}</td>
                {value.orderStatus == "pending" && (
                  <td>
                    <button
                      className="cancel--btn"
                      onClick={(e) => handleCancel(value.id)}
                    >
                      Cancel
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Order;
