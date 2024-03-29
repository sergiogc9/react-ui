import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import Flex from 'components/Flex';
import { StyledTextArea as BaseStyledTextArea } from 'components/private/components/Input';
import { TextAreaProps, StyledTextAreaProps } from './types';

const StyledTextArea = styled(BaseStyledTextArea)<StyledTextAreaProps>`
	${props =>
		props.isDisabled &&
		css({
			color: 'neutral.300',
			opacity: 0.4
		})}

	${props => {
		if (props.labelPosition === 'outside') {
			return css({
				zIndex: 1
			});
		}

		if (!props.label || (!props.value!.toString().trim() && !props.placeholder)) return {};

		return css({
			paddingTop: 4
		});
	}}
`;

StyledTextArea.defaultProps = {
	height: '100%',
	width: '100%'
};

const StyledTextAreaWrapper = styled(Flex)<TextAreaProps>`
	${props => !props.paddingTop && props.labelPosition === 'outside' && css({ paddingTop: 4 })}
`;

StyledTextAreaWrapper.defaultProps = {
	boxSizing: 'border-box',
	flexDirection: 'column',
	width: '100%'
};

export { StyledTextAreaWrapper };
export default React.memo(StyledTextArea);
