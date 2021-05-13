import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import carsReducer from "./carSlice.js";
import orderReducer from "./orderSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
    cars: carsReducer,
    orders: orderReducer,
  },
});
