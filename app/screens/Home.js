import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Button from 'Components';
import { Theme } from 'Config';

// import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ backgroundColor: DARK_THEME ? Theme.colors.dark : Theme.colors.surface }}
        style={styles.scrollView}>
        <Header />
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Step One</Text>
            <Button
              title="Learn More"
              color={Theme.colors.primary}
              accessibilityLabel="Learn more about this green button"
              onPress={() =>
                this.props.navigation.navigate('Home')
              }
            />
            <Text style={styles.sectionDescription}>
              Edit <Text style={styles.highlight}>App.js</Text> to change this
              screen and then come back to see your edits. ➕
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>See Your Changes</Text>
            <Text style={styles.sectionDescription}>
              <ReloadInstructions />
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Debug</Text>
            <Text style={styles.sectionDescription}>
              <DebugInstructions />
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Learn More</Text>
            <Text style={styles.sectionDescription}>
              Read the docs to discover what to do next:
            </Text>
          </View>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    flex: 1 / 4,
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: Theme.size.s7,
  },
  scrollView: {
    flex: 3,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    ...Theme.font.body,
    backgroundColor: '#f7f6f4',
  },
  sectionContainer: {
    marginTop: Theme.size.s7,
    paddingHorizontal: Theme.size.s6,
  },
  sectionTitle: {
    ...Theme.font.heading,
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: Theme.size.s4,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Theme.colors.dark,
    fontSize: Theme.size.s5,
    fontWeight: '600',
    padding: 4,
    paddingRight: Theme.size.s5,
    textAlign: 'right',
  },
});

export default HomeScreen;
