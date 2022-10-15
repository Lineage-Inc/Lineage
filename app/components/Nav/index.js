import React from 'react';
import PropTypes from 'prop-types';
import { View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from '../../../storybook/stories/Icon';
import { Typography } from '../../../storybook/stories/Typography';
import styles from './styles';

export const Nav = ({
  navigation,
  title,
  symbol,
  accessibilityLabel,
  screenName
}) => {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="link"
      onPress={() => navigation.navigate(screenName, {
        name: screenName,
      })}
    >
      <View style={styles.nav}>
        <Icon symbol={symbol} style={styles.navIcon} iconColor='#498205' />
        <Typography variant="default" size="6" style={styles.navText}>{title}</Typography>
      </View>
    </Pressable>
  );
};

Nav.propTypes = {
  title: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  accessibilityRole: PropTypes.string,
  onPress: PropTypes.func,
};

Nav.defaultProps = {
  title: 'Nav Link',
  // eslint-disable-next-line no-console
  onPress: () => console.log(`Nav Pressed: ${screenName}`),
};
