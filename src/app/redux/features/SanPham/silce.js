const { createSlice } = require("@reduxjs/toolkit");
import {product} from "./api"
const  Product= createSlice({
    name: 'product',
    initialState :{
        productdata :[],
      productloading: false, 
      producterror: null,
    },
    reducers: {
        startLoading: (state) => {
          state.productloading = true;
        },
        fetchStart: (state) => {
          state.productdata= true;
          state.producterror = null;
        },
        dataFetched: (state, action) => {
          state.productdata = action.payload; 
          state.productloading = false; 
        },
        dataFetchedWithError: (state) => {
          state.productloading = false;
          state.productdata = [];
          state.producterror = true;
        },
      },
       extraReducers: (builder) => {
        builder
          .addCase(product.pending, (state) => {
            state.productloading = true;
            state.producterror = null;
          })
          .addCase(product.fulfilled, (state, action) => {
            state.productloading = false;
          })
          .addCase(product.rejected, (state, action) => {
            state.productloading = false;
            state.producterror = action.payload;
          });
      },
})
export const { startLoading, dataFetched, dataFetchedWithError } = Product.actions;

export default Product.reducer; 
