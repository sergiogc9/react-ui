import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { ButtonProps } from 'components/Button/types';
import { StyledButtonIconFontAwesomeProps } from 'components/Button/Icon/types';
import { IconFontAwesomeProps } from 'components/Icon';

const iconSize: Record<NonNullable<ButtonProps['aspectSize']>, NonNullable<IconFontAwesomeProps['aspectSize']>> = {
	xs: 'xs',
	s: 's',
	m: 's',
	l: 'm'
};

export default (props: StyledProps<StyledButtonIconFontAwesomeProps>) => {
	const generateCSS = (aspectSize: StyledButtonIconFontAwesomeProps['aspectSize']) => ({
		'&:first-child': {
			marginRight: props.theme.components.button.iconMargins[aspectSize!]
		},
		'&:nth-child(2)': {
			marginLeft: props.theme.components.button.iconMargins[aspectSize!]
		},
		height: props.size ?? props.theme.components.icon.sizes[iconSize[aspectSize!]],
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
