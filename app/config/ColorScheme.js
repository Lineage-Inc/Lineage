import React from 'react';
import { Appearance } from 'react-native';
import Colors from './Colors';

const DARK_MODE_KEY = 'theme.dark_mode';
const INHERIT_SYSTEM_KEY = 'theme.inherit_system';

const palette = {
  primary: '#498205',
  primaryDark: '#3b6904',
  primaryLight: '#91cf46',
  secondary: '#521dcf',
  secondaryDark: '#2f0c82',
  secondaryLight: '#571fdb',
  transparent: 'transparent',
  white: '#fff',
  lightest: '#f7f6f4',
  lighter: '#f4f3f1',
  light: '#dae1e7',
  gray1: '#d0d0d0',
  gray: '#8c8c8c',
  gray2: '#737373',
  dark: '#595959',
  darker: '#26282a',
  darkest: '#1e1f21',
  black: '#0a0a0a',
  red: '#ff190c',
}

const DARK_THEME = {
  dark: true,
  appbarTint: palette.primaryDark,
  background: palette.darker,
  surface: palette.darkest,
  border: palette.gray2,
  titleText: palette.light,
  bodyText: palette.gray1,
  captionText: palette.gray,
  borderColor: palette.gray1,
  success: palette.primaryLight,
  buttonBackground: palette.primary,
  buttonText: palette.white,
  error: palette.red,
};
const LIGHT_THEME = {
  dark: false,
  appbarTint: palette.primaryDark,
  background: palette.lightest,
  surface: palette.light,
  border: palette.gray1,
  titleText: palette.dark,
  bodyText: palette.gray2,
  bodyTextHighlight: palette.gray,
  captionText: palette.gray,
  borderColor: palette.gray1,
  success: palette.primaryLight,
  buttonBackground: palette.primary,
  buttonText: palette.white,
  error: palette.red,
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
