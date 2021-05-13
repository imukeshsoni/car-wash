import React, { useState } from "react";

import "./styles.css";

function Order() {
  const [status, setstatus] = useState(false);
  let data = [
    {
      id: 1,
      date: "2020-10-2",
      address: "address",
      orderstatus: "pending",
      paymentmode: "Card",
      paymentstatus: "pending",
      serviceplan: "superfast",
      vehicle: "BMW",
      washername: "washer1",
    },
    {
      id: 2,
      date: "2020-10-2",
      address: "address",
      orderstatus: "pending",
      paymentmode: "Card",
      paymentstatus: "pending",
      serviceplan: "superfast",
      vehicle: "BMW",
      washername: "washer1",
    },
    {
      id: 3,
      date: "2020-10-2",
      address: "address",
      orderstatus: "pending",
      paymentmode: "Card",
      paymentstatus: "pending",
      serviceplan: "superfast",
      vehicle: "BMW",
      washername: "washer1",
    },
    {
      id: 4,
      date: "2020-10-2",
      address: "address",
      orderstatus: "pending",
      paymentmode: "Card",
      paymentstatus: "pending",
      serviceplan: "superfast",
      vehicle: "BMW",
      washername: "washer1",
    },
  ];

  const handleCancel = (i) => {
    debugger;
    data[i].orderstatus.replace("pending", "Cancelled");
    debugger;
  };
  return (
    <div className="orders--container">
      orders
      <table>
        <thead>
          <th>Id</th>
          <th>Date</th>
          <th>Address</th>
          <th>Order Status</th>
          <th>Payment Mode</th>
          <th>Payment Status</th>
          <th>Service Plan</th>
          <th>Vehicle</th>
          <th>Washer Name</th>
          <th>Cancel Order</th>
        </thead>
        <tbody>
          {data.map((value, i) => {
            return (
              <tr key={i}>
                <td>{value.id}</td>
                <td>{value.date}</td>
                <td>{value.address}</td>
                <td>{value.orderstatus}</td>
                <td>{value.paymentstatus}</td>
                <td>{value.paymentmode}</td>
                <td>{value.serviceplan}</td>
                <td>{value.vehicle}</td>
                <td>{value.washername}</td>
                <td>
                  <button onClick={(e) => handleCancel(value.id)}>
                    Cancel
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Order;
