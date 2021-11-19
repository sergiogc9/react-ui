import { variant } from 'styled-system';
import { DefaultTheme, StyledProps } from 'styled-components';
import { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import { ChipProps } from 'components/Chip/types';

const hoverHandler = (props: Partial<ChipProps>, theme: DefaultTheme, variantProp: ChipProps['variant']) => {
	const hoverState = props.href ? 'hover' : 'default';

	if (props.bg) return { bg: props.bg, borderColor: props.borderColor || props.bg };
	return {
		bg: getColorFromTheme(theme, theme.components.chip.colors[variantProp!].background[hoverState]!),
		boxShadow: `0 0 0 1px ${getColorFromTheme(
			theme,
			theme.components.chip.colors[variantProp!].borderColor[hoverState]!
		)} inset`
	};
};

export default (props: StyledProps<ChipProps>) => {
	const generateCSS = (variantProp: ChipProps['variant']) => ({
		bg: props.bg ?? props.theme.components.chip.colors[variantProp!].background.default,
		boxShadow: `0 0 0 1px ${getColorFromTheme(
			props.theme,
			props.theme.components.chip.colors[variantProp!].borderColor.default
		)} inset`,
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
