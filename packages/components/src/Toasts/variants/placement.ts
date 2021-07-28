import { variant } from 'styled-system';

export default () => {
	return variant({
		prop: 'placement',
		variants: {
			bottom: {
				alignItems: 'center',
				bottom: 0,
				flexDirection: 'column-reverse',
				left: '50%',
				transform: 'translate(-50%, 0)'
			},
			'bottom-left': {
				alignItems: 'flex-start',
				flexDirection: 'column-reverse',
				bottom: 0,
				left: 0
			},
			'bottom-right': {
				alignItems: 'flex-end',
				bottom: 0,
				flexDirection: 'column-reverse',
				right: 0
			},
			top: {
				alignItems: 'center',
				flexDirection: 'column',
				left: '50%',
				top: 0,
				transform: 'translate(-50%, 0)'
			},
			'top-left': {
				alignItems: 'flex-start',
				flexDirection: 'column',
				left: 0,
				top: 0
			},
			'top-right': {
				alignItems: 'flex-end',
				flexDirection: 'column',
				right: 0,
				top: 0
			}
		}
	});
};
