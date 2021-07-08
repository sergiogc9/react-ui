import { IconButton } from './types';

const iconButtonTheme: IconButton = {
	colors: {
		default: {
			borderActive: 'primary.200',
			icon: 'neutral.800',
			background: {
				default: 'transparent',
				hover: 'neutral.50',
				active: 'neutral.100'
			}
		},
		floating: {
			borderActive: 'primary.200',
			icon: 'neutral.0',
			background: {
				default: 'primary.500',
				hover: 'primary.400',
				active: 'primary.600'
			}
		}
	},
	sizes: {
		s: 24,
		m: 32,
		l: 40
	}
};

export default iconButtonTheme;
