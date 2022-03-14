import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';

import { RecursivePartial } from 'theme/global.types';

import selectLocales from './locales';
import { Select, SelectColors } from './types';

const lightColors: SelectColors = {
	option: {
		neutral: {
			default: 'neutral.700',
			hover: 'neutral.700',
			active: 'neutral.900',
			bgHover: 'neutral.50',
			bgActive: 'neutral.200'
		},
		primary: {
			default: 'neutral.700',
			hover: 'neutral.700',
			active: 'primary.500',
			bgHover: 'neutral.50',
			bgActive: 'primary.50'
		}
	}
};

const darkColors: SelectColors = merge<SelectColors, RecursivePartial<SelectColors>>(cloneDeep(lightColors), {
	option: {
		neutral: {
			default: 'neutral.300',
			hover: 'neutral.300',
			active: 'neutral.200',
			bgHover: 'neutral.600',
			bgActive: 'neutral.200'
		},
		primary: {
			default: 'neutral.300',
			hover: 'neutral.200',
			active: 'primary.600',
			bgHover: 'neutral.600',
			bgActive: 'primary.50'
		}
	}
});

const SelectTheme: Select = {
	colors: {
		...lightColors,
		modes: {
			light: lightColors,
			dark: darkColors
		}
	},
	locales: selectLocales,
	option: {
		height: {
			s: 32,
			m: 40,
			l: 48
		}
	}
};

export default SelectTheme;
