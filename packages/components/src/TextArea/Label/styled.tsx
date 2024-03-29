import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import { InputLabel } from 'components/private/components/Input';
import { TextAreaLabelProps } from './types';

const TextAreaLabel = styled(InputLabel)<TextAreaLabelProps>`
	${props => {
		if (!props.value!.toString().trim() && !props.placeholder) {
			return css({
				fontSize: 2,
				transform: `translate(17px, 8px)`,
				zIndex: 2
			});
		}

		if (props.labelPosition === 'inside') {
			return css({
				transform: `translate(17px, 8px)`
			});
		}

		return css({
			pl: 0,
			pointerEvents: 'auto',
			transform: `translate(1px, -20px)`
		});
	}}

	${({ isDisabled, placeholder, theme, value }) =>
		!value &&
		!placeholder &&
		css({
			color: isDisabled ? theme.components.input.colors.disabled : theme.components.input.colors.default
		})}
`;

TextAreaLabel.defaultProps = {
	height: '100%',
	width: '100%',
	zIndex: 1
};

export default React.memo(TextAreaLabel);
