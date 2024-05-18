import {Provider} from 'react-redux';
import {AppRegistry, SafeAreaView, StyleSheet} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import App from './App';
import {name as appName} from './app.json';
import {persistor, store} from './src/redux/store';
import {colors} from './src/theme/colors';

const Main = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={styles.container}>
            <NavigationContainer>
              <App />
            </NavigationContainer>
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tint,
  },
});

AppRegistry.registerComponent(appName, () => Main);
