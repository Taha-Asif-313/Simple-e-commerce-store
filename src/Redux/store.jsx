import { configureStore, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items += 1;
    },
    decrement: (state) => {
      state.items -= 1;
    },
  },
});

export const { increment, decrement } = cartSlice.actions;

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
