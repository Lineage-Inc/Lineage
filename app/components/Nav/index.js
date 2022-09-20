import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Nav = ({ title, accessibilityLabel, screenName }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="link"
      onPress={() => navigation.navigate(screenName, {
        name: screenName,
      })}
    >
      <View style={styles.nav}>
        <Image
        style={styles.navIcon}
        source={{
          uri: 'https://via.placeholder.com/21/009444/FFFFFF?Text=➕',
        }} />
        <Text style={styles.navText}>
          {title}
        </Text>
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

export default Nav;
