import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataFetched, dataFetchedWithError, startLoading } from "./silce";

export const API = createAsyncThunk(
    'api/data', async(_,dataapi)=>{
        try {
            const response = await axios.get('http://localhost:8000/language');
            const data = response.data;
            thunkApi.dispatch(dataFetched(data));
            return data;
          } catch (error) {
            console.log('Error fetching data:', error);
            thunkApi.dispatch(dataFetchedWithError());
          }
    }
)
export default API