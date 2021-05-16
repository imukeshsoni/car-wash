import React from 'react'



import { useSelector, useDispatch } from "react-redux";
import { selectBookings, setBookings } from "../../../redux/bookingSlice";
import { getAllOrders, getAllPendingOrders, updateOrderById } from "../../../apis/urls";
import axios from "axios";


function Bookings() {

	const bookings = useSelector(selectBookings);
	const dispatch = useDispatch();

	const user = JSON.parse(localStorage.getItem("user"));

	if (!bookings && user.role === "ROLE_ADMIN") {
		axios
			.get(getAllOrders)
			.then((res) => {

				dispatch(setBookings(res.data));
			})
			.catch((err) => alert(err));
	}
	if (!bookings && user.role === "ROLE_WASHER") {
		axios
			.get(getAllPendingOrders)
			.then((res) => {
				dispatch(setBookings(res.data));
			})
			.catch((err) => alert(err));
	}

	const handleAssign = (inputId) => {
		const filterBooking = bookings.filter((t, i) => {
			return t.id === inputId;
		})

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
		} else {
			const washerEmailInput = document.getElementById(inputId).value;
			updatedBooking.washerEmail = washerEmailInput;
		}

		axios.put(updateOrderById + inputId, updatedBooking).then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
			alert(err);
		})

		axios
			.get(getAllOrders)
			.then((res) => {
				dispatch(setBookings(res.data));
			})
			.catch((err) => alert(err));

	}

	if (bookings.length < 1) {
		return <h2>Currently No Bookings are Available!</h2>
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
								<td>{
									!value.washerEmail && user.role === "ROLE_ADMIN" ? <input type="email" id={value.id} /> : value.washerEmail

								}</td>
								{value.washerEmail === "" && user.role === "ROLE_ADMIN" ? (
									<td>
										<button
											className=""
											onClick={() => handleAssign(value.id)}
										>
											Assign
                				</button>
									</td>
								) : value.washerEmail === "" && (
									<td>
										<button
											className=""
											onClick={() => handleAssign(value.id)}
										>
											Take
                				</button>
									</td>

								)



								}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	)
}

export default Bookings
