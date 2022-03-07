import { FloatingButton } from './types';

const floatingButtonTheme: FloatingButton = {
	colors: {
		focusShadow: 'primary.200',
		background: {
			default: 'primary.500',
			hover: 'primary.400',
			active: 'primary.600'
		}
	},
	heights: {
		s: 32,
		m: 40,
		l: 48
	},
	iconMargins: {
		s: '4px',
		m: '8px',
		l: '8px'
	},
	paddings: {
		s: {
			default: 2,
			withText: '8px 12px 8px 8px'
		},
		m: {
			default: 2,
			withText: '8px 16px 8px 12px'
		},
		l: {
			default: 2,
			withText: '8px 20px 8px 12px'
		}
	}
};

export default floatingButtonTheme;
