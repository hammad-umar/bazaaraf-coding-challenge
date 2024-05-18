import {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ScreenNavigationProps} from '../../types';
import {PRODUCTS} from '../../constants';
import ProductCard from '../../components/product-card';
import {spacing} from '../../theme/spacing';
import {scale} from '../../theme/scale';
import CartCount from '../../components/cart-count';

const HomeScreen: FC<ScreenNavigationProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CartCount />

      <FlatList
        bounces
        data={PRODUCTS}
        contentContainerStyle={styles.listContentContainer}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ProductCard product={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scale(20),
    paddingHorizontal: scale(20),
  },
  listContentContainer: {
    gap: spacing.md,
  },
});

export default HomeScreen;
