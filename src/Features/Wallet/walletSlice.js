import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../components/services/AxiosInstance";

export const addWallet = createAsyncThunk(
  "wallet/addWallet", // Updated action type name
  async ({userId, amount,  txnid, phone, productinfo, name, furl,surl, email }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/payment/payIn", { 
        userId,
            amount,
            txnid,
            name,
            phone,
            email, 
            productinfo,
            furl,
            surl,
      });
      return response.data; 
    } catch (error) {
      console.error("wallet", error);
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

const walletSlice = createSlice({
  name: "wallet", // Updated slice name
  initialState,
  reducers: {}, // Keeping reducers for future actions
  extraReducers: (builder) => {
    builder
      .addCase(addWallet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addWallet.fulfilled, (state, action) => {
        state.loading = false;
        state.otpSent = true;
        state.otpDetails = action.payload;
      })
      .addCase(addWallet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
    
export default walletSlice.reducer;
