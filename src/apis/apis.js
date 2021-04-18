import React, { useState } from "react";
import axios from "axios";

// const adminLoggedIn = false;
// const washerLoggedIn = false;
export function CustomerLogin(props) {
  const [customerLoggedIn, setcustomerLoggedIn] = useState(false);
  const [customer, setcustomer] = useState({});

  const url = "https://localhost:8081/customer";
  axios
    .get(url + props.customerId)
    .then((res) => {
      setcustomerLoggedIn(true);
      setcustomer(res);
    })
    .catch((err) => {
      alert(err);
    });

  return { customer, customerLoggedIn };
}
