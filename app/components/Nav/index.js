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
  text,
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
      style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? '#ecece9'
              : 'transparent'
          },
          styles.wrapperCustom
      ]}>
      <View style={styles.nav}>
        <View style={styles.navIcon}>
          <Icon symbol={symbol} iconColor='#498205' />
        </View>
        <View style={styles.navText}>
          <Typography variant="default" size="6" text={text} />
        </View>
      </View>
    </Pressable>
  );
};

Nav.propTypes = {
  text: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  accessibilityRole: PropTypes.string,
  onPress: PropTypes.func,
};

Nav.defaultProps = {
  title: 'Nav Link',
  // eslint-disable-next-line no-console
  onPress: () => console.log(`Nav Pressed: ${screenName}`),
};
