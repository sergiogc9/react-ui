import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { ActionMenuItemProps } from '../types';

export default (props: StyledProps<ActionMenuItemProps>) => {
	const generateCSS = (variantProp: ActionMenuItemProps['variant']) => ({
		bg: props.bg ?? props.theme.collections.actionMenu.colors[variantProp!].default.background,
		color: props.theme.collections.actionMenu.colors[variantProp!].default.color,
		'&:hover': {
			bg: props.theme.collections.actionMenu.colors[variantProp!].hover.background,
			color: props.theme.collections.actionMenu.colors[variantProp!].hover.color
		}
	});
	return variant({
		prop: 'variant',
		variants: {
			default: generateCSS('default'),
			danger: generateCSS('danger')
		}
	});
};
