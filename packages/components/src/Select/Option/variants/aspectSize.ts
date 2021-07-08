import { StyledProps } from 'styled-components';
import { variant } from 'styled-system';

import { StyledSelectOptionProps } from '../types';

export default (props: StyledProps<StyledSelectOptionProps>) => {
	const generateCSS = (aspectSize: StyledSelectOptionProps['aspectSize']) => ({
		height: props.theme.components.select.option.height[aspectSize!]
	});

	return variant({
		prop: 'aspectSize',
		variants: {
			s: generateCSS('s'),
			m: generateCSS('m'),
			l: generateCSS('l')
		}
	});
};
