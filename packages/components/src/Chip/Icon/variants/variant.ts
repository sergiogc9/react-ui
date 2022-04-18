import { StyledProps } from 'styled-components';
import { variant } from 'styled-system';

import { StyledChipIconProps } from '../types';

export default (props: StyledProps<StyledChipIconProps>) => {
	const generateCSS = (variantProp: StyledChipIconProps['variant']) => ({
		fill: props.fill ?? props.theme.components.chip.colors[variantProp!].color!
	});

	return variant({
		prop: 'variant',
		variants: {
			blue: generateCSS('blue'),
			grey: generateCSS('grey'),
			green: generateCSS('green'),
			red: generateCSS('red'),
			transparent: generateCSS('transparent'),
			yellow: generateCSS('yellow')
		}
	});
};
