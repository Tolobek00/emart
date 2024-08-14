import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cartList",
  initialState: { cartCount: [] },
  reducers: {
    addCart: (state, action) => {
      const createCart = state.cartCount.find((x) => x.id === action.payload.id);

      if (!createCart) {
        state.cartCount.push({ ...action.payload, quantity: 1 });
        toast.success("Товар успешно добавлен в корзину");
      } else {
        toast.error("Товар уже в корзине!");
      }
    },

    removeCart: (state, action) => {
      state.cartCount = state.cartCount.filter((x) => x.id !== action.payload);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
