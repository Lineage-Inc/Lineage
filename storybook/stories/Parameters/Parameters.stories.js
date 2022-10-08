import { addParameters, storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from '../CenterView';

const globalParameter = 'globalParameter';
const chapterParameter = 'chapterParameter';
const storyParameter = 'storyParameter';

addParameters({ globalParameter });

storiesOf('Atoms|Parameters', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addParameters({ chapterParameter })
	.add(
		'passed to story',
		({ parameters }) => (
			<Text>Parameters are {JSON.stringify(parameters)}</Text>
		),
		{
			storyParameter,
		},
	);