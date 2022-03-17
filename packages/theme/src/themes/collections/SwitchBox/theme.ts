import { SwitchBox } from './types';

const switchBoxTheme: SwitchBox = {
	colors: {
		bg: '',
		icon: {
			bg: '',
			color: ''
		},
		text: '',
		modes: {
			light: {
				bg: 'neutral.50',
				icon: {
					bg: 'neutral.100',
					color: 'neutral.500'
				},
				text: 'common.text'
			},
			dark: {
				bg: 'neutral.700',
				icon: {
					bg: 'neutral.600',
					color: 'neutral.200'
				},
				text: 'neutral.100'
			}
		}
	}
};

export default switchBoxTheme;
