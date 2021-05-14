import React, { useState, useEffect } from "react";
import "./styles.css";
import LoggedInError from "../error/loggedIn";

import { selectUser } from "../../redux/userSlice";
import { setCars } from "../../redux/carSlice";
import { setOrders } from "../../redux/orderSlice";

import { useDispatch, useSelector } from "react-redux";

import Order from "../../components/app-components/orders/index.js";
import UserProfile from "../../components/app-components/user-profile/index.js";
import Cars from "../../components/app-components/user-cars/index.js";
import axios from "axios";
import {
  getVehicleByCustomerId,
  getCustomerOrdersById,
} from "../../apis/urls.js";

function Profile() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  const [selectedButtonIndex, setselectedButtonIndex] = useState(0);

  const handleCars = () => {
    axios
      .get(getVehicleByCustomerId + user.email)
      .then((res) => {
        dispatch(setCars(res.data));
        localStorage.setItem("cars", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
    setselectedButtonIndex(2);
  };

  const handleOrders = () => {
    setselectedButtonIndex(1);
    axios
      .get(getCustomerOrdersById + user.email)
      .then((res) => {
        dispatch(setOrders(res.data));
        localStorage.setItem("orders", JSON.stringify(res.data));
      })
      .catch((err) => alert(err));
  };

  if (!user) {
    return "please Log In";
  }

  return (
    <div className="container">
      <div className="side--nav">
        <ul>
          <li>
            <button
              className="menu--button"
              onClick={() => setselectedButtonIndex(0)}
            >
              Your Profile
            </button>
          </li>
          {user.role === "ROLE_USER" && (
            <ul>
              <li>
                <button className="menu--button" onClick={handleOrders}>
                  Your Orders
                </button>
              </li>
              <li>
                <button className="menu--button" onClick={handleCars}>
                  Your Cars
                </button>
              </li>
            </ul>
          )}

          {user.role === "ROLE_WASHER" && (
            <li>
              <button
                className="menu--button"
                onClick={() => setselectedButtonIndex(3)}
              >
                Your Bookings
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="selected--menu">
        {selectedButtonIndex == 0 && <UserProfile />}

        {selectedButtonIndex == 1 && <Order />}
        {selectedButtonIndex == 2 && <Cars />}
      </div>
    </div>
  );
}

export default Profile;
