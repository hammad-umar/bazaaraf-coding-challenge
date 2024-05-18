import {FC} from 'react';
import {StackNavigation} from '../../types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BackIcon from '../../assets/icons/back-arrow-icon.svg';
import {scale} from '../../theme/scale';
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';

type HeaderProps = {
  title: string;
  navigation: StackNavigation;
};

const Header: FC<HeaderProps> = props => {
  const {title, navigation} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon width={scale(25)} height={scale(25)} />
      </TouchableOpacity>
      <Text style={styles.titleTxt}>{title}</Text>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(20),
  },
  titleTxt: {
    fontFamily: fonts['Montserrat-SemiBold'],
    fontSize: scale(14),
    color: colors.palette.primary500,
  },
});

export default Header;
