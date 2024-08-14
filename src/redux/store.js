import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    cartItem: cartSlice,
  },
});

export default store;
