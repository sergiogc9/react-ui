import { Modal } from './types';

const modalTheme: Modal = {
	colors: {
		bg: '',
		border: '',
		modes: {
			light: {
				bg: 'common.background',
				border: 'transparent'
			},
			dark: {
				bg: 'common.background',
				border: 'neutral.600'
			}
		}
	},
	sizes: {
		s: '360px',
		m: '480px',
		l: '800px',
		xl: '1120px'
	}
};

export default modalTheme;
