import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScreenNavigationProps} from '../../types';
import {useAppSelector} from '../../redux/hooks';

const CartScreen: FC<ScreenNavigationProps> = () => {
  const {items, count} = useAppSelector(state => state.cart);

  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
      <Text>{JSON.stringify({items, count}, null, 4)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CartScreen;
