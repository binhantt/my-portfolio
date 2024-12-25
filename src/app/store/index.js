import { configureStore } from "@reduxjs/toolkit";
import learnedApiSlice from "../redux/features/Learned/LearnedSilce";
import language from "../redux/features/languagecode/silce"
const store = configureStore({
  reducer: {
    learned: learnedApiSlice,
    language : language, 
  },
});
export default store;
