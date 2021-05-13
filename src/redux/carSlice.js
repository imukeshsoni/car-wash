import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
	name: "cars",
	initialState: {
		cars: null,
	},

	reducers: {
		setCars: (state, action) => {
			state.cars = action.payload;
		},
		clearCars: (state) => {
			state.cars = null;
		},
	},
});

export const { setCars, clearCars } = carSlice.actions;

export const selectCars = (state) => state.cars.cars;

export default carSlice.reducer;
