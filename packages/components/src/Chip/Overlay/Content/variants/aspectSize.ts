import { StyledProps } from 'styled-components';
import { variant } from 'styled-system';

import { ChipOverlayTextProps } from '../types';

export default (props: StyledProps<ChipOverlayTextProps>) => {
	const generateCSS = (aspectSize: ChipOverlayTextProps['aspectSize']) => ({
		lineHeight: props.theme.components.chip.sizes.chip[aspectSize!].height
	});

	return variant({
		prop: 'aspectSize',
		variants: {
			s: generateCSS('s'),
			m: generateCSS('m')
		}
	});
};
