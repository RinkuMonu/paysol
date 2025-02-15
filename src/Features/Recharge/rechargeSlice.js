import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../components/services/AxiosInstance";

// Async Thunk for fetching plans
export const planFetch = createAsyncThunk(
  "plans/fetchPlans",
  async ({ op_id, cir_id }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/plan/plansAPI", { op_id, cir_id });
      console.log("Fetched Plans Data:", response.data);

      return response.data.data.plans || [];
    } catch (error) {
      console.error("Plan Fetch Error:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to fetch plans");
    }
  }
);

export const planFetch1 = createAsyncThunk(
  "plans/fetchPlansByType",
  async ({ op_id, cir_id, plan_type }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/plan/plansTypeAPI", { op_id, cir_id, plan_type });
      console.log(response.data.data.plans,"hhhhhhhhhhhhhhh")
      return response.data.data.plans || [];
    } catch (error) {
      console.error("Plans Fetch Error:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to fetch PlansType");
    }
  }
);

const initialState = {
  plans: [],
  loading: false,
  error: null,
};

const planSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    clearPlans: (state) => {
      state.plans = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(planFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(planFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = action.payload;
      })
      .addCase(planFetch.rejected, (state, action) => {
        state.loading = false;
        state.plans = [];
        state.error = action.payload;
      })

      .addCase(planFetch1.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(planFetch1.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = action.payload;
      })
      .addCase(planFetch1.rejected, (state, action) => {
        state.loading = false;
        state.plans = [];
        state.error = action.payload;
      });
  },
});

export const { clearPlans } = planSlice.actions;

export default planSlice.reducer;
