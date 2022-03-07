import { Alert } from './types';

const alertTheme: Alert = {
	colors: {
		error: { bg: 'red.100', icon: 'red.700', text: 'red.800' },
		info: { bg: 'blue.50', icon: 'blue.800', text: 'blue.800' },
		success: { bg: 'green.100', icon: 'green.900', text: 'green.900' },
		warning: { bg: 'yellow.50', icon: 'yellow.900', text: 'neutral.900' }
	}
};

export default alertTheme;
