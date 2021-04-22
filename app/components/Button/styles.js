import { StyleSheet } from 'react-native';
import Colors from '../../config/Colors';

export default StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
    margin: 5,
    borderRadius: 3,
    width: 150,
  },
  buttonText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
