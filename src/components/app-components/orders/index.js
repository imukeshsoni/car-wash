import React, { useState } from "react";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
import { selectOrders, setOrders } from "../../../redux/orderSlice";
import axios from "axios";
import {
  cancelOrderById,
  updateOrderById,
  getCustomerOrdersById,
  getWasherOrdersById,
} from "../../../apis/urls";

function Order() {
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  const loadOrders = () => {
    if (user.role === "ROLE_WASHER") {
      axios
        .get(getWasherOrdersById + user.email)
        .then((res) => {
          dispatch(setOrders(res.data));
        })
        .catch((err) => alert(err));
    } else if (user.role === "ROLE_USER") {
      axios
        .get(getCustomerOrdersById + user.email)
        .then((res) => {
          dispatch(setOrders(res.data));
        })
        .catch((err) => alert(err));
    }
  };
  if (!orders) {
    loadOrders();
  }

  const handleCancel = (i) => {
    let filterOrder = orders.filter((value, index) => {
      return value.id === i;
    });
    axios
      .put(cancelOrderById + i, filterOrder[0])
      .then((res) => {})
      .catch((err) => console.log(err));

    loadOrders();
  };

  const handleComplete = (i) => {
    let filterBooking = orders.filter((value, index) => {
      return value.id === i;
    });

    const updatedBooking = {
      id: i,
      customerEmail: filterBooking[0].customerEmail,
      washerEmail: filterBooking[0].washerEmail,
      vehicleId: filterBooking[0].vehicleId,
      servicePlan: filterBooking[0].servicePlan,
      date: filterBooking[0].date,
      time: filterBooking[0].time,
      location: filterBooking[0].location,
      orderStatus: "completed",
      paymentStatus: filterBooking[0].paymentStatus,
      paymentMode: filterBooking[0].paymentMode,
      orderAmount: filterBooking[0].orderAmount,
    };

    axios
      .put(updateOrderById + i, updatedBooking)
      .then((res) => {})
      .catch((err) => console.log(err));
    loadOrders();
  };

  if (!orders || orders.length < 1) {
    return <h2>You don't have any bookings!</h2>;
  }
  return (
    <div className="orders--container">
      <h2>Your Bookings</h2>
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
          {user.role === "ROLE_USER" ? <th>Cancel</th> : <th>Complete</th>}
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
                {user.role === "ROLE_USER" && value.orderStatus === "pending" && (
                  <td>
                    <button
                      className="cancel--btn"
                      onClick={() => handleCancel(value.id)}
                    >
                      Cancel
                    </button>
                  </td>
                )}
                {user.role === "ROLE_WASHER" &&
                  value.orderStatus === "pending" && (
                    <td>
                      <button
                        className="cancel--btn"
                        onClick={() => handleComplete(value.id)}
                      >
                        Complete
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
