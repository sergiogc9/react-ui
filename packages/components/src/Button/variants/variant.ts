import { TLengthStyledSystem } from 'styled-system';
import { StyledProps } from 'styled-components';
import { getColorFromTheme, getColorFromThemeWithOpacity } from '@sergiogc9/react-ui-theme';

import { createVariant } from 'components/private/utils/variants';
import { StyledButtonProps } from 'components/Button/types';

const getButtonColorWithOpacity = (props: StyledProps<StyledButtonProps>, themeKey?: TLengthStyledSystem) => {
	if (!themeKey) return undefined;

	const opacityPercent = props.isLoading ? 40 : 100;

	if (['link', 'subtle'].includes(props.variant!)) return getColorFromTheme(props.theme, themeKey);
	return getColorFromThemeWithOpacity(props.theme, themeKey, opacityPercent);
};

const generateCSS = (props: StyledProps<StyledButtonProps>, value: StyledButtonProps['variant']) => ({
	bg: props.bg ?? getButtonColorWithOpacity(props, props.theme.components.button.colors[value!].background.default),
	color: props.color ?? (props.theme.components.button.colors[value!].text || 'neutral.0'),
	borderColor:
		props.borderColor ??
		(getButtonColorWithOpacity(props, props.theme.components.button.colors[value!].border || '') || 'transparent'),
	fontWeight: value === 'link' || value === 'subtle' ? 'semibold' : 'bold',

	'&:focus-visible': {
		boxShadow: `0 0 0 3px ${
			(props.bg as string) ?? getColorFromTheme(props.theme, props.theme.components.button.colors[value!].focusShadow)
		}`,
		borderColor: 'transparent'
	},

	'@media (hover: hover)': !props.isDisabled &&
		!props.isLoading && {
			'&:hover': {
				bg: props.bg ?? getButtonColorWithOpacity(props, props.theme.components.button.colors[value!].background.hover),
				borderColor: 'transparent'
			}
		},

	'&:active': !props.isDisabled &&
		!props.isLoading && {
			bg: props.bg ?? getButtonColorWithOpacity(props, props.theme.components.button.colors[value!].background.active),
			borderColor: 'transparent'
		}
});

export default createVariant<StyledButtonProps, 'variant'>('variant', generateCSS);
