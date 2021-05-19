import React, { useRef, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { createOrder } from "../../apis/urls.js";
import { useHistory } from "react-router";

export default function CheckOut() {
  let orderDetails = JSON.parse(localStorage.getItem("order"));
  const history = useHistory();
  const paypal = useRef();

  const pushOrder = (successMsg, errMsg) => {
    axios
      .post(createOrder, orderDetails)
      .then((response) => {
        alert(successMsg);
        history.push("/profile");
      })
      .catch((err) => {
        alert(errMsg);
        history.push("/services");
      });

    localStorage.removeItem("order");
  };

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: orderDetails.servicePlan,
                amount: {
                  value: 1.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          orderDetails.paymentStatus = "completed";
          orderDetails.paymentStatus = "completed";
          pushOrder(
            "Your payment is successful and Booking is placed!",
            "Something went wrong while adding booking. Refund will be initiated if deducted."
          );
        },
        onError: (err) => {
          pushOrder(
            "Payment is failed. But we have placed your booking with cash mode!",
            "Your payment is unsuccessful. Please try placing a new order."
          );
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  const handleCash = () => {
    orderDetails.paymentMode = "Cash";
    orderDetails.paymentStatus = "pending";

    pushOrder(
      "Your Booking is successfully placed!",
      "Something went wrong while making your booking!"
    );
  };
  if (!orderDetails || orderDetails.length < 1) {
    return <h2>Please select an order first!</h2>;
  }

  return (
    <div className="details--container">
      <div className="inner--container">
        <div className="paypal">
          <button
            id="cash--btn"
            onClick={() => {
              handleCash();
            }}
          >
            Pay with Cash
          </button>
          <div ref={paypal}></div>
        </div>
        <div className="order--details">
          <table>
            <thead>
              <tr>
                <th colSpan="2">Order Details</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Customer Email :</td>
                <td>{orderDetails.customerEmail}</td>
              </tr>
              <tr>
                <td>Service Plan :</td>
                <td>{orderDetails.servicePlan}</td>
              </tr>
              <tr>
                <td>Address :</td>
                <td>{orderDetails.location}</td>
              </tr>
              <tr>
                <td>Service Amount :</td>
                <td>{orderDetails.orderAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
