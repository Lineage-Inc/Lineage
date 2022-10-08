import React from 'react';
import PropTypes from 'prop-types';
import { Pressable, Text } from 'react-native';
import styles from './styles';

export default function Button({ onPress, children, variant }) {
  const [onActive, setOnActive] = React.useState(false);
  const [onHover, setOnHover] = React.useState(false);

  const props = {
    activeOpacity: 1,
    style: onActive ? styles.buttonText : styles.button,
    style: onHover ? styles.buttonText : styles.button,
    style: variant === 'default' ? styles.button : styles.buttonPrimary,
    onPressIn: () => setOnActive(false),
    onPressOut: () => setOnActive(true),
    onMouseEnter: () => setOnHover(true),
    onMouseLeave: () => setOnHover(false),
    onPress: () => onPress,
    disabled: () => disabled,
  };

  const disabled =
    props.disabled != null ? props.disabled : false;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={'example pressable'}
      accessibilityHint={
        'click me to change text from Pressed to Press Me'
      }
      style={({ pressed, onHover }) => [
        styles.button,
        {
          backgroundColor: pressed ? '#d9d8d4' : '#ecece9',
          borderWidth: 2,
          borderColor: onHover ? '#d9d8d4' : '#d9d8d4',
        },
        
      ]}
      disabled={!disabled}>
      {({ pressed }) => (
        <Text style={{
          textAlign: 'center',
          color: pressed ? 'green' : 'red',
        }}>
          { children }
        </Text>
      )}
    </Pressable>
  );
}

Button.defaultProps = {
  children: null,
  disabled: false,
  onPress: () => {},
  variant: 'default',
  size: 'medium',
};

Button.propTypes = {
  /**
   * Button contents
   */
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  /** 
   * Is this the primary call to action?
   */
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /**
   * How big is this button?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
