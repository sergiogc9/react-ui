import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { StyledStepperCircleLineProps } from '../types';

export default (props: StyledProps<StyledStepperCircleLineProps>) => {
	const pxLength = `${props.length}px`;

	return variant({
		prop: 'variant',
		variants: {
			compacted: {
				height: '2px',
				left: 'calc(100% + 2px)',
				top: 'calc(50% - 1px)',
				width: pxLength,
				'&::after': {
					height: '100%',
					width: '0%'
				}
			},
			'compacted-no-line': {
				display: 'none'
			},
			horizontal: {
				height: '2px',
				left: 'calc(100% + 2px)',
				top: 'calc(50% - 1px)',
				width: pxLength,
				'&::after': {
					height: '100%',
					width: '0%'
				}
			},
			vertical: {
				height: pxLength,
				left: 'calc(50% - 1px)',
				top: 'calc(100% + 2px)',
				width: '2px',
				'&::after': {
					height: '0%',
					width: '100%'
				}
			}
		}
	});
};
