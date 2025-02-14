  import { configureStore } from "@reduxjs/toolkit";
  import authSlice from "./Features/Auth/authSlice";
  import walletSlice from "./Features/Wallet/walletSlice";
  import planSlice from "./Features/Recharge/rechargeSlice";

  export const store = configureStore({
    reducer: {
      auth: authSlice,
      wallet: walletSlice, 
      plans: planSlice,
    },
  });
