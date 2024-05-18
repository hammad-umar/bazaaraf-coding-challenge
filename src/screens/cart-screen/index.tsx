import {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ScreenNavigationProps} from '../../types';
import {useAppSelector} from '../../redux/hooks';
import CartItem from '../../components/cart-item';
import {scale} from '../../theme/scale';
import {spacing} from '../../theme/spacing';
import Summary from '../../components/summary';
import Header from '../../components/header';

const CartScreen: FC<ScreenNavigationProps> = ({navigation}) => {
  const {items} = useAppSelector(state => state.cart);

  return (
    <View style={styles.container}>
      <Header title="Cart" navigation={navigation} />

      <FlatList
        contentContainerStyle={{gap: spacing.md}}
        bounces
        data={items}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CartItem item={item} navigation={navigation} />
        )}
      />

      <Summary />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scale(20),
    paddingHorizontal: scale(20),
  },
});

export default CartScreen;
