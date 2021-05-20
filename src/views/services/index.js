import React, { useState } from "react";
import Footer from "../../components/app-components/footer/index.js";

import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCars, setCars } from "../../redux/carSlice";
import axios from "axios";
import { createOrder, getVehicleByCustomerId } from "../../apis/urls";
import { useHistory } from "react-router";
import LoggedInError from "../error/loggedIn.js";

function Services() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const plans = JSON.parse(localStorage.getItem("plans"));

  const [location, setlocation] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [vehicleId, setvehicleId] = useState("");
  const [servicePlanName, setservicePlan] = useState("");
  const [paymentMode, setpaymentMode] = useState("Cash");
  const [paymentStatus, setpaymentStatus] = useState("pending");
  const [amount, setamount] = useState(0);

  const cars = useSelector(selectCars);

  const dispatch = useDispatch();

  const [errorMessage, seterrorMessage] = useState("");
  if (!user) {
    return <LoggedInError />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (servicePlanName === "") {
      seterrorMessage("Please select plan to coninue");
      return;
    } else if (vehicleId === "") {
      seterrorMessage("please select car for wash");
      return;
    }

    const orderData = {
      customerEmail: user.email,
      washerEmail: "",
      vehicleId: vehicleId,
      servicePlan: servicePlanName,
      date: date,
      time: time,
      location: location,
      orderStatus: "pending",
      paymentStatus: paymentStatus,
      paymentMode: paymentMode,
      orderAmount: amount,
    };

    localStorage.setItem("order", JSON.stringify(orderData));
    debugger;
    history.push("/checkout");
  };

  if (!cars) {
    axios
      .get(getVehicleByCustomerId + user.email)
      .then((res) => {
        dispatch(setCars(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="service--container">
        <div className="service--items--container">
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="custom--margin address--line">
              <label htmlFor="address">Address</label>
              <br />
              <input
                type="text"
                placeholder="Enter your address"
                name="address"
                onChange={(e) => {
                  setlocation(e.target.value);
                }}
                required
              />
            </div>
            <div className="custom--margin timing--line">
              <label htmlFor="date">Wash Date</label>
              <br />
              <input
                type="date"
                name="date"
                required
                onChange={(e) => {
                  setdate(e.target.value);
                }}
              />
              <br />

              <label htmlFor="time">Wash Time</label>
              <br />
              <input
                required
                type="time"
                name="time"
                onChange={(e) => {
                  settime(e.target.value);
                }}
              />
              <br />
            </div>
            <div className="custom--margin car--section">
              <label htmlFor="car">Select Your car</label>
              <br />
              <select
                name="car"
                onChange={(e) => {
                  setvehicleId(e.target.value);
                }}
              >
                <option selected value="">
                  Please Select Your Car
                </option>
                {cars &&
                  cars.map((value, i) => {
                    return (
                      <option value={value.vehicleNumber} key={i}>
                        {value.brand +
                          " : " +
                          value.name +
                          " - " +
                          value.vehicleNumber}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="custom--margin service--plans">
              <label htmlFor="paymentMode">Select Service Plan</label>
              <br />
              <select
                id="service"
                onChange={(e) => {
                  const filterPlan = plans.filter((t, i) => {
                    return t.serviceId == e.target.value;
                  });
                  if (filterPlan.length > 0) {
                    const selectedPlan = filterPlan[0];
                    setamount(selectedPlan.serviceAmount);
                    setservicePlan(selectedPlan.serviceName);
                  }
                }}
              >
                <option value="notSelected" selected>
                  Please Select plan
                </option>
                {plans.map((value, i) => {
                  return (
                    <option key={i} value={value.serviceId}>
                      {value.serviceName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="custom--margin payment--section">
              <label htmlFor="paymentMode">Payment Mode</label>
              <br />
              <select
                name="paymentMode"
                onChange={(e) => {
                  setpaymentMode(e.target.value);
                }}
              >
                <option value="cash" selected>
                  Cash
                </option>
                <option value="online">Online</option>
              </select>
              <br />
              <button className="service--btn" type="submit" name="submit">
                Review & Book Wash
              </button>
              <label className="custom--margin">
                Amount:{" "}
                {servicePlanName == "notSelected"
                  ? "Please Select Plan"
                  : amount}
              </label>
            </div>
          </form>
          <p className="warning">{errorMessage}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
