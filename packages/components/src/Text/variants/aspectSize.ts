import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { TextProps } from 'components/Text/types';

export default (props: StyledProps<TextProps>) => {
	const generateCSS = (aspectSize: TextProps['aspectSize']) => ({
		fontWeight: props.fontWeight ?? props.theme.components.text.fontWeights[aspectSize!],
		fontSize: props.fontSize ?? props.theme.components.text.fontSizes[aspectSize!],
		lineHeight: props.lineHeight ?? props.theme.components.text.lineHeights[aspectSize!]
	});

	return variant({
		prop: 'aspectSize',
		variants: {
			xs: generateCSS('xs'),
			s: generateCSS('s'),
			m: generateCSS('m'),
			l: generateCSS('l'),
			xl: generateCSS('xl')
		}
	});
};
