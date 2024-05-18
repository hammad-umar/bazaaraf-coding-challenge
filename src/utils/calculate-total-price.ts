import {CartProduct} from '../types';

export const calculateTotalPrice = (items: CartProduct[]): number => {
  return items.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
};
