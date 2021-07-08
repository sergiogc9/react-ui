import { Button } from './types';

const buttonTheme: Button = {
	borderRadius: {
		danger: 0,
		default: 0,
		floating: 3,
		link: 0,
		primary: 0,
		secondary: 0,
		subtle: 0,
		warning: 0
	},
	colors: {
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
		floating: {
			focusShadow: 'primary.200',
			background: {
				default: 'primary.500',
				hover: 'primary.400',
				active: 'primary.600'
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
				hover: 'yellow.200',
				active: 'yellow.900'
			}
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
