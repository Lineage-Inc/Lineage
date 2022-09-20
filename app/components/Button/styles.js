import { StyleSheet } from 'react-native';
import { Theme } from 'Config';
import Palette from 'Config/ColorScheme';

export default StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#498205',
    margin: 5,
    borderRadius: 3,
    width: 150,
  },
  buttonText: {
    color: Palette.buttonText,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
