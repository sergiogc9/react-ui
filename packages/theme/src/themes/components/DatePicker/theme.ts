import { DatePicker } from './types';

const datePickerTheme: DatePicker = {
	colors: {
		disabled: '',
		hover: '',
		selected: '',
		text: '',
		today: '',
		todayBackground: '',
		modes: {
			light: {
				disabled: 'neutral.200',
				hover: 'primary.100',
				selected: 'primary.700',
				text: 'neutral.900',
				today: 'primary.800',
				todayBackground: 'primary.100'
			},
			dark: {
				disabled: 'neutral.700',
				hover: 'primary.700',
				selected: 'primary.500',
				text: 'common.text',
				today: 'primary.100',
				todayBackground: 'primary.800'
			}
		}
	},
	day: {
		borderRadius: '50%',
		size: 36
	},
	fontSize: 1,
	month: {
		borderRadius: 2,
		height: 60
	}
};

export default datePickerTheme;
