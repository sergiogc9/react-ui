import { variant } from 'styled-system';

export default variant({
	prop: 'location',
	variants: {
		bottom: {
			bottom: 0,
			background: 'linear-gradient(to bottom, rgba(137, 137, 137, 0) 11.01%, rgba(157, 161, 163, 0.2) 99.51%)',
			height: '8px',
			left: 0,
			width: '100%'
		},
		left: {
			background: 'linear-gradient(to left, rgba(137, 137, 137, 0) 11.01%, rgba(157, 161, 163, 0.2) 99.51%)',
			top: 0,
			height: '100%',
			left: 0,
			width: '8px'
		},
		right: {
			background: 'linear-gradient(to right, rgba(137, 137, 137, 0) 11.01%, rgba(157, 161, 163, 0.2) 99.51%)',
			top: 0,
			height: '100%',
			right: 0,
			width: '8px'
		},
		top: {
			background: 'linear-gradient(to top, rgba(137, 137, 137, 0) 11.01%, rgba(157, 161, 163, 0.2) 99.51%)',
			height: '8px',
			left: 0,
			top: 0,
			width: '100%'
		}
	}
});
