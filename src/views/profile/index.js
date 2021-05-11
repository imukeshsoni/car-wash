import React, { useState } from "react";
import "./styles.css";
import { selectUser, logout } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Order from "../../components/app-components/orders/index.js";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [selectedButtonIndex, setselectedButtonIndex] = useState(0);

  if (!user) {
    return "Please Log in!";
  }

  return (
    <div className="container">
      <div className="side--nav">
        <ul>
          <li>
            <button onClick={() => setselectedButtonIndex(0)}>
              Your Profile
            </button>
          </li>
          {user.role === "ROLE_USER" && (
            <ul>
              <li>
                <button onClick={() => setselectedButtonIndex(1)}>
                  Your Orders
                </button>
              </li>
              <li>
                <button onClick={() => setselectedButtonIndex(2)}>
                  Your Cars
                </button>
              </li>
            </ul>
          )}

          {user.role === "ROLE_WASHER" && (
            <li>
              <button onClick={() => setselectedButtonIndex(3)}>
                Your Bookings
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="selected--menu">
        {selectedButtonIndex == 1 && <Order />}
      </div>
    </div>
  );
}

export default Profile;
