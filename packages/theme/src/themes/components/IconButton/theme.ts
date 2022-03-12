import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';

import { RecursivePartial } from 'theme/global.types';

import { IconButton, IconButtonColors } from './types';

const lightColors: IconButtonColors = {
	borderActive: 'primary.400',
	icon: 'primary.500',
	background: {
		default: 'transparent',
		hover: 'neutral.50',
		active: 'neutral.100'
	}
};

const darkColors: IconButtonColors = merge<IconButtonColors, RecursivePartial<IconButtonColors>>(
	cloneDeep(lightColors),
	{
		borderActive: 'primary.400',
		icon: 'primary.500',
		background: {
			default: 'transparent',
			hover: 'neutral.700',
			active: 'neutral.800'
		}
	}
);

const iconButtonTheme: IconButton = {
	colors: {
		...lightColors,
		modes: {
			light: lightColors,
			dark: darkColors
		}
	},
	sizes: {
		s: 24,
		m: 32,
		l: 40,
		xl: 48
	}
};

export default iconButtonTheme;
