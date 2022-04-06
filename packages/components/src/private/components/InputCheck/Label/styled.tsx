import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import Text from 'components/Text';

import { StyledInputCheckLabelProps } from './types';

const InputCheckLabel: React.FC<StyledInputCheckLabelProps> = styled(Text)<StyledInputCheckLabelProps>`
	${props =>
		css({
			marginTop: props.aspectSize === 'm' ? '8px' : '9px'
		})}

	${props => props.isDisabled && css({ opacity: 0.4, cursor: 'default' })}
`;

InputCheckLabel.defaultProps = {
	cursor: 'pointer',
	marginLeft: 1
};

export default React.memo(InputCheckLabel);
