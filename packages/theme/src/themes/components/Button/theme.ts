import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';

import { RecursivePartial } from 'theme/global.types';

import { Button, ButtonColors } from './types';

const lightColors: ButtonColors = {
	danger: {
		focusShadow: 'red.300',
		background: {
			default: 'red.500',
			hover: 'red.300',
			active: 'red.700'
		}
	},
	default: {
		focusShadow: 'primary.200',
		background: {
			default: 'primary.700',
			hover: 'primary.500',
			active: 'primary.800'
		}
	},
	link: {
		focusShadow: 'primary.200',
		text: 'blue.700',
		background: {
			default: 'transparent',
			hover: 'transparent',
			active: 'transparent'
		}
	},
	primary: {
		focusShadow: 'primary.200',
		background: {
			default: 'primary.500',
			hover: 'primary.400',
			active: 'primary.600'
		}
	},
	secondary: {
		border: 'neutral.300',
		focusShadow: 'primary.200',
		text: 'neutral.800',
		background: {
			default: 'neutral.0',
			hover: 'neutral.100',
			active: 'neutral.200'
		}
	},
	subtle: {
		border: 'transparent',
		focusShadow: 'primary.200',
		text: 'neutral.600',
		background: {
			default: 'transparent',
			hover: 'neutral.50',
			active: 'neutral.100'
		}
	},
	warning: {
		focusShadow: 'yellow.200',
		text: 'neutral.800',
		background: {
			default: 'yellow.500',
			hover: 'yellow.300',
			active: 'yellow.900'
		}
	}
};

const darkColors: ButtonColors = merge<ButtonColors, RecursivePartial<ButtonColors>>(cloneDeep(lightColors), {
	link: {
		text: 'blue.400'
	},
	secondary: {
		border: 'neutral.700',
		focusShadow: 'neutral.500',
		text: 'neutral.100',
		background: {
			default: 'neutral.800',
			hover: 'neutral.700',
			active: 'neutral.600'
		}
	},
	subtle: {
		border: 'transparent',
		focusShadow: 'neutral.500',
		text: 'neutral.400',
		background: {
			default: 'transparent',
			hover: 'neutral.700',
			active: 'neutral.600'
		}
	}
});

const buttonTheme: Button = {
	colors: {
		...lightColors,
		modes: {
			light: lightColors,
			dark: darkColors
		}
	},
	fontSizes: {
		s: 1,
		m: 2,
		l: 2
	},
	heights: {
		s: 32,
		m: 40,
		l: 48
	},
	iconMargins: {
		s: '4px',
		m: '8px',
		l: '12px'
	},
	lineHeights: {
		s: 0,
		m: 0,
		l: 2
	},
	paddings: {
		s: {
			default: '6px 16px',
			leftIcon: '6px 12px 6px 8px',
			rightIcon: '6px 8px 6px 12px'
		},
		m: {
			default: '10px 20px',
			leftIcon: '10px 16px 10px 12px',
			rightIcon: '10px 12px 10px 16px'
		},
		l: {
			default: '12px 24px',
			leftIcon: '12px 20px 12px 16px',
			rightIcon: '12px 16px 12px 20px'
		}
	}
};

export default buttonTheme;
