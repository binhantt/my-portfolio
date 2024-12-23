import { createSlice } from '@reduxjs/toolkit';
import { fetchLearnedDataThunk } from './LearnedAPI';

const learnedApiSlice = createSlice({
  name: 'learned',
  initialState :{
    data :[],
    loading: false, // Trạng thái tải dữ liệu
    error: null,
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    fetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    dataFetched: (state, action) => {
      state.data = action.payload; 
      state.loading = false; 
      console.log(state.data)
    },
    dataFetchedWithError: (state) => {
      state.loading = false;
      state.data = [];
      state.error = true;
    },
  },
   extraReducers: (builder) => {
    builder
      .addCase(fetchLearnedDataThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLearnedDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        // Dữ liệu đã được lưu qua action `dataFetched`
      })
      .addCase(fetchLearnedDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { startLoading, dataFetched, dataFetchedWithError } = learnedApiSlice.actions;

export default learnedApiSlice.reducer; 