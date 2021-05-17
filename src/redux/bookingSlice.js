import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
	name: "bookings",
	initialState: {
		bookings: null,
	},

	reducers: {
		setBookings: (state, action) => {
			state.bookings = action.payload;
		},
		clearBookings: (state) => {
			state.bookings = null;
		},
	},
});

export const { setBookings, clearBookings } = bookingSlice.actions;

export const selectBookings = (state) => state.bookings.bookings;

export default bookingSlice.reducer;
