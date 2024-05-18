import {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ScreenNavigationProps} from '../../types';
import {PRODUCTS} from '../../constants';
import ProductCard from '../../components/product-card';
import {spacing} from '../../theme/spacing';
import {scale} from '../../theme/scale';
import {useAppSelector} from '../../redux/hooks';

const HomeScreen: FC<ScreenNavigationProps> = ({navigation}) => {
  const {count} = useAppSelector(state => state.cart);

  return (
    <View style={styles.container}>
      <Text>Cart Count: {count}</Text>

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
