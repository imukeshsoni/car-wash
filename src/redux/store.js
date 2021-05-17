import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import carsReducer from "./carSlice.js";
import orderReducer from "./orderSlice.js";
import plansReducer from "./planSlice.js";
import bookingReducer from "./bookingSlice.js";
import usersReducer from "./usersSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
    cars: carsReducer,
    orders: orderReducer,
    plans: plansReducer,
    bookings: bookingReducer,
    users: usersReducer,
  },
});
