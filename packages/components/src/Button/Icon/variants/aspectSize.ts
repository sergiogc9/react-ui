import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { ButtonProps } from 'components/Button/types';
import { StyledButtonIconProps } from 'components/Button/Icon/types';
import { IconProps } from 'components/Icon/types';

const iconSize: Record<NonNullable<ButtonProps['aspectSize']>, NonNullable<IconProps['aspectSize']>> = {
	xs: 's',
	s: 's',
	m: 'm',
	l: 'm'
};

export default (props: StyledProps<StyledButtonIconProps>) => {
	const generateCSS = (aspectSize: StyledButtonIconProps['aspectSize']) => ({
		'&:first-child': {
			marginRight: props.theme.components.button.iconMargins[aspectSize!]
		},
		'&:nth-child(2)': {
			marginLeft: props.theme.components.button.iconMargins[aspectSize!]
		},
		width: props.size ?? props.theme.components.icon.sizes[iconSize[aspectSize!]]
	});

	return variant({
		prop: 'aspectSize',
		variants: {
			xs: generateCSS('xs'),
			s: generateCSS('s'),
			m: generateCSS('m'),
			l: generateCSS('l')
		}
	});
};
