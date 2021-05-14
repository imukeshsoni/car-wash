import { createSlice } from "@reduxjs/toolkit";

export const planSlice = createSlice({
  name: "plans",
  initialState: {
    plans: null,
  },

  reducers: {
    setplans: (state, action) => {
      state.plans = action.payload;
    },
    clearplans: (state) => {
      state.plans = null;
    },
  },
});

export const { setPlans, clearPlans } = planSlice.actions;

export const selectplans = (state) => state.plans.plans;

export default planSlice.reducer;
