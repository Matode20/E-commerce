import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  IsAuthenticated: false,
  IsLoading: false,
  User: null,
};

export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:30000/api/auth/register",
      formData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);
export const loginUser = createAsyncThunk("/auth/login", async (formData) => {
  const response = await axios.post(
    "http://localhost:30000/api/auth/login",
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
});

export const checkAuth = createAsyncThunk("/auth/checkAuth", async () => {
  const response = await axios.post(
    "http://localhost:30000/api/auth/check-auth",
    {
      withCredentials: true,
      headers: {
        "Cache-Control": "no-store,no-cache,must-revalidate,proxy-revalidate",
      },
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.IsLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.IsLoading = false;
        state.User = null;
        state.IsAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.IsLoading = false;
        state.User = null;
        state.IsAuthenticated = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.IsLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.IsLoading = false;
        state.User = action.payload.success ? action.payload.user : null;
        state.IsAuthenticated = action.payload ? true : false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.IsLoading = false;
        state.User = null;
        state.IsAuthenticated = false;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
