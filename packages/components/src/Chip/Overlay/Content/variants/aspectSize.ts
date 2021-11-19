import { StyledProps } from 'styled-components';
import { variant } from 'styled-system';

import { ChipOverlayContentProps } from '../types';

export default (props: StyledProps<ChipOverlayContentProps>) => {
	const generateCSS = (aspectSize: ChipOverlayContentProps['aspectSize']) => ({
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
