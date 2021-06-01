import React from "react";
import { useHistory } from "react-router";
import "./styles.css";

function Confirmation() {
  let order = JSON.parse(localStorage.getItem("order"));
  const history = useHistory();

  return (
    <div className="confirmation--container">
      <div className="confirmation--logo">
        <i className="fas fa-calendar-check"></i>
      </div>

      <div className="booking--details--table">
        <table>
          <thead>
            <tr>
              <th colSpan="2">Your booking is confirmed!</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Service Plan:</td>
              <td>{order.servicePlan}</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>{order.date}</td>
            </tr>
            <tr>
              <td>Time:</td>
              <td>{order.time}</td>
            </tr>
            <tr>
              <td>Vehicle No:</td>
              <td>{order.vehicleId}</td>
            </tr>
            <tr>
              <td>Amount:</td>
              <td>${order.orderAmount}</td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => {
            localStorage.removeItem("order");
            history.push("/profile");
          }}
        >
          My Bookings
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("order");
            history.push("/");
          }}
        >
          Home Page
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
