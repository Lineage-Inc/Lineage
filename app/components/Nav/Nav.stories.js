import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { text, select } from '@storybook/addon-knobs';
import { Nav } from '.';

storiesOf('Molecules|Nav', module)
	.addDecorator(withKnobs)
	.addParameters()
	.add('Default', () => {
		return (
			<Nav symbol="Contact" title={text('Text', 'Navigation Link')}></Nav>
		)
	})