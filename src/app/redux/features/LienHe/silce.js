import { createSlice } from "@reduxjs/toolkit";
import { lienhe } from "./api"
const LienHe = createSlice({
  name: 'LienHe',
  initialState: {
    LienHeapi: [],
    LienHeLoading: false,
    LienHeError: null,
  },
  reducers: {
    startLoading: (state) => {
      state.LienHeLoading = true;
    },
    fetchStart: (state) => {
      state.LienHeapi = true;
      state.LienHeError = null;
    },
    dataFetched: (state, action) => {
      state.LienHeapi = action.payload;
      state.LienHeLoading = false;
    },
    dataFetchedWithError: (state) => {
      state.LienHeLoading = false;
      state.LienHeapi = [];
      state.LienHeError = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(lienhe.pending, (state) => {
        state.LienHeLoading = true;
        state.LienHeError = null;
      })
      .addCase(lienhe.fulfilled, (state, action) => {
        state.LienHeLoading = false;
      })
      .addCase(lienhe.rejected, (state, action) => {
        state.LienHeLoading = false;
        state.LienHeError = action.payload;
      });
  },
})
export const { startLoading, dataFetched, dataFetchedWithError } = LienHe.actions;

export default LienHe.reducer; 
