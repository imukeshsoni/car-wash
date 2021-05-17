import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
  },

  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    clearUsers: (state) => {
      state.users = null;
    },
  },
});

export const { setUsers, clearUsers } = usersSlice.actions;

export const selectUsers = (state) => state.users.users;

export default usersSlice.reducer;
