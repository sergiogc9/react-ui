import { Switch } from './types';

const switchTheme: Switch = {
	backgroundSizes: {
		s: { width: '26px', height: '10px' },
		m: { width: '34px', height: '14px' }
	},
	colors: {
		background: {
			checked: '',
			default: '',
			disabled: ''
		},
		toggle: {
			color: ''
		},
		modes: {
			light: {
				background: {
					checked: 'primary.500',
					default: 'neutral.900',
					disabled: 'neutral.300'
				},
				toggle: {
					color: 'primary.500'
				}
			},
			dark: {
				background: {
					checked: 'primary.500',
					default: 'neutral.500',
					disabled: 'neutral.300'
				},
				toggle: {
					color: 'primary.500'
				}
			}
		}
	},
	toggleSizes: {
		s: { width: '16px', height: '16px' },
		m: { width: '20px', height: '20px' }
	}
};

export default switchTheme;
