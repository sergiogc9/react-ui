import { Input } from './types';

const inputTheme: Input = {
	aspectSize: {
		l: { height: 56 },
		m: { height: 48 },
		s: { height: 40 }
	},
	color: {
		default: 'neutral.600',
		borderDefault: 'neutral.300',
		disabled: 'neutral.300',
		error: 'red.500',
		hover: 'neutral.900',
		information: 'blue.500',
		success: 'green.500'
	},
	removeButton: {
		bg: 'neutral.100',
		color: 'neutral.900'
	}
};

export default inputTheme;
