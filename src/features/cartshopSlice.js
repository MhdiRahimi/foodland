import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  quantity: 0,
};

export const cartshop = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.quantity += 1;
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cart[find].quanty += 1;
      } else {
        const items = { ...action.payload, quanty: 1 };
        state.cart.push(items);
      }
    },
    decrementQuantity: (state, action) => {
      state.quantity -= 1;
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cart[find].quanty -= 1;
      } else {
        const items = { ...action.payload, quanty: 2, userId: '' };
        state.cart.push(items);
      }
    },
    removeItem: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.quantity -= state.cart[find].quanty;

      if (find >= 0) {
        state.cart[find].quanty = 0;
      }
      state.cart = state.cart.filter((item) => item.quanty !== 0);
    },
    clearCart: (state) => {
      state.cart = [];
      state.quantity = 0
    },
  },
});
export const { addCart, decrementQuantity, removeItem, clearCart } = cartshop.actions;
export default cartshop.reducer;
