import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Pressable } from 'react-native';
import styles from './styles';

const Button = (props) => {
  const { title, accessibilityLabel, onPress } = props;
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      onPress={onPress}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  title: 'Click here',
  // eslint-disable-next-line no-console
  onPress: () => console.log('Button Pressed'),
};

export default Button;
