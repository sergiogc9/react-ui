import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { IconFontAwesomeProps } from '../types';

export default (props: StyledProps<IconFontAwesomeProps>) => {
	const generateCSS = (aspectSize: IconFontAwesomeProps['aspectSize']) => ({
		height: props.size ?? props.theme.components.icon.sizes[aspectSize!],
		width: props.size ?? props.theme.components.icon.sizes[aspectSize!]
	});

	return variant({
		prop: 'aspectSize',
		variants: {
			s: generateCSS('s'),
			m: generateCSS('m'),
			l: generateCSS('l'),
			xl: generateCSS('xl')
		}
	});
};
