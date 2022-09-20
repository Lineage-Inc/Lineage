import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Button, Nav } from 'Components';
import { Theme } from 'Config';
import { useNavigation } from '@react-navigation/native'

const Places = () => {
  const navigation = useNavigation();
  return (
    <View style={ Theme.colors.surface, styles.container }>
      <Text style={styles.sectionTitle}>Places</Text>
      <Button
        title="Go back home"
        color={Theme.colors.buttonText}
        accessibilityLabel="Learn more about this green button"
        onPress={() =>
          navigation.navigate("Home")
        }
        style={Theme.colors.buttonBackground}
      />
      <FlatList
        style={styles.navList}
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({ highlighted }) => (
            <View
              style={[
                styles.separator,
                highlighted && { marginLeft: 0 }
              ]}
            />
          ))
        }
        data={[
          { title: 'New Source', screenName: 'Home', key: 'item1' },
          { title: 'People', screenName: 'People', key: 'item2' },
          { title: 'Places', screenName: 'Places', key: 'item3' },
          { title: 'Events', screenName: 'Events', key: 'item4' },]}
        renderItem={({ item, index, separators }) => (
          <Nav
          key={item.key}
          title={item.title}
          screenName={item.screenName}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}></Nav>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    ...Theme.font.heading,
    fontSize: 34,
    fontWeight: '600',
  },
});

export default Places;
