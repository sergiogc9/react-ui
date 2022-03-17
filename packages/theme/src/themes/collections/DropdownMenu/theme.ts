import { DropdownMenu } from './types';

const dropdownMenuTheme: DropdownMenu = {
	colors: {
		bgHover: '',
		optionText: '',
		text: '',
		modes: {
			light: {
				bgHover: 'neutral.50',
				optionText: 'neutral.700',
				text: 'neutral.900'
			},
			dark: {
				bgHover: 'neutral.700',
				optionText: 'neutral.300',
				text: 'common.text'
			}
		}
	}
};

export default dropdownMenuTheme;
