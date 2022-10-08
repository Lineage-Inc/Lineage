import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { Text } from 'react-native';
import Button from '.';
import CenterView from '../CenterView';
import styles from './styles';

storiesOf('Molecules|Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('with text', () => {
    const variants = {
      Default: 'default',
      Primary: 'primary',
      Secondary: 'secondary',
    };
    const variant = select('Variant', variants, 'default');
    return (
      <Button onPress={action('clicked-text')} disabled={boolean('Disabled', false)} {...{variant}}>
        <Text style={styles.buttonText}>{text('Button text', 'Hello Button')}</Text>
      </Button>
    )
  })
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')} variant={'primary'}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
