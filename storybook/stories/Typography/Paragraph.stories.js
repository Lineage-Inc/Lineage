import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { text, select } from '@storybook/addon-knobs';
import CenterView from '../CenterView';
import { Paragraph } from '.';

storiesOf('Atoms|Typography/Paragraph 1', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.addParameters()
	.add('Default', () => {
		return (
			<Paragraph variant={select('Variant', ['default', 'bold', 'underline'], 'default')} size={select('Size', ['1', '2', '3'], '1')}>
				{text('Text', 'Paragraph 01\nRegular')}
			</Paragraph>
		)
	})
	.add('Bold', () => (
		<Paragraph variant={select('Variant', ['default', 'bold', 'underline'], 'bold')} size={select('Size', ['3', '4', '5'], '1')}>
			{text('Text', 'Heading 01\nBold')}
		</Paragraph>
	))
	.add('Underline', () => (
		<Paragraph variant={select('Variant', ['default', 'bold', 'underline'], 'underline')} size={select('Size', ['3', '4', '5'], '1')}>
			{text('Text', 'Heading 01\nUnderline')}
		</Paragraph>
	));

storiesOf('Atoms|Typography/Paragraph 2', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.addParameters()
	.add('Default', () => {
		return (
			<Paragraph variant={select('Variant', ['default', 'bold', 'underline'], 'default')} size={select('Size', ['3', '4', '5'], '2')}>
				{text('Text', 'Heading 02\nSemi-Bold')}
			</Paragraph>
		)
	})
	.add('Bold', () => (
		<Paragraph variant={select('Variant', ['default', 'bold', 'underline'], 'bold')} size={select('Size', ['3', '4', '5'], '2')}>
			{text('Text', 'Heading 02\nBold')}
		</Paragraph>
	))
	.add('Underline', () => (
		<Paragraph variant={select('Variant', ['default', 'bold', 'underline'], 'underline')} size={select('Size', ['3', '4', '5'], '2')}>
			{text('Text', 'Heading 02\nUnderline')}
		</Paragraph>
	));

storiesOf('Atoms|Typography/Paragraph 3', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.addParameters()
	.add('Default', () => {
		return (
			<Paragraph variant={select('Variant', ['default', 'bold', 'underline'], 'default')} size={select('Size', ['3', '4', '5'], '3')}>
				{text('Text', 'Heading 03\nSemi-Bold')}
			</Paragraph>
		)
	})
	.add('Bold', () => (
		<Paragraph variant={select('Variant', ['default', 'bold', 'underline'], 'bold')} size={select('Size', ['3', '4', '5'], '3')}>
			{text('Text', 'Heading 03\nBold')}
		</Paragraph>
	))
	.add('Underline', () => (
		<Paragraph variant={select('Variant', ['default', 'bold', 'underline'], 'underline')} size={select('Size', ['3', '4', '5'], '3')}>
			{text('Text', 'Heading 03\nUnderline')}
		</Paragraph>
	));

storiesOf('Atoms|Typography/Caption', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.addParameters()
	.add('Default', () => {
		return (
			<Paragraph variant={select('Variant', ['default', 'bold', 'uppercase'], 'default')} size={'4'}>
				{text('Text', 'Caption\nRegular')}
			</Paragraph>
		)
	})
	.add('Bold', () => (
		<Paragraph variant={select('Variant', ['default', 'bold', 'uppercase'], 'bold')} size={'4'}>
			{text('Text', 'Caption\nBold')}
		</Paragraph>
	))
	.add('Uppercase', () => (
		<Paragraph variant={select('Variant', ['default', 'bold', 'uppercase'], 'uppercase')} size={'4'}>
			{text('Text', 'Caption\nUppercase')}
		</Paragraph>
	));

storiesOf('Atoms|Typography/Small', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.addParameters()
	.add('Default', () => {
		return (
			<Paragraph variant={select('Variant', ['default', 'bold', 'uppercase'], 'default')} size={'5'}>
				{text('Text', 'Heading 05\nSemi-Bold')}
			</Paragraph>
		)
	})
	.add('Bold', () => (
		<Paragraph variant={select('Variant', ['default', 'bold', 'uppercase'], 'bold')} size={'5'}>
			{text('Text', 'Heading 05\nBold')}
		</Paragraph>
	))
	.add('Uppercase', () => (
		<Paragraph variant={select('Variant', ['default', 'bold', 'uppercase'], 'uppercase')} size={'5'}>
			{text('Text', 'Heading 05\nUppercase')}
		</Paragraph>
	));