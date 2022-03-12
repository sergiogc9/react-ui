import { Counter } from './types';

const counterTheme: Counter = {
	colors: {
		blue: {
			bg: 'blue.100',
			color: 'blue.900'
		},
		green: {
			bg: 'green.100',
			color: 'green.900'
		},
		grey: {
			bg: 'neutral.100',
			color: 'neutral.700'
		},
		red: {
			bg: 'red.100',
			color: 'red.900'
		},
		yellow: {
			bg: 'yellow.100',
			color: 'yellow.900'
		},
		modes: {
			light: {
				blue: {
					bg: 'blue.100',
					color: 'blue.900'
				},
				green: {
					bg: 'green.100',
					color: 'green.900'
				},
				grey: {
					bg: 'neutral.100',
					color: 'neutral.700'
				},
				red: {
					bg: 'red.100',
					color: 'red.900'
				},
				yellow: {
					bg: 'yellow.100',
					color: 'yellow.900'
				}
			},
			dark: {
				blue: {
					bg: 'blue.600',
					color: 'blue.100'
				},
				green: {
					bg: 'green.600',
					color: 'green.100'
				},
				grey: {
					bg: 'neutral.600',
					color: 'neutral.100'
				},
				red: {
					bg: 'red.600',
					color: 'red.100'
				},
				yellow: {
					bg: 'yellow.600',
					color: 'yellow.100'
				}
			}
		}
	},
	sizes: {
		s: 20,
		m: 24
	}
};

export default counterTheme;
