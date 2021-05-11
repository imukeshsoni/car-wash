import React, { useState } from "react";
import axios from "axios";

// const adminLoggedIn = false;
// const washerLoggedIn = false;
export function CustomerLogin(props) {
  const [customer, setcustomer] = useState({});

  const url = "http://localhost:8081/user/get/msony@gmail.com";
  axios
    .get(url)
    .then((res) => {
      debugger;
      console.log(res);
      debugger;
      setcustomer(res);
    })
    .catch((err) => {
      alert(err);
    });

  return { customer };
}
