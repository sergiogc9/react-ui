import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { TitleProps } from 'components/Title/types';

export default (props: StyledProps<TitleProps>) => {
	const generateCSS = (aspectSize: TitleProps['aspectSize']) => ({
		fontWeight: props.fontWeight ?? props.theme.components.title.fontWeights[aspectSize!],
		fontSize: props.fontSize ?? props.theme.components.title.fontSizes[aspectSize!],
		lineHeight: props.lineHeight ?? props.theme.components.title.lineHeights[aspectSize!],
		textTransform: props.textTransform ?? (aspectSize === 'uppercase' ? 'uppercase' : 'initial')
	});

	return variant({
		prop: 'aspectSize',
		variants: {
			uppercase: generateCSS('uppercase'),
			subtle: generateCSS('subtle'),
			xs: generateCSS('xs'),
			s: generateCSS('s'),
			m: generateCSS('m'),
			l: generateCSS('l'),
			xl: generateCSS('xl')
		}
	});
};
