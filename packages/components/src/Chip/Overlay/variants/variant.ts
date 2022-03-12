import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';
import { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import { ChipOverlayProps } from '../types';

export default (props: StyledProps<ChipOverlayProps>) => {
	const generateCSS = (variantProp: ChipOverlayProps['variant']) => ({
		bg: props.theme.components.chip.colors[variantProp!].background.overlay,
		boxShadow: `0 0 0 1px ${getColorFromTheme(
			props.theme,
			props.theme.components.chip.colors[variantProp!].borderColor.overlay
		)} inset`,
		color: props.theme.components.chip.colors[variantProp!].background.default
	});

	return variant({
		prop: 'variant',
		variants: {
			blue: generateCSS('blue'),
			green: generateCSS('green'),
			grey: generateCSS('grey'),
			red: generateCSS('red'),
			transparent: generateCSS('transparent'),
			yellow: generateCSS('yellow')
		}
	});
};
