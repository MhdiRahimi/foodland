import { createSlice } from '@reduxjs/toolkit';
import products from '../assets/fake-data/products';
const initialState = {
  value: products,
  tab: 'all',
};

export const allProducts = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.tab = action.payload;
      if (action.payload === '') {
        state.tab = 'all';
      }
    },
  },
});
export const { changeTab } = allProducts.actions;
export default allProducts.reducer;
