import React from 'react';
import styled from 'styled-components';

import Content from 'components/Content';
import isEnabled from './variants/isEnabled';
import variant from './variants/variant';
import { StyledStepperTextProps } from './types';

const StepperText: React.FC<StyledStepperTextProps> = styled(Content)<StyledStepperTextProps>`
	${isEnabled}
	${variant}
  transition-delay: ${props => (props.isCurrent ? '0.5s' : '0s')};
`;

StepperText.defaultProps = {
	aspectSize: 's',
	lineHeight: '16px',
	transition: 'color ease-in 0.25s, font-weight ease-in 0.25s'
};

export default React.memo(StepperText);
