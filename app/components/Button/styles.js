import { StyleSheet } from 'react-native';
import { Theme } from 'Config';

export default StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Theme.colors.primary,
    margin: 5,
    borderRadius: 3,
    width: 150,
  },
  buttonText: {
    color: Theme.colors.white,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
