import React, { useState } from "react";
import "./styles.css";

import { useDispatch, useSelector } from "react-redux";
import { setCars } from "../../redux/carSlice";
import { setOrders, selectOrders } from "../../redux/orderSlice";

import Order from "../../components/app-components/orders/index.js";
import UserProfile from "../../components/app-components/user-profile/index.js";
import Cars from "../../components/app-components/user-cars/index.js";
import Footer from "../../components/app-components/footer/index.js";

import axios from "axios";

import {
  getVehicleByCustomerId,
  getCustomerOrdersById,
  getWasherOrdersById,
} from "../../apis/urls.js";

function Profile() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  let orders = useSelector(selectOrders);

  if (!orders) {
    orders = JSON.parse(localStorage.getItem("orders"));
  }

  const [selectedButtonIndex, setselectedButtonIndex] = useState(0);

  const handleCars = () => {
    setselectedButtonIndex(2);
    axios
      .get(getVehicleByCustomerId + user.email)
      .then((res) => {
        dispatch(setCars(res.data));
        localStorage.setItem("cars", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOrders = () => {
    setselectedButtonIndex(1);

    if (user.role === "ROLE_USER") {
      axios
        .get(getCustomerOrdersById + user.email)
        .then((res) => {
          dispatch(setOrders(res.data));
          localStorage.setItem("orders", JSON.stringify(res.data));
        })
        .catch((err) => alert(err));
    } else if (user.ROLE === "ROLE_WASHER") {
      axios
        .get(getWasherOrdersById + user.email)
        .then((res) => {
          dispatch(setOrders(res.data));
          localStorage.setItem("orders", JSON.stringify(res.data));
        })
        .catch((err) => alert(err));
    }
  };

  if (!user) {
    return "please Log In";
  }

  return (
    <div>
      <div className="container">
        <span className="side--nav">
          <button
            className="menu--button"
            onClick={() => setselectedButtonIndex(0)}
          >
            Your Profile
          </button>

          <button className="menu--button" onClick={handleOrders}>
            Your Bookings
          </button>

          {user.role === "ROLE_USER" && (
            <button className="menu--button" onClick={handleCars}>
              Your Cars
            </button>
          )}
        </span>
        <div className="selected--menu">
          {selectedButtonIndex === 0 && <UserProfile />}
          {selectedButtonIndex === 1 && <Order />}
          {selectedButtonIndex === 2 && <Cars />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
