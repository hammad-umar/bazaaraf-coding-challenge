import {Platform, Dimensions, StatusBar} from 'react-native';
import {scale} from './scale';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const PLATFORM_IOS = Platform.OS === 'ios' ? true : false;
export const STATUSBAR_HEIGHT = StatusBar.currentHeight;
export const HEADER_HEIGHT = 80;
export const BOTTOM_NAV_HEIGHT = scale(90);

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

export const IPHONE_12_WIDTH = 390;
export const IPHONE_12_HEIGHT = 844;

const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window');

export let isIPhoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV) {
  isIPhoneX =
    (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) ||
    (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) ||
    (W_WIDTH === IPHONE_12_WIDTH && W_HEIGHT === IPHONE_12_HEIGHT);
}
