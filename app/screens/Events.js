import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Button } from 'Components';
import { Theme } from 'Config';
import { useNavigation } from '@react-navigation/native'

const Events = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Events</Text>
      <Button
        title="Go back home"
        color={Theme.colors.buttonText}
        accessibilityLabel="Learn more about this green button"
        onPress={() =>
          navigation.navigate("Home")
        }
        style={Theme.colors.buttonBackground}
      />
    </View>
  )
}

export default Events;
