import { configureStore, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: 0,
  },
  reducers: {
    increment: (state) => {
      state.items += 1;
    },
    decrement: (state) => {
      if (state.items !== 0) state.items -= 1;
    },
  },
});

export const { increment, decrement } = cartSlice.actions;

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
