import { variant } from 'styled-system';
import { DefaultTheme, StyledProps } from 'styled-components';
import { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import { ChipGroupProps } from 'components/Chip/types';

const hoverHandler = (props: Partial<ChipGroupProps>, theme: DefaultTheme, variantProp: ChipGroupProps['variant']) => {
	const hoverState = props.href ? 'hover' : 'default';

	if (props.bg) return { bg: props.bg, borderColor: props.borderColor || props.bg };
	return {
		bg: getColorFromTheme(theme, theme.components.chip.colors[variantProp!].background[hoverState]!),
		borderColor: getColorFromTheme(theme, theme.components.chip.colors[variantProp!].borderColor[hoverState]!)
	};
};

export default (props: StyledProps<ChipGroupProps>) => {
	const generateCSS = (variantProp: ChipGroupProps['variant']) => ({
		bg: props.bg ?? props.theme.components.chip.colors[variantProp!].background.default,
		borderColor: props.theme.components.chip.colors[variantProp!].borderColor.default,
		color: props.theme.components.chip.colors[variantProp!].color,
		'&:hover': hoverHandler(props, props.theme, variantProp!)
	});

	return variant({
		prop: 'variant',
		variants: {
			blue: generateCSS('blue'),
			green: generateCSS('green'),
			grey: generateCSS('grey'),
			red: generateCSS('red'),
			white: generateCSS('white'),
			yellow: generateCSS('yellow')
		}
	});
};
