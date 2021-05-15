import React, { useState } from "react";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
import { selectOrders, setOrders } from "../../../redux/orderSlice";
import axios from "axios";
import { cancelOrderById, getCustomerOrdersById } from "../../../apis/urls";

function Order() {
  let orders = useSelector(selectOrders);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleCancel = (i) => {
    let filterOrder = orders.filter((value, index) => {
      return value.id == i;
    });
    axios
      .put(cancelOrderById + i, filterOrder[0])
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    axios
      .get(getCustomerOrdersById + user.email)
      .then((res) => {
        dispatch(setOrders(res.data));
        localStorage.setItem("orders", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  if (!orders) {
    orders = JSON.parse(localStorage.getItem("orders"));
  }

  return (
    <div className="orders--container">
      <h2>Your Orders</h2>
      <table>
        <thead className="order--table--heading">
          <th>Order Id</th>
          <th>Date</th>
          <th>Time</th>
          <th>Address</th>
          <th>Order Status</th>
          <th>Payment Mode</th>
          <th>Payment Status</th>
          <th>Service Plan</th>
          <th>Vehicle</th>
          <th>Amount</th>
          <th>Washer Contact</th>
          <th>Cancel</th>
        </thead>
        <tbody>
          {orders.map((value, i) => {
            return (
              <tr className="order--table--row" key={i}>
                <td>{value.id}</td>
                <td>{value.date}</td>
                <td>{value.time}</td>
                <td>{value.location}</td>
                <td>{value.orderStatus}</td>
                <td>{value.paymentMode}</td>
                <td>{value.paymentStatus}</td>
                <td>{value.servicePlan}</td>
                <td>{value.vehicleId}</td>
                <td>{value.orderAmount}</td>
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
