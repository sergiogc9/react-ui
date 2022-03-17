import { Alert } from './types';

const alertTheme: Alert = {
	colors: {
		error: { bg: '', icon: '', text: '' },
		info: { bg: '', icon: '', text: '' },
		success: { bg: '', icon: '', text: '' },
		warning: { bg: '', icon: '', text: '' },
		modes: {
			light: {
				error: { bg: 'red.100', icon: 'red.700', text: 'red.800' },
				info: { bg: 'blue.50', icon: 'blue.800', text: 'blue.800' },
				success: { bg: 'green.100', icon: 'green.900', text: 'green.900' },
				warning: { bg: 'yellow.50', icon: 'yellow.900', text: 'neutral.900' }
			},
			dark: {
				error: { bg: 'red.600', icon: 'red.100', text: 'red.100' },
				info: { bg: 'blue.600', icon: 'blue.100', text: 'blue.100' },
				success: { bg: 'green.600', icon: 'green.100', text: 'green.100' },
				warning: { bg: 'yellow.600', icon: 'yellow.50', text: 'neutral.50' }
			}
		}
	}
};

export default alertTheme;
