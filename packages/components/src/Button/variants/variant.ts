import { variant, TLengthStyledSystem } from 'styled-system';
import { StyledProps } from 'styled-components';
import { getColorFromTheme, getColorFromThemeWithOpacity } from '@sergiogc9/react-ui-theme';

import { ButtonProps } from 'components/Button/types';

const getButtonColorWithOpacity = (props: StyledProps<ButtonProps>, themeKey?: TLengthStyledSystem) => {
	if (!themeKey) return undefined;

	const opacityPercent = props.isLoading ? 40 : 100;

	if (['link', 'subtle'].includes(props.variant!)) return getColorFromTheme(props.theme, themeKey);
	return getColorFromThemeWithOpacity(props.theme, themeKey, opacityPercent);
};

export default (props: StyledProps<ButtonProps>) => {
	const generateCSS = (variantProp: ButtonProps['variant']) => ({
		bg:
			props.bg ??
			getButtonColorWithOpacity(props, props.theme.components.button.colors[variantProp!].background.default),
		color: props.color ?? (props.theme.components.button.colors[variantProp!].text || 'neutral.0'),
		borderColor:
			props.borderColor ??
			(getButtonColorWithOpacity(props, props.theme.components.button.colors[variantProp!].border || '') ||
				'transparent'),
		fontWeight: 'bold',

		'&:focus-visible': {
			boxShadow: `0 0 0 3px ${
				(props.bg as string) ??
				getColorFromTheme(props.theme, props.theme.components.button.colors[variantProp!].focusShadow)
			}`,
			borderColor: 'transparent'
		},

		'@media (hover: hover)': !props.isDisabled &&
			!props.isLoading && {
				'&:hover': {
					bg:
						props.bg ??
						getButtonColorWithOpacity(props, props.theme.components.button.colors[variantProp!].background.hover),
					borderColor: 'transparent'
				}
			},

		'&:active': !props.isDisabled &&
			!props.isLoading && {
				bg:
					props.bg ??
					getButtonColorWithOpacity(props, props.theme.components.button.colors[variantProp!].background.active),
				borderColor: 'transparent'
			}
	});

	return variant({
		prop: 'variant',
		variants: {
			danger: generateCSS('danger'),
			default: generateCSS('default'),
			link: {
				...generateCSS('link'),
				fontWeight: 'semibold'
			},
			primary: generateCSS('primary'),
			secondary: generateCSS('secondary'),
			subtle: {
				...generateCSS('subtle'),
				fontWeight: 'semibold'
			},
			warning: generateCSS('warning')
		}
	});
};
