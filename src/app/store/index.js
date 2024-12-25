import { configureStore } from "@reduxjs/toolkit";
import learnedApiSlice from "../redux/features/Learned/LearnedSilce";
import language from "../redux/features/languagecode/silce"
import product from "../redux/features/SanPham/silce";
import lienhe from "../redux/features/LienHe/silce"
const store = configureStore({
  reducer: {
    learned: learnedApiSlice,
    language : language, 
    product : product,
    lienhe : lienhe
  },
});
export default store;
