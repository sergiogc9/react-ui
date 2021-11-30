import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { StyledFloatingButtonProps } from '../types';

export default (props: StyledProps<StyledFloatingButtonProps>) => {
	const generateCSS = (aspectSize: StyledFloatingButtonProps['aspectSize']) => ({
		height: props.height ?? props.theme.components.floatingButton.heights[aspectSize!],
		padding:
			props.padding ??
			(props.hasText && !props.isLoading
				? props.theme.components.floatingButton.paddings[aspectSize!].withText
				: props.theme.components.floatingButton.paddings[aspectSize!].default),
		width: props.width ?? (props.isLoading ? props.theme.components.floatingButton.heights[aspectSize!] : undefined),

		'& svg + span': {
			ml: props.theme.components.floatingButton.iconMargins[aspectSize!]
		}
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
