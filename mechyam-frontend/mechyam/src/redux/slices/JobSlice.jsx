import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all jobs
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await axios.get(
    "http://192.168.1.191:8085/mechyam/api/career/jobs"
  );
  // Ensure array format
  return Array.isArray(response.data) ? response.data : response.data.data || [];
});

// Post job application
export const applyJob = createAsyncThunk("jobs/applyJob", async (applicationData) => {
  const response = await axios.post(
    "http://192.168.1.191:8080/mechyam/api/career/apply",
    applicationData
  );
  return response.data;
});

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    data: [],         // all jobs
    loading: false,
    error: null,
    applyStatus: null, // response from applyJob
  },
  reducers: {
    resetApplyStatus: (state) => {
      state.applyStatus = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(applyJob.fulfilled, (state, action) => {
        state.applyStatus = action.payload;
      })
      .addCase(applyJob.rejected, (state, action) => {
        state.applyStatus = { error: action.error.message };
      });
  },
});

export const { resetApplyStatus } = jobSlice.actions;
export default jobSlice.reducer;
