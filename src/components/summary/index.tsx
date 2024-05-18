import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from '../../theme/scale';
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';
import {calculateTotalPrice} from '../../utils/calculate-total-price';
import {useAppSelector} from '../../redux/hooks';
import {spacing} from '../../theme/spacing';

const Summary: FC = () => {
  const {items} = useAppSelector(state => state.cart);

  return (
    <View style={styles.container}>
      <Text style={styles.summaryTxt}>Summary</Text>
      <Text style={styles.totalPriceTxt}>
        Total Price: {calculateTotalPrice(items)}$
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: spacing.xxxl,
    gap: spacing.xs,
  },
  summaryTxt: {
    fontSize: scale(16),
    fontFamily: fonts['Montserrat-Bold'],
    color: colors.palette.primary500,
  },
  totalPriceTxt: {
    fontSize: scale(16),
    fontFamily: fonts['Montserrat-Bold'],
    color: colors.palette.primary500,
  },
});

export default Summary;
