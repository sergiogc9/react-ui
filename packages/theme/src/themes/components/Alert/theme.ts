import { Alert } from './types';

const alertTheme: Alert = {
	colors: {
		error: { bg: '', icon: '', text: '' },
		info: { bg: '', icon: '', text: '' },
		success: { bg: '', icon: '', text: '' },
		warning: { bg: '', icon: '', text: '' },
		modes: {
			light: {
				error: { bg: 'red.500', icon: 'neutral.0', text: 'neutral.0' },
				info: { bg: 'blue.500', icon: 'neutral.0', text: 'neutral.0' },
				success: { bg: 'green.500', icon: 'neutral.0', text: 'neutral.0' },
				warning: { bg: 'yellow.500', icon: 'neutral.0', text: 'neutral.0' }
			},
			dark: {
				error: { bg: 'red.600', icon: 'red.100', text: 'red.100' },
				info: { bg: 'blue.600', icon: 'blue.100', text: 'blue.100' },
				success: { bg: 'green.600', icon: 'green.100', text: 'green.100' },
				warning: { bg: 'yellow.600', icon: 'yellow.50', text: 'neutral.50' }
			}
		}
	},
	sizes: {
		s: { minHeight: 40, padding: 2 },
		m: { minHeight: 48, padding: 3 }
	}
};

export default alertTheme;
