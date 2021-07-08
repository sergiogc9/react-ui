import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { StyledStepperTextProps } from '../types';

export default (props: StyledProps<StyledStepperTextProps>) => {
	return variant({
		prop: 'isEnabled',
		variants: {
			true: {
				color: props.color ?? props.theme.components.stepper.colors.text,
				fontWeight: props.fontWeight ?? (props.isCurrent ? 'bold' : 'regular')
			},
			false: {
				color: props.color ?? props.theme.components.stepper.colors.disabled
			}
		}
	});
};
