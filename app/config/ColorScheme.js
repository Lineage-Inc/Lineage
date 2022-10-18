import React from 'react';
import { Appearance } from 'react-native';

const DARK_MODE_KEY = 'theme.dark_mode';
const INHERIT_SYSTEM_KEY = 'theme.inherit_system';

const palette = {
  primary: {
    050: '#f3faea',
    200: '#cee5b3',
    350: '#abe16a',
    500: '#498205',
    650: '#376302',
    800: '#264500',
  },
  secondary: {
    050: '#ffece5',
    200: '#ebbead',
    350: '#d49078',
    500: '#ad6044',
    650: '#874b35',
    800: '#47271c',
  },
  transparent: 'transparent',
  white: '#fff',
  neutral: {
    020: '#fbfaf9',
    080: '#ecebe9',
    160: '#d9d8d4',
    240: '#c4c3c0',
    320: '#b0afab',
    400: '#9b9a97',
    480: '878682',
    560: '#74726d',
    640: '#5f5d59',
    720: '#4c4943',
    800: '#38352e',
    880: '#22201b',
  },
  black: '#0a0a0a',
  success: {
    050: '#eaf5fa',
    200: '#bbd1dc',
    350: '#8cadbf',
    500: '#5e8aa1',
    650: '#2f6685',
    800: '#004266',
  },
  warning: {
    050: '#fafbcf',
    200: '#ebe8b7',
    350: '#dcd49f',
    500: '#7f7750',
    650: '#635b38',
    800: '#473e1f',
  },
  error: {
    050: '#faeaea',
    200: '#eeaaaa',
    350: '#db7171',
    500: '#c83737',
    650: '#af0304',
    800: '#660000',
  },
}

const DARK_THEME = {
  dark: true,
  appbarTint: palette.primary[650],
  background: palette.neutral[800],
  surface: palette.neutral[880],
  border: palette.neutral[560],
  titleText: palette.neutral[160],
  bodyText: palette.neutral[240],
  captionText: palette.neutral[480],
  borderColor: palette.neutral[240],
  success: palette.primary[350],
  buttonBackground: palette.primary[500],
  buttonText: palette.white,
  error: palette.error[500],
};
const LIGHT_THEME = {
  dark: false,
  appbarTint: palette.primary[650],
  background: palette.neutral[020],
  surface: palette.neutral[160],
  border: palette.neutral[240],
  titleText: palette.neutral[640],
  bodyText: palette.neutral[560],
  bodyTextHighlight: palette.neutral[480],
  captionText: palette.neutral[480],
  borderColor: palette.neutral[240],
  success: palette.primary[350],
  buttonBackground: palette.primary[500],
  buttonText: palette.white,
  error: palette.error[500],
};

const DarkMode = __themeSettingFactory__(DARK_MODE_KEY);
const InheritSystem = __themeSettingFactory__(INHERIT_SYSTEM_KEY);

function __themeSettingFactory__(settingKey) {
  return ({
    getSetting: function () {
      try {
        return Appearance.getColorScheme;
      } catch (e) {
        return false;
      }
    }
  });
}

export { DARK_THEME, LIGHT_THEME, DarkMode, InheritSystem };

export default React.createContext();
