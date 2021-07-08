import { StyledProps } from 'styled-components';
import { variant } from 'styled-system';

import { ChipGroupProps } from '../types';

export default (props: StyledProps<ChipGroupProps>) => {
	const generateCSS = (aspectSize: ChipGroupProps['aspectSize']) => ({
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
