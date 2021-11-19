import { StyledProps } from 'styled-components';
import { variant } from 'styled-system';

import { ChipProps } from '../types';

export default (props: StyledProps<ChipProps>) => {
	const generateCSS = (aspectSize: ChipProps['aspectSize']) => ({
		...props.theme.components.chip.sizes.chip[aspectSize!]
	});

	return variant({
		prop: 'aspectSize',
		variants: {
			s: generateCSS('s'),
			m: generateCSS('m')
		}
	});
};
