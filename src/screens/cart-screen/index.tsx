import {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ScreenNavigationProps} from '../../types';
import {useAppSelector} from '../../redux/hooks';
import CartItem from '../../components/cart-item';
import {scale} from '../../theme/scale';
import {spacing} from '../../theme/spacing';
import Summary from '../../components/summary';
import Header from '../../components/header';
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';

const CartScreen: FC<ScreenNavigationProps> = ({navigation}) => {
  const {items} = useAppSelector(state => state.cart);

  return (
    <View style={styles.container}>
      <Header title="Cart" navigation={navigation} />

      <FlatList
        bounces
        data={items}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({item}) => (
          <CartItem item={item} navigation={navigation} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No Items in the cart.</Text>
        }
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
  listContentContainer: {
    gap: spacing.md,
  },
  emptyText: {
    fontFamily: fonts['Montserrat-BoldItalic'],
    fontSize: scale(16),
    color: colors.palette.primary500,
  },
});

export default CartScreen;
