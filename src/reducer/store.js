import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer"; // Import the default export

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
