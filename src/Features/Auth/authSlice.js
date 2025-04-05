import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../components/services/AxiosInstance";


export const login = createAsyncThunk(
  "auth/login",
  async (mobileNumber, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/send-otp", { mobileNumber });
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ mobileNumber, otp }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/login", { mobileNumber, otp });
      return response.data;
    } catch (error) {
      console.error("OTP Verification Error:", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
const initialState = {
  loading: false,
  error: null,
  token: localStorage.getItem("token") || null,
  otpSent: false,
  otpDetails: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.otpSent = false;
      state.otpDetails = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.otpSent = true;
        state.otpDetails = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        console.log(action.payload);
        localStorage.setItem("id", action.payload.user.id)
        localStorage.setItem("USER", action.payload.user.isVerified)
        localStorage.setItem("token", action.payload.user.token);
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
