import {FC} from 'react';
import {CartProduct, StackNavigation} from '../../types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PlusIcon from '../../assets/icons/add-plus-icon.svg';
import MinusIcon from '../../assets/icons/minus-circle-icon.svg';
import {scale} from '../../theme/scale';
import {spacing} from '../../theme/spacing';
import {useAppDispatch} from '../../redux/hooks';
import {
  decrementProductQuanity,
  incrementProductQuanity,
} from '../../redux/slices/cart.slice';
import {colors} from '../../theme/colors';
import {fonts} from '../../theme/fonts';

type CartItemProps = {
  item: CartProduct;
  navigation: StackNavigation;
};

const CartItem: FC<CartItemProps> = props => {
  const {item} = props;
  const dispatch = useAppDispatch();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.nameTxt}>{item.name}</Text>
        <Text style={styles.priceTxt}>{item.price}$</Text>
      </View>

      <View style={styles.cardActions}>
        <TouchableOpacity
          onPress={() => dispatch(incrementProductQuanity(item.id))}>
          <PlusIcon height={scale(25)} width={scale(25)} />
        </TouchableOpacity>
        <Text style={styles.quantityTxt}>{item.quantity}</Text>
        <TouchableOpacity
          onPress={() => dispatch(decrementProductQuanity(item.id))}>
          <MinusIcon height={scale(25)} width={scale(25)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: scale(1),
    borderColor: colors.border,
    padding: spacing.md,
    borderRadius: scale(5),
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  nameTxt: {
    fontSize: scale(16),
    fontFamily: fonts['Montserrat-Regular'],
    color: colors.palette.primary500,
  },
  priceTxt: {
    fontSize: scale(16),
    fontFamily: fonts['Montserrat-BoldItalic'],
    color: colors.palette.accent500,
  },
  cardActions: {
    width: scale(110),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityTxt: {
    fontSize: scale(14),
    fontFamily: fonts['Montserrat-BoldItalic'],
    color: colors.palette.accent500,
  },
});

export default CartItem;
