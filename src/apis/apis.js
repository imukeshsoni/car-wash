import React, { useState } from "react";
import axios from "axios";
import { getCustomerOrdersById } from "./urls";

// const adminLoggedIn = false;
// const washerLoggedIn = false;
export function getUserBookings(email) {
  const data = axios
    .get(getCustomerOrdersById + email)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
}
