import { StyledProps } from 'styled-components';
import { variant } from 'styled-system';

import { ActionWrapperProps } from '../types';

export default (props: StyledProps<ActionWrapperProps>) => {
	const generateCSS = (variantProp: ActionWrapperProps['variant']) => ({
		bg: props.theme.components.chip.colors[variantProp!].actionableBg.default!,
		' @media (hover: hover)': {
			'&:hover': {
				bg: props.theme.components.chip.colors[variantProp!].actionableBg.hover!
			}
		}
	});

	return variant({
		prop: 'variant',
		variants: {
			white: generateCSS('white'),
			blue: generateCSS('blue'),
			grey: generateCSS('grey'),
			green: generateCSS('green'),
			yellow: generateCSS('yellow'),
			red: generateCSS('red')
		}
	});
};
