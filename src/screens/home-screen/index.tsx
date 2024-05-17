import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScreenNavigationProps} from '../../types';

const HomeScreen: FC<ScreenNavigationProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
