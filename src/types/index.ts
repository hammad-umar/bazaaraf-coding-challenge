import {NavigationProp} from '@react-navigation/native';

export type RootStackParamsList = {
  Home: undefined;
  CartScreen: undefined;
  ProductDetails: {productId: string};
};

export type StackNavigation = NavigationProp<RootStackParamsList>;

export interface ScreenNavigationProps {
  navigation: NavigationProp<RootStackParamsList>;
}

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface CartState {
  count: number;
  items: CartProduct[];
}
