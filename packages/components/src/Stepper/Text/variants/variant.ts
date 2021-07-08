import { StyledProps } from 'styled-components';
import { variant } from 'styled-system';

import { StyledStepperTextProps } from '../types';

export default (props: StyledProps<StyledStepperTextProps>) => {
	return variant({
		prop: 'variant',
		variants: {
			compacted: {
				display: 'none'
			},
			'compacted-no-line': {
				display: 'none'
			},
			horizontal: {
				marginTop: props.marginTop ?? 2,
				textAlign: 'center'
			},
			vertical: {
				marginLeft: props.marginLeft ?? 3
			}
		}
	});
};
