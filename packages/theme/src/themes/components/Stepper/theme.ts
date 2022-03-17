import { Stepper } from './types';

const stepperTheme: Stepper = {
	circle: {
		compacted: {
			fontSize: 0,
			size: 24
		},
		'compacted-no-line': {
			fontSize: 0,
			size: 24
		},
		horizontal: {
			fontSize: 2,
			size: 32
		},
		vertical: {
			fontSize: 2,
			size: 32
		}
	},
	colors: {
		active: '',
		disabled: '',
		disabledLine: '',
		text: '',
		modes: {
			light: {
				active: 'primary.500',
				disabled: 'neutral.500',
				disabledLine: 'neutral.200',
				text: 'neutral.900'
			},
			dark: {
				active: 'primary.500',
				disabled: 'neutral.500',
				disabledLine: 'neutral.700',
				text: 'neutral.100'
			}
		}
	}
};

export default stepperTheme;
