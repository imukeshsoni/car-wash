import React, { useState } from "react";
import "./styles.css";

import { useDispatch, useSelector } from "react-redux";

import { setOrders, selectOrders } from "../../redux/orderSlice";

import Order from "../../components/app-components/orders/index.js";
import UserProfile from "../../components/app-components/user-profile/index.js";
import Cars from "../../components/app-components/user-cars/index.js";
import Footer from "../../components/app-components/footer/index.js";
import Bookings from "../../components/app-components/bookings/index.js";
import ManageUser from "../../components/app-components/manage-user/index.js";
import LoggedInError from "../error/loggedIn.js";

import axios from "axios";

import { getCustomerOrdersById, getWasherOrdersById } from "../../apis/urls.js";

function Profile() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const orders = useSelector(selectOrders);
  const [selectedButtonIndex, setselectedButtonIndex] = useState(0);

  if (!user) {
    return <LoggedInError />;
  }

  //if order is null, only then order dispatched
  if (!orders && user.role === "ROLE_USER") {
    axios
      .get(getCustomerOrdersById + user.email)
      .then((res) => {
        dispatch(setOrders(res.data));
      })
      .catch((err) => console.log(err));
  } else if (!orders && user.ROLE === "ROLE_WASHER") {
    axios
      .get(getWasherOrdersById + user.email)
      .then((res) => {
        dispatch(setOrders(res.data));
      })
      .catch((err) => console.log(err));
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

          {user.role !== "ROLE_ADMIN" && (
            <button
              className="menu--button"
              onClick={() => setselectedButtonIndex(1)}
            >
              Your Bookings
            </button>
          )}

          {user.role === "ROLE_USER" && (
            <button
              className="menu--button"
              onClick={() => setselectedButtonIndex(2)}
            >
              Your Cars
            </button>
          )}
          {user.role !== "ROLE_USER" && (
            <button
              className="menu--button"
              onClick={() => setselectedButtonIndex(3)}
            >
              Available Bookings
            </button>
          )}
          {user.role === "ROLE_ADMIN" && (
            <button
              className="menu--button"
              onClick={() => setselectedButtonIndex(4)}
            >
              Manage Users
            </button>
          )}
        </span>
        <div className="selected--menu">
          {selectedButtonIndex === 0 && <UserProfile />}
          {selectedButtonIndex === 1 && <Order />}
          {selectedButtonIndex === 2 && <Cars />}
          {selectedButtonIndex === 3 && <Bookings />}
          {selectedButtonIndex === 4 && <ManageUser />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
