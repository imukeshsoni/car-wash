import React from "react";
import Footer from "../../components/app-components/footer/index.js";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCars, setCars } from "../../redux/carSlice";

function Services() {
  const user = JSON.parse(localStorage.getItem("user"));
  const plans = JSON.parse(localStorage.getItem("plans"));
  const persistCars = JSON.parse(localStorage.getItem("cars"));

  let cars = useSelector(selectCars);
  const dispatch = useDispatch();

  if (!cars) {
    dispatch(setCars(persistCars));
  }
  if (!user) {
    return "Please log in as user";
  }
  return (
    <div>
      <div className="service--container">
        <div className="service--items--container">
          <div className="custom--margin address--line">
            <label htmlFor="address">Address</label>
            <br />
            <input
              type="text"
              placeholder="Enter your address"
              name="address"
            />
          </div>
          <div className="custom--margin timing--line">
            <label htmlFor="date">Wash Date</label>
            <br />
            <input type="date" name="date" />
            <br />

            <label htmlFor="time">Wash Time</label>
            <br />
            <input type="time" name="time" />
            <br />
          </div>
          <div className="custom--margin car--section">
            <label htmlFor="car">Select Your car</label>
            <br />
            <select name="car">
              {cars ? (
                cars.map((value, i) => {
                  return (
                    <option value={value.vehicleNumber} key={i}>
                      {value.name}
                    </option>
                  );
                })
              ) : (
                <option>Please add cars</option>
              )}
            </select>
          </div>

          <div className="custom--margin service--plans">
            <label htmlFor="paymentMode">Select Service Plan</label>
            <br />
            <select name="service">
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
            <select name="paymentMode">
              <option value="online">Online</option>
              <option value="cash">Cash</option>
            </select>

            <br />
            <label>Amount: 0</label>

            <button type="submit" name="submit">
              Book Wash
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
