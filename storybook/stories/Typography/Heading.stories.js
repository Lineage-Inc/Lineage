import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { text, select } from '@storybook/addon-knobs';
import CenterView from '../CenterView';
import { Typography } from '.';
import styles from './styles';

storiesOf('Atoms|Typography/Display 1', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.add('Default', () => {
		return (
			<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'default')} size={select('Size', ['1', '2'], '1')}>
				{text('Text', 'Display 01\nSemi-Bold')}
			</Typography>
		)
	})
	.add('Bold', () => {
		return (
			<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'bold')} size={select('Size', ['1', '2'], '1')}>
				{text('Text', 'Display 01\nBold')}
			</Typography>
		)
	})
	.add('Extra-Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'extra-bold')} size={select('Size', ['1', '2'], '1')}>
			{text('Text', 'Display 01\nExtra-Bold')}
		</Typography>
	));

storiesOf('Atoms|Typography/Display 2', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.addParameters()
	.add('Default', () => {
		return (
			<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'default')} size={select('Size', ['1', '2'], '2')}>
				{text('Text', 'Display 02\nSemi-Bold')}
			</Typography>
		)
	})
	.add('Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'bold')} size={select('Size', ['1', '2'], '2')}>
			{text('Text', 'Display 02\nBold')}
		</Typography>
	))
	.add('Extra-Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'extra-bold')} size={select('Size', ['1', '2'], '2')}>
			{text('Text', 'Display 02\nExtra-Bold')}
		</Typography>
	));

storiesOf('Atoms|Typography/Heading 1', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.addParameters()
	.add('Default', () => {
		return (
			<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'default')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '3')}>
				{text('Text', 'Heading 01\nSemi-Bold')}
			</Typography>
		)
	})
	.add('Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'bold')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '3')}>
			{text('Text', 'Heading 01\nBold')}
		</Typography>
	))
	.add('Extra-Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'extra-bold')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '3')}>
			{text('Text', 'Heading 01\nExtra-Bold')}
		</Typography>
	));

storiesOf('Atoms|Typography/Heading 2', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.addParameters()
	.add('Default', () => {
		return (
			<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'default')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '4')}>
				{text('Text', 'Heading 02\nSemi-Bold')}
			</Typography>
		)
	})
	.add('Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'bold')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '4')}>
			{text('Text', 'Heading 02\nBold')}
		</Typography>
	))
	.add('Extra-Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'extra-bold')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '4')}>
			{text('Text', 'Heading 02\nExtra-Bold')}
		</Typography>
	));

storiesOf('Atoms|Typography/Heading 3', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.addParameters()
	.add('Default', () => {
		return (
			<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'default')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '5')}>
				{text('Text', 'Heading 03\nSemi-Bold')}
			</Typography>
		)
	})
	.add('Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'bold')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '5')}>
			{text('Text', 'Heading 03\nBold')}
		</Typography>
	))
	.add('Extra-Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'extra-bold')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '5')}>
			{text('Text', 'Heading 03\nExtra-Bold')}
		</Typography>
	));

storiesOf('Atoms|Typography/Heading 4', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.addParameters()
	.add('Default', () => {
		return (
			<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'default')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '6')}>
				{text('Text', 'Heading 04\nSemi-Bold')}
			</Typography>
		)
	})
	.add('Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'bold')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '6')}>
			{text('Text', 'Heading 04\nBold')}
		</Typography>
	))
	.add('Extra-Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'extra-bold')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '6')}>
			{text('Text', 'Heading 04\nExtra-Bold')}
		</Typography>
	));

storiesOf('Atoms|Typography/Heading 5', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.addParameters()
	.add('Default', () => {
		return (
			<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'default')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '7')}>
				{text('Text', 'Heading 05\nSemi-Bold')}
			</Typography>
		)
	})
	.add('Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'bold')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '7')}>
			{text('Text', 'Heading 05\nBold')}
		</Typography>
	))
	.add('Extra-Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'extra-bold')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '7')}>
			{text('Text', 'Heading 05\nExtra-Bold')}
		</Typography>
	));

storiesOf('Atoms|Typography/Heading 6', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.addParameters()
	.add('Default', () => {
		return (
			<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'default')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '8')}>
				{text('Text', 'Heading 06\nSemi-Bold')}
			</Typography>
		)
	})
	.add('Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'bold')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '8')}>
			{text('Text', 'Heading 06\nBold')}
		</Typography>
	))
	.add('Extra-Bold', () => (
		<Typography variant={select('Variant', ['default', 'bold', 'extra-bold'], 'extra-bold')} size={select('Size', ['3', '4', '5', '6', '7', '8'], '8')}>
			{text('Text', 'Heading 06\nExtra-Bold')}
		</Typography>
	));