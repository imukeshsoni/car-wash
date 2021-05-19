import React from "react";
import "./styles.css";
import image from "../../assets/images/error-image.png";

function LoggedInError(props) {
  return (
    <div className="error--container">
      <img src={image} className="error--image" />
      <br />
      <p className="error--text">You are not logged in! Please log In.</p>
    </div>
  );
}

export default LoggedInError;
