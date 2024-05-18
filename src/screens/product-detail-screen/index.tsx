import {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  CartProduct,
  Product,
  RootStackParamsList,
  ScreenNavigationProps,
} from '../../types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {PRODUCTS} from '../../constants';
import {scale} from '../../theme/scale';
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import {useAppDispatch} from '../../redux/hooks';
import {addProductToCart} from '../../redux/slices/cart.slice';
import Header from '../../components/header';

const ProductDetailsScreen: FC<ScreenNavigationProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {params} = useRoute<RouteProp<RootStackParamsList, 'ProductDetails'>>();

  const [product, setProduct] = useState<Product>();

  const getProductDetails = (): void => {
    const foundProduct = PRODUCTS.find(p => p.id === params?.productId);

    if (foundProduct) {
      setProduct(foundProduct);
    }
  };

  const handleOnPress = (): void => {
    if (product) {
      const payload: CartProduct = {
        ...product,
        quantity: 1,
      };

      dispatch(addProductToCart(payload));
      navigation.navigate('CartScreen');
    }
  };

  useEffect(() => {
    getProductDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Product Details" navigation={navigation} />

      {product ? (
        <View style={styles.innerContainer}>
          <Text style={styles.nameTxt}>{product.name}</Text>
          <Text style={styles.priceTxt}>{product.price}$</Text>
          <TouchableOpacity onPress={handleOnPress} style={styles.btnContainer}>
            <Text style={styles.btnText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.errorText}>Product not found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scale(20),
    paddingHorizontal: scale(20),
  },
  innerContainer: {
    gap: spacing.sm,
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
  btnContainer: {
    borderWidth: scale(1),
    borderColor: colors.palette.secondary400,
    width: scale(120),
    padding: spacing.xxs,
    borderRadius: scale(5),
  },
  btnText: {
    textAlign: 'center',
    fontFamily: fonts['Montserrat-Italic'],
    color: colors.palette.primary500,
    fontSize: scale(14),
  },
  errorText: {
    textAlign: 'center',
    fontFamily: fonts['Montserrat-BlackItalic'],
    color: colors.error,
    fontSize: scale(20),
  },
});

export default ProductDetailsScreen;
