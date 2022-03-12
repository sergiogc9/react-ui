import { LoadingBar } from './types';

const loadingBarTheme: LoadingBar = {
	colors: {
		active: 'primary.500',
		background: 'neutral.100',
		modes: {
			light: {
				active: 'primary.500',
				background: 'neutral.100'
			},
			dark: {
				active: 'primary.400',
				background: 'neutral.700'
			}
		}
	}
};

export default loadingBarTheme;
