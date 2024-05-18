import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CartProduct, CartState} from '../../types';

const initialState: CartState = {
  count: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart-slice',
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<CartProduct>) {
      if (typeof state.items === 'undefined') {
        state.items = [];
      }

      // Check if product exist in the cart or not.
      const productExist = state.items.find(
        product => product.id === action.payload.id,
      );

      // If product already exist in the cart then increment it's quantity.
      if (productExist) {
        productExist.quantity++;
      } else {
        // Otherwise, add product to the cart and increment cart count.
        state.count++;
        state.items = [...state.items, action.payload];
      }
    },

    incrementProductQuanity(state, action: PayloadAction<string>): void {
      const productExist = state.items.find(
        product => product.id === action.payload,
      );

      if (productExist) {
        productExist.quantity++;
      }
    },

    decrementProductQuanity(state, action: PayloadAction<string>): void {
      const productExist = state.items.find(
        product => product.id === action.payload,
      );

      // Decrement product count until it hits zero.
      if (productExist && productExist.quantity !== 0) {
        productExist.quantity--;
      }

      // If Product quantity is equal to zero then remove it from the cart.
      // And decrement cart count.
      if (productExist && productExist.quantity === 0) {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.count--;
      }
    },
  },
});

export const {
  addProductToCart,
  incrementProductQuanity,
  decrementProductQuanity,
} = cartSlice.actions;
