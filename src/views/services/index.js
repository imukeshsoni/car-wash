import React, { Component } from "react";
import Footer from "../../components/app-components/footer/index.js";
import "./styles.css";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/carSlice";

const data = [
  {
    name: "SuperFast",
    details: `Get your car Super fast, Super clean while you grab yourself a coffee.
        Cleaning of dust and dirts on the body of the car will be taken care by us.`,
    amount: "1000",
  },
  {
    name: "Deep Clean",
    details: `Get your car deeply cleaned under the hood.
        Dust inside the seats of your car will be cleaned using vaccume.
        Oiling will be done in neccessary parts.`,
    amount: "3000",
  },
  {
    name: "Mirror Clean",
    details: `Your car will be cleaned deeply by removing all the dust and dirt inside out.
        Special polishing will be done for the car body which creates a mirror effect when you look at the car.`,
    amount: "5000",
  },
];
export function clickHandler(i) {
  console.log(data[i]);
  return data[i];
}
function Services() {
  const user = JSON.parse(localStorage.getItem("user"));

  let cars = useSelector(selectCars);

  if (!cars) {
    cars = JSON.parse(localStorage.getItem("cars"));
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
            <select name="services">
              <option value="superfast">Superfast</option>
              <option value="deepclean">Deep clean</option>
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
