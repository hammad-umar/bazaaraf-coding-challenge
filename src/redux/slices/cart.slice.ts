import {createSlice} from '@reduxjs/toolkit';
import {CartState} from '../../types';

const initialState: CartState = {};

export const cartSlice = createSlice({
  name: 'cart-slice',
  initialState,
  reducers: {
    addProductToCart() {},

    incrementProductCount() {},

    decrementProductCount() {},
  },
});

export const {addProductToCart, incrementProductCount, decrementProductCount} =
  cartSlice.actions;

export default cartSlice.reducer;
