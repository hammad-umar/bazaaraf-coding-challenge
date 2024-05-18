import {FC} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Product, StackNavigation} from '../../types';
import {spacing} from '../../theme/spacing';
import {scale} from '../../theme/scale';
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';

type ProductCardProps = {
  product: Product;
  navigation: StackNavigation;
};

const ProductCard: FC<ProductCardProps> = props => {
  const {product, navigation} = props;
  const {id, name, price} = product;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', {productId: id})}
      style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.nameTxt}>{name}</Text>
        <Text style={styles.priceTxt}>{price}$</Text>
      </View>
    </TouchableOpacity>
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
    gap: spacing.sm,
    justifyContent: 'space-between',
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
});

export default ProductCard;
