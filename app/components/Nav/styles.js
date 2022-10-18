import { StyleSheet, Appearance } from 'react-native';
import { Theme } from 'Config';

const colorScheme = Appearance.getColorScheme()

export default StyleSheet.create({
  nav: {
    paddingVertical: Theme.size.s1,
    paddingHorizontal: Theme.size.s6,
    borderLeftWidth: 4,
    borderLeftColor: 'transparent',
    marginVertical: Theme.size.s2,
    marginHorizontal: Theme.size.s3,
    borderRadius: Theme.size.s2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navIcon: {
    height: Theme.size.s6,
    width: Theme.size.s6,
    marginRight: Theme.size.s3,
  },
  navText: {
    color: colorScheme === 'dark' ? Theme.colors.black : Theme.colors.white,
    fontSize: Theme.size.s6,
    lineHeight: Theme.size.s7,
    fontWeight: '400',
    letterSpacing: -0.31,
  },
});
