import React from "react";
import "./styles.css";
import LoggedInError from "../../../views/error/loggedIn";

import { selectUser } from "../../../redux/userSlice";
import { useSelector } from "react-redux";

function UserProfile() {
  let user = useSelector(selectUser);

  if (!user) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  if (!user) {
    return <LoggedInError />;
  }

  return (
    <div>
      <table className="user--details">
        <thead>
          <th colSpan="2">User Details</th>
        </thead>
        <tbody className="details--table">
          <tr>
            <td>User Name : </td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Email : </td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Nick Name : </td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>Phone Number : </td>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserProfile;
