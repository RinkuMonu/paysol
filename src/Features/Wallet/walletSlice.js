import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../components/services/AxiosInstance";

export const addWallet = createAsyncThunk(
  "wallet/addWallet", 
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
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(addWallet.pending, (state) => { 
        state.loading = true;
        state.error = null;
      })
      .addCase(addWallet.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addWallet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
    
export default walletSlice.reducer;
