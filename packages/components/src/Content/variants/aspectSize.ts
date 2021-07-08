import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { ContentProps } from 'components/Content/types';

export default (props: StyledProps<ContentProps>) => {
	const generateCSS = (aspectSize: ContentProps['aspectSize']) => ({
		fontWeight: props.fontWeight ?? props.theme.components.content.fontWeights[aspectSize!],
		fontSize: props.fontSize ?? props.theme.components.content.fontSizes[aspectSize!],
		lineHeight: props.lineHeight ?? props.theme.components.content.lineHeights[aspectSize!]
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
