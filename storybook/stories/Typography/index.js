import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export const Typography = ({
	text,
	variant,
	size,
}) => {
	let fontSize = '';
	switch (size) {
		case '1':
			fontSize = styles.display1;
			break;
		case '2':
			fontSize = styles.display2;
			break;
		case '3':
			fontSize = styles.heading1;
			break;
		case '4':
			fontSize = styles.heading2;
			break;
		case '5':
			fontSize = styles.heading3;
			break;
		case '6':
			fontSize = styles.heading4;
			break;
		case '7':
			fontSize = styles.heading5;
			break;
		case '8':
			fontSize = styles.heading6;
			break;
	}
	return (
		<Text variant={variant} style={Object.assign({variant}, styles.heading, fontSize, variant === 'bold' ? styles.bold : variant === 'extra-bold' ? styles.extraBold : '')}>{text}</Text>
	);
};

Typography.defaultProps = {
	text: 'This is not a heading',
	variant: 'default',
	size: '1',
};

Typography.propTypes = {
	text: PropTypes.string.isRequired,
	variant: PropTypes.oneOf(['default', 'bold', 'extra-bold']),
	size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8']),
};

export const Paragraph = ({
	text,
	variant,
	size,
}) => {
	let fontSize = '';
	switch (size) {
		case '1':
			fontSize = styles.paragraph1;
			break;
		case '2':
			fontSize = styles.paragraph2;
			break;
		case '3':
			fontSize = styles.paragraph3;
			break;
		case '4':
			fontSize = styles.caption;
			break;
		case '5':
			fontSize = styles.small;
			break;
	}
	let fontVariant = '';
	switch (variant) {
		case 'bold':
			fontVariant = styles.bold;
			break;
		case 'underline':
			fontVariant = styles.underline;
			break;
		case 'uppercase':
			fontVariant = styles.uppercase;
			break;
	}
	return (
		<Text variant={variant} style={Object.assign({}, styles.paragraph, fontSize, fontVariant)}>{text}</Text>
	);
};

Paragraph.defaultProps = {
	text: 'The quick onyx goblin jumps over the lazy dwarf. Cozy lummox gives pen to smart squid who asks for job.',
	variant: 'default',
	size: '2',
};

Paragraph.propTypes = {
	text: PropTypes.string.isRequired,
	variant: PropTypes.oneOf(['default', 'bold', 'underline', 'uppercase']),
	size: PropTypes.oneOf(['1', '2', '3', '4', '5']),
};