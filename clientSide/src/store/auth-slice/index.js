import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IsAuthenticated: false,
  IsLoading: false,
  User: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
});





export const { setUser } = authSlice.actions;
export default authSlice.reducer;
