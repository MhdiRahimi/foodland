import { configureStore } from '@reduxjs/toolkit';
import allProducts from './features/productsSlice';
import cartshop from './features/cartshopSlice';

export const store = configureStore({
  reducer: {
    products: allProducts,
    cartItems: cartshop,
  },
});
