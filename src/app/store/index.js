import { configureStore } from "@reduxjs/toolkit";
import learnedApiSlice from "../redux/features/Learned/LearnedSilce";

const store = configureStore({
  reducer: {
    learned: learnedApiSlice,
  },
});
export default store;
