import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: null,
  },

  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    clearOrders: (state) => {
      state.orders = null;
    },
  },
});

export const { setOrders, clearOrders } = orderSlice.actions;

export const selectOrders = (state) => state.orders.orders;

export default orderSlice.reducer;
