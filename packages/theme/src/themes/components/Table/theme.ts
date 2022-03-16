import { Table } from './types';

const tableTheme: Table = {
	colors: {
		content: {
			bg: '',
			bgHover: '',
			text: ''
		},
		header: {
			bg: '',
			bgHover: '',
			border: '',
			text: ''
		},
		modes: {
			light: {
				header: {
					bg: 'primary.100',
					bgHover: 'primary.50',
					border: 'primary.100',
					text: 'primary.800'
				},
				content: {
					bg: 'neutral.0',
					bgHover: 'neutral.50',
					text: 'common.text'
				}
			},
			dark: {
				header: {
					bg: 'primary.800',
					bgHover: 'primary.700',
					border: 'primary.800',
					text: 'common.text'
				},
				content: {
					bg: 'common.background',
					bgHover: 'neutral.700',
					text: 'common.text'
				}
			}
		}
	}
};

export default tableTheme;
