import {NavigationProp} from '@react-navigation/native';

export type RootStackParamsList = {
  Home: undefined;
  ProductDetails: {productId: string};
  CartScreen: undefined;
};

export interface ScreenNavigationProps {
  navigation: NavigationProp<RootStackParamsList>;
}

export type StackNavigation = NavigationProp<RootStackParamsList>;

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface CartState {}
