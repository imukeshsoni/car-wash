import React, { useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCars, setCars } from "../../../redux/carSlice";
import axios from "axios";
import {
  createVehicle,
  deleteVehicleById,
  getVehicleByCustomerId,
} from "../../../apis/urls";

const Cars = () => {
  const cars = useSelector(selectCars);
  const [carName, setcarName] = useState("");
  const [carBrand, setcarBrand] = useState("");
  const [carYear, setcarYear] = useState("");
  const [carNumber, setcarNumber] = useState("");
  const [carType, setcarType] = useState("");

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));

  const loadCars = () => {
    axios
      .get(getVehicleByCustomerId + user.email)
      .then((res) => {
        dispatch(setCars(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!cars) {
    loadCars();
  }

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

    axios
      .post(createVehicle, newCar)
      .then((res) => loadCars())
      .catch((err) => console.log(err));

    setcarName("");
    setcarBrand("");
    setcarYear("");
    setcarNumber("");
    setcarType("");
  };

  const handleDeleteCar = (carId) => {
    axios
      .delete(deleteVehicleById + carId)
      .then((res) => {
        loadCars();
      })
      .catch((err) => console.log(err));
  };

  function addCarForm() {
    return (
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
    );
  }

  if (!cars || cars.length < 1) {
    return <h2>No cars found. Please add your cars. {addCarForm()}</h2>;
  }
  return (
    <div>
      <table className="car--table">
        <thead>
          <th className="table--heading">Car Brand</th>
          <th className="table--heading">Car Model</th>
          <th className="table--heading">Car Type</th>
          <th className="table--heading">Model Year</th>
          <th className="table--heading">Car Number</th>
          <th className="table--heading">Delete Car</th>
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
                <td>
                  <button onClick={() => handleDeleteCar(value.vehicleNumber)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {addCarForm()}
    </div>
  );
};

export default Cars;
