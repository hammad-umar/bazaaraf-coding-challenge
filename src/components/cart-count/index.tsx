import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CartIcon from '../../assets/icons/cart-icon.svg';
import {useAppSelector} from '../../redux/hooks';
import {scale} from '../../theme/scale';
import {colors} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import {fonts} from '../../theme/fonts';

const CartCount: FC = () => {
  const {count} = useAppSelector(state => state.cart);

  return (
    <View style={styles.container}>
      <CartIcon height={scale(35)} width={scale(35)} />
      <Text style={styles.countTxt}>
        {count === 0 ? 'No items in the cart.' : `${count} items in the cart.`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: scale(20),
  },
  countTxt: {
    fontSize: scale(16),
    fontFamily: fonts['Montserrat-Bold'],
    color: colors.palette.primary500,
  },
});

export default CartCount;
