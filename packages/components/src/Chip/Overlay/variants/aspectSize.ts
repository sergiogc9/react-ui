import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { ChipOverlayProps } from '../types';

export default (props: StyledProps<ChipOverlayProps>) => {
	const generateCSS = (aspectSize: ChipOverlayProps['aspectSize']) => ({
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
