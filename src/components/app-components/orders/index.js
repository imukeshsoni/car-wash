import React from "react";

import "./styles.css";

function Order() {
  const data = [
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
  ];
  const handleCancel = (i) => {
    debugger;
    data[i].orderstatus = "Cancelled";
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
        {data.map((value, i) => {
          return (
            <tbody>
              <td key={i}>{value.id}</td>
              <td key={i}>{value.date}</td>
              <td key={i}>{value.address}</td>
              <td key={i}>{value.orderstatus}</td>
              <td key={i}>{value.paymentstatus}</td>
              <td key={i}>{value.paymentmode}</td>
              <td key={i}>{value.serviceplan}</td>
              <td key={i}>{value.vehicle}</td>
              <td key={i}>{value.washername}</td>
              <td key={i}>
                <button onClick={(e) => handleCancel(value.id)}>Cancel</button>
              </td>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Order;
