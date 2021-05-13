import React, { useState, useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCars, setCars } from "../../../redux/carSlice";
import axios from "axios";
import { createVehicle } from "../../../apis/urls";

const Cars = () => {
  let cars = useSelector(selectCars);
  const [carName, setcarName] = useState("");
  const [carBrand, setcarBrand] = useState("");
  const [carYear, setcarYear] = useState("");
  const [carNumber, setcarNumber] = useState("");
  const [carType, setcarType] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();

  const handleAddCar = (e) => {
    e.preventDefault();

    const newCar = {
      vehicleNumber: carNumber,
      customerId: user.email,
      name: carName,
      type: carType,
      brand: carBrand,
      manufacturedYear: carYear,
    };

    cars = [...cars, newCar];

    dispatch(setCars(cars));
    localStorage.setItem("cars", JSON.stringify(cars));
    axios
      .post(createVehicle, newCar)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const persistCars = JSON.parse(localStorage.getItem("cars"));

  if (persistCars) {
    cars = persistCars;
  }
  return (
    <div>
      <table className="table">
        <thead className="table--heading">
          <th>Car Brand</th>
          <th>Car Name</th>
          <th>Car Type</th>
          <th>Car Manufactured Year</th>
          <th>Car Number</th>
        </thead>
        <tbody>
          {cars.map((value, i) => {
            return (
              <tr className="table--body" key={i}>
                <td>{value.brand}</td>

                <td>{value.name}</td>
                <td>{value.type}</td>
                <td>{value.manufacturedYear}</td>

                <td>{value.vehicleNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <form className="car--form" onSubmit={(e) => handleAddCar(e)}>
          <input
            type="text"
            value={carBrand}
            placeholder="Enter Car Brand"
            required
            className="car--details"
            onChange={(e) => setcarBrand(e.target.value)}
          />
          <input
            type="text"
            value={carName}
            placeholder="Enter Car Name"
            required
            className="car--details"
            onChange={(e) => setcarName(e.target.value)}
          />

          <input
            type="text"
            value={carType}
            placeholder="Enter Car Type"
            required
            className="car--details"
            onChange={(e) => setcarType(e.target.value)}
          />
          <input
            type="text"
            value={carYear}
            placeholder="Enter Car Year"
            required
            className="car--details"
            onChange={(e) => setcarYear(e.target.value)}
          />
          <input
            type="text"
            value={carNumber}
            placeholder="Enter Car Number"
            required
            className="car--details"
            onChange={(e) => setcarNumber(e.target.value)}
          />
          <input className="submit--btn" type="submit" value="Add Car" />
        </form>
      </div>
    </div>
  );
};

export default Cars;
