// redux/features/learnedApiSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { startLoading, dataFetched, dataFetchedWithError } from './LearnedSilce';

export const fetchLearnedDataThunk = createAsyncThunk(
  'learned/fetchPosts',
  async (_, thunkApi) => {
    thunkApi.dispatch(startLoading());
    try {
      const response = await axios.get('http://localhost:8000/posts');
      const data = response.data; 
        thunkApi.dispatch(dataFetched(data));
        return data ; 
    } catch (error) {
      console.log('Error fetching data:', error);
      thunkApi.dispatch(dataFetchedWithError());
    }
  }
);
