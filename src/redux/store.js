import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import carsReducer from "./carSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
    cars: carsReducer
  },
});
