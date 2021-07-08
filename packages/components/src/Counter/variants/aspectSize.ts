import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { CounterProps } from '../types';

export default (props: StyledProps<CounterProps>) => {
	const generateCSS = (aspectSize: CounterProps['aspectSize']) => ({
		height: props.height ?? props.theme.components.counter.sizes[aspectSize!]!,
		minWidth: props.width ?? props.theme.components.counter.sizes[aspectSize!]!,
		borderRadius: props.borderRadius ?? props.theme.components.counter.sizes[aspectSize!]! / 2
	});

	return variant({
		prop: 'aspectSize',
		variants: {
			s: generateCSS('s'),
			m: generateCSS('m')
		}
	});
};
