import React from "react";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
import { selectBookings, setBookings } from "../../../redux/bookingSlice";
import {
  getAllOrders,
  getAllPendingOrders,
  updateOrderById,
  getUserById,
  getAllWashers,
} from "../../../apis/urls";
import axios from "axios";

function Bookings() {
  const bookings = useSelector(selectBookings);
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));

  const allWashers = JSON.parse(localStorage.getItem("allWashers"));

  if (!allWashers) {
    axios.get(getAllWashers).then((res) => {
      localStorage.setItem("allWashers", JSON.stringify(res.data));
    });
  }

  const loadBookings = () => {
    if (user.role === "ROLE_ADMIN") {
      axios
        .get(getAllOrders)
        .then((res) => {
          dispatch(setBookings(res.data));
        })
        .catch((err) => alert(err));
    }
    if (user.role === "ROLE_WASHER") {
      axios
        .get(getAllPendingOrders)
        .then((res) => {
          dispatch(setBookings(res.data));
        })
        .catch((err) => alert(err));
    }
  };

  if (!bookings) {
    loadBookings();
  }

  const handleAssign = (inputId) => {
    const filterBooking = bookings.filter((t, i) => {
      return t.id === inputId;
    });

    let updatedBooking = {
      id: inputId,
      customerEmail: filterBooking[0].customerEmail,
      washerEmail: filterBooking[0].washerEmail,
      vehicleId: filterBooking[0].vehicleId,
      servicePlan: filterBooking[0].servicePlan,
      date: filterBooking[0].date,
      time: filterBooking[0].time,
      location: filterBooking[0].location,
      orderStatus: filterBooking[0].orderStatus,
      paymentStatus: filterBooking[0].paymentStatus,
      paymentMode: filterBooking[0].paymentMode,
      orderAmount: filterBooking[0].orderAmount,
    };

    if (user.role === "ROLE_WASHER") {
      updatedBooking.washerEmail = user.email;
      axios
        .put(updateOrderById + inputId, updatedBooking)
        .then((res) => {
          loadBookings();
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    } else {
      const washerEmailInput = document.getElementById(inputId).value;
      //check if washer is there or not

      if (washerEmailInput == "") return;

      updatedBooking.washerEmail = washerEmailInput;
      axios
        .put(updateOrderById + inputId, updatedBooking)
        .then((res) => {
          loadBookings();
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
  };

  if (!bookings) {
    return <h2>Currently No Bookings are Available!</h2>;
  }
  return (
    <div>
      <h2> Available Bookings</h2>
      <table>
        <thead className="order--table--heading">
          <th>Order Id</th>
          <th>Date</th>
          <th>Time</th>
          <th>Address</th>
          <th>Order Status</th>
          <th>Payment Mode</th>
          <th>Payment Status</th>
          <th>Service Plan</th>
          <th>Vehicle</th>
          <th>Amount</th>
          <th>Washer Contact</th>
          {user.role === "ROLE_WASHER" ? <th>Take</th> : <th>Assign</th>}
        </thead>
        <tbody>
          {bookings.map((value, i) => {
            return (
              <tr className="order--table--row" key={i}>
                <td>{value.id}</td>
                <td>{value.date}</td>
                <td>{value.time}</td>
                <td>{value.location}</td>
                <td>{value.orderStatus}</td>
                <td>{value.paymentMode}</td>
                <td>{value.paymentStatus}</td>
                <td>{value.servicePlan}</td>
                <td>{value.vehicleId}</td>
                <td>{value.orderAmount}</td>
                <td>
                  {!value.washerEmail && user.role === "ROLE_ADMIN" ? (
                    <select id={value.id}>
                      <option value="">Please select a washer</option>
                      {allWashers.map((value2, i) => {
                        return (
                          <option value={value2.email}>{value2.email}</option>
                        );
                      })}
                    </select>
                  ) : (
                    value.washerEmail
                  )}
                </td>
                {value.washerEmail === "" &&
                value.orderStatus == "pending" &&
                user.role === "ROLE_ADMIN" ? (
                  <td>
                    <button
                      className="booking--btn"
                      onClick={() => handleAssign(value.id)}
                    >
                      Assign
                    </button>
                  </td>
                ) : (
                  value.washerEmail === "" && (
                    <td>
                      <button
                        className="booking--btn"
                        onClick={() => handleAssign(value.id)}
                      >
                        Take
                      </button>
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Bookings;
