import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { IconProps } from 'components/Icon/types';

export default (props: StyledProps<IconProps>) => {
	const generateCSS = (aspectSize: IconProps['aspectSize']) => ({
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
