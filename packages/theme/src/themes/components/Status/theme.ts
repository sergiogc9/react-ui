import { Status } from './types';

const statusTheme: Status = {
	colors: {
		blue: { bg: '', color: '' },
		green: { bg: '', color: '' },
		grey: { bg: '', color: '' },
		red: { bg: '', color: '' },
		yellow: { bg: '', color: '' },
		modes: {
			dark: {
				blue: {
					bg: 'blue.500',
					color: 'neutral.0'
				},
				green: {
					bg: 'green.500',
					color: 'neutral.0'
				},
				grey: {
					bg: 'neutral.500',
					color: 'neutral.900'
				},
				red: {
					bg: 'red.500',
					color: 'neutral.0'
				},
				yellow: {
					bg: 'yellow.500',
					color: 'neutral.800'
				}
			},
			light: {
				blue: {
					bg: 'blue.500',
					color: 'neutral.0'
				},
				green: {
					bg: 'green.500',
					color: 'neutral.0'
				},
				grey: {
					bg: 'neutral.500',
					color: 'neutral.900'
				},
				red: {
					bg: 'red.500',
					color: 'neutral.0'
				},
				yellow: {
					bg: 'yellow.500',
					color: 'neutral.800'
				}
			}
		}
	}
};

export default statusTheme;
