import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { Icon } from '.';

import {
	color,
	select,
	object,
} from '@storybook/addon-knobs';

storiesOf('Atoms|Icon', module)
	.addDecorator(withKnobs)
	.add('Default', () => {
		const symbols = {
			'Chevron Up': 'ChevronUp',
			'Chevron Down': 'ChevronDown',
			'Chevron Right': 'ChevronRight',
			'Chevron Left': 'ChevronLeft',
			'Edit': 'Edit',
			'Add': 'Add',
			'Cancel': 'Cancel',
			'More': 'More',
			'Settings': 'Settings',
			'Pin': 'Pin',
			'PinFill': 'PinFill',
			'Unpin': 'Unpin',
			'Link': 'Link',
			'Filter': 'Filter',
			'Knowledge Article': 'KnowledgeArticle',
			'Zoom': 'Zoom',
			'Zoom In': 'ZoomIn',
			'Zoom Out': 'ZoomOut',
			'Map Pin': 'MapPin',
			'Map Pin 2': 'MapPin2',
			'Locale Language': 'LocaleLanguage',
			'Search': 'Search',
			'Camera': 'Camera',
			'Attach': 'Attach',
			'Page': 'Page',
			'Page Solid': 'PageSolid',
			'Forward': 'Forward',
			'Back': 'Back',
			'Refresh': 'Refresh',
			'Share': 'Share',
			'Lock': 'Lock',
			'Unlock': 'Unlock',
			'Favorite Star': 'FavoriteStar',
			'Favorite Star Fill': 'FavoriteStarFill',
			'Unfavorite': 'Unfavorite',
			'Remove': 'Remove',
			'Checkbox': 'Checkbox',
			'Checkbox Fill': 'CheckboxFill',
			'Checkbox Indeterminate': 'CheckboxIndeterminate',
			'CheckMark': 'CheckMark',
			'Up': 'Up',
			'Down': 'Down',
			'Delete': 'Delete',
			'Save': 'Save',
			'Cloud': 'Cloud',
			'Page Left': 'PageLeft',
			'Page Right': 'PageRight',
			'Error': 'Error',
			'Warning': 'Warning',
			'Gripper Bar Horizontal': 'GripperBarHorizontal',
			'Gripper Bar Vertical': 'GripperBarVertical',
			'Contact': 'Contact',
			'Contact Fill': 'ContactFill',
			'Contact Info': 'ContactInfo',
			'Calendar': 'Calendar',
			'Calendar Fill': 'CalendarFill',
			'Calendar Day': 'CalendarDay',
			'Calendar Week': 'CalendarWeek',
			'Redo': 'Redo',
			'Undo': 'Undo',
			'Move': 'Move',
			'Browse Photos': 'BrowsePhotos',
			'Folder': 'Folder',
			'Folder Fill': 'FolderFill',
			'Folder Open': 'FolderOpen',
			'Right Quote': 'RightQuote',
			'Left Quote': 'LeftQuote',
			'Right Double Quote': 'RightDoubleQuote',
			'Left Double Quote': 'LeftDoubleQuote',
			'Help': 'Help',
			'Select All': 'SelectAll',
			'Import': 'Import',
			'Import All': 'ImportAll',
			'Photo': 'Photo',
			'Picture': 'Picture',
			'Sort': 'Sort',
			'Open File': 'OpenFile',
			'Tag': 'Tag',
			'Library': 'Library',
			'People': 'People',
			'Accept': 'Accept',
			'Comment': 'Comment',
			'Info': 'Info',
			'Health': 'Health',
			'Chevron Up Small': 'ChevronUpSmall',
			'Chevron Down Small': 'ChevronDownSmall',
			'Chevron Left Small': 'ChevronLeftSmall',
			'Chevron Right Small': 'ChevronRightSmall',
			'Unknown': 'Unknown',
			'Chevron Up Medium': 'ChevronUpMedium',
			'Chevron Down Medium': 'ChevronDownMedium',
			'Chevron Left Medium': 'ChevronLeftMedium',
			'Chevron Right Medium': 'ChevronRightMedium',
			'Media': 'Media',
			'Puzzle': 'Puzzle',
			'Heart': 'Heart',
			'Heart Fill': 'HeartFill',
			'Family': 'Family',
			'Date/Time': 'DateTime',
			'POI': 'POI',
			'Unit': 'Unit',
			'Radio Button Off': 'RadioButtonOff',
			'Radio Bullet 2': 'RadioBullet2',
			'Pan Mode': 'PanMode',
			'Hide': 'Hide',
			'Export': 'Export',
			'Flow': 'Flow',
			'Relationship': 'Relationship',
		};
		const symbol = select('Icon', symbols, 'Unknown');
		const size = select('Size', ['small', 'medium', 'large'], 'medium');

		const iconColor = color('color', '#498205');
		const backgroundColor = color('background', '#fbfaf9');
		const customStyles = object('Styles', {
			padding: 24,
		});

		return (
			<Icon
				{...{
					symbol,
					size,
					iconColor,
					backgroundColor,
					customStyles,
				}}
			/>
		);
	});