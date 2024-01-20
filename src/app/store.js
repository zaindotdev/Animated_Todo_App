import { configureStore } from "@reduxjs/toolkit";
import DocReducer from "../features/docSlice";

const store = configureStore({
  reducer: DocReducer,
});
export default store;
