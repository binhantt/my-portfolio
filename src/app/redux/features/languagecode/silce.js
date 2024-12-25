const { createSlice } = require("@reduxjs/toolkit");
import {API} from "./api"
const  language= createSlice({
    name: 'language',
    initialState :{
        apidata :[],
      loadingapi: false, 
      errorapi: null,
    },
    reducers: {
        startLoading: (state) => {
          state.loadingapi = true;
        },
        fetchStart: (state) => {
          state.apidata= true;
          state.errorapi = null;
        },
        dataFetched: (state, action) => {
          state.apidata = action.payload; 
          state.loadingapi = false; 
        },
        dataFetchedWithError: (state) => {
          state.loadingapi = false;
          state.apidata = [];
          state.errorapi = true;
        },
      },
       extraReducers: (builder) => {
        builder
          .addCase(API.pending, (state) => {
            state.loadingapi = true;
            state.errorapi = null;
          })
          .addCase(API.fulfilled, (state, action) => {
            state.loadingapi = false;
          })
          .addCase(API.rejected, (state, action) => {
            state.loadingapi = false;
            state.errorapi = action.payload;
          });
      },
})
export const { startLoading, dataFetched, dataFetchedWithError } = language.actions;

export default language.reducer; 
