import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./Features/Tasks/tasksSlice";

const Store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});

export default Store;
