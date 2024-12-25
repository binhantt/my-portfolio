import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataFetched, dataFetchedWithError, startLoading } from "./silce";

export const API = createAsyncThunk(
    'language/data', async(_,dataapi)=>{
        try {
            const response = await fetch('http://localhost:8000/language');
            const data = await response.json();
            dataapi.dispatch(dataFetched(data));
            return data;
          } catch (error) {
            console.log('Error fetching data:', error);
            dataapi.dispatch(dataFetchedWithError());
          }
    }
)
export default API