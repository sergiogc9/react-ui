import { UserMenu } from './types';

const userMenuTheme: UserMenu = {
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

export default userMenuTheme;
