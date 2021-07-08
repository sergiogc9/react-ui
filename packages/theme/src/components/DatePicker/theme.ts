import { DatePicker } from './types';

const datePickerTheme: DatePicker = {
	colors: {
		disabled: 'neutral.200',
		hover: 'primary.100',
		selected: 'primary.700',
		text: 'neutral.900',
		today: 'primary.800',
		todayBackground: 'primary.100'
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
