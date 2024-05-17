import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../types';

import HomeScreen from '../screens/home-screen';
import CartScreen from '../screens/cart-screen';
import ProductDetailsScreen from '../screens/product-detail-screen';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const AppNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group screenOptions={{animation: 'fade_from_bottom'}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ProductDetails"
          component={ProductDetailsScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CartScreen"
          component={CartScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppNavigator;
