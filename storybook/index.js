// if you use expo remove this line
import { AppRegistry } from 'react-native';

import { getStorybookUI, configure, addParameters, addDecorator } from '@storybook/react-native';
import './rn-addons';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

// enables backgrounds for all stories
addDecorator(withBackgrounds);

addParameters({
  backgrounds: [
    { name: 'dark', value: '#22201b' },
    { name: 'light', value: '#fbfaf9', default: true },
  ],
});

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  // theme: darkTheme,
  asyncStorage: false,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
