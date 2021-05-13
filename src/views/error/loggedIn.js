import React from "react";

import image from "../../assets/images/login.png";
function LoggedInError(props) {
  return (
    <div className="container">
      <span>
        <i class="fas fa-sign-in-alt fa-7x" />
      </span>
      <p className="login--text">You are not logged in! Please log In.</p>
    </div>
  );
}

export default LoggedInError;
