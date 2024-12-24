const { createSlice } = require("@reduxjs/toolkit");
import {API} from "./api"
const  language= createSlice({
    name: 'api',
    initialState :{
        learneddata :[],
      loading: false, 
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
          state.learneddata = action.payload; 
          state.loading = false; 
          console.log(state.data)
        },
        dataFetchedWithError: (state) => {
          state.loading = false;
          state.learneddata = [];
          state.error = true;
        },
      },
       extraReducers: (builder) => {
        builder
          .addCase(API.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(API.fulfilled, (state, action) => {
            state.loading = false;
          })
          .addCase(API.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
      },
})
export const { startLoading, dataFetched, dataFetchedWithError } = language.actions;

export default language.reducer; 
