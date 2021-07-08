import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { StyledStepperCircleProps } from '../types';

export default (props: StyledProps<StyledStepperCircleProps>) => {
	const generateCSS = (variantProp: StyledStepperCircleProps['variant']) => ({
		fontSize: props.fontSize ?? props.theme.components.stepper.circle[variantProp!].fontSize,
		height: props.size ?? props.height ?? props.theme.components.stepper.circle[variantProp!].size,
		width: props.size ?? props.width ?? props.theme.components.stepper.circle[variantProp!].size
	});

	return variant({
		prop: 'variant',
		variants: {
			compacted: generateCSS('compacted'),
			'compacted-no-line': generateCSS('compacted-no-line'),
			horizontal: generateCSS('horizontal'),
			vertical: generateCSS('vertical')
		}
	});
};
