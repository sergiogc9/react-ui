import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { StatusProps } from '../types';

export default (props: StyledProps<StatusProps>) => {
	const generateCSS = (variantProp: StatusProps['variant']) => ({
		bg: props.bg ?? props.theme.components.status.colors[variantProp!].bg,
		color: props.color ?? props.theme.components.status.colors[variantProp!].color
	});

	return variant({
		prop: 'variant',
		variants: {
			blue: generateCSS('blue'),
			green: generateCSS('green'),
			grey: generateCSS('grey'),
			red: generateCSS('red'),
			yellow: generateCSS('yellow')
		}
	});
};
