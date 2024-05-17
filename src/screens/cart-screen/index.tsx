import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScreenNavigationProps} from '../../types';

const CartScreen: FC<ScreenNavigationProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CartScreen;
