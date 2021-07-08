import { variant } from 'styled-system';

export default variant({
	prop: 'location',
	variants: {
		'bottom-left': {
			bottom: 0,
			left: 0,
			transform: 'scale(1) translate(-60%, 50%)'
		},
		'bottom-right': {
			bottom: 0,
			right: 0,
			transform: 'scale(1) translate(60%, 50%)'
		},
		'top-left': {
			top: 0,
			left: 0,
			transform: 'scale(1) translate(-50%, -60%)'
		},
		'top-right': {
			top: 0,
			right: 0,
			transform: 'scale(1) translate(50%, -60%)'
		}
	}
});
