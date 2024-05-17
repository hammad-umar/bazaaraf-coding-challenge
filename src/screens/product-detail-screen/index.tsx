import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScreenNavigationProps} from '../../types';

const ProductDetailsScreen: FC<ScreenNavigationProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Product Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductDetailsScreen;
