import { StyledProps } from 'styled-components';

import { createVariant } from 'components/private/utils/variants';

import { ButtonProps } from 'components/Button/types';
import { StyledButtonIconProps } from 'components/Button/Icon/types';
import { IconProps } from 'components/Icon/types';

const iconSize: Record<NonNullable<ButtonProps['aspectSize']>, NonNullable<IconProps['aspectSize']>> = {
	xs: 's',
	s: 's',
	m: 'm',
	l: 'm'
};

const generateCSS = (props: StyledProps<StyledButtonIconProps>, aspectSize: StyledButtonIconProps['aspectSize']) => ({
	'&:first-child': {
		marginRight: props.theme.components.button.iconMargins[aspectSize!]
	},
	'&:nth-child(2)': {
		marginLeft: props.theme.components.button.iconMargins[aspectSize!]
	},
	height: props.size ?? props.theme.components.icon.sizes[iconSize[aspectSize!]],
	width: props.size ?? props.theme.components.icon.sizes[iconSize[aspectSize!]]
});

export default createVariant<StyledButtonIconProps, 'aspectSize'>('aspectSize', generateCSS);
