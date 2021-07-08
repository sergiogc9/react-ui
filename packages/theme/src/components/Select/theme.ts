import selectLocales from './locales';
import { Select } from './types';

const SelectTheme: Select = {
	defaultFontColor: 'neutral.900',
	locales: selectLocales,
	option: {
		color: {
			neutral: {
				default: 'neutral.700',
				hover: 'neutral.700',
				active: 'neutral.900',
				bgHover: 'neutral.50',
				bgActive: 'neutral.200'
			},
			primary: {
				default: 'neutral.700',
				hover: 'neutral.700',
				active: 'primary.500',
				bgHover: 'neutral.50',
				bgActive: 'primary.50'
			}
		},
		height: {
			s: 32,
			m: 40,
			l: 48
		}
	}
};

export default SelectTheme;
