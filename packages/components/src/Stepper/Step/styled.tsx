import React from 'react';
import styled from 'styled-components';

import Box from 'components/Box';
import variant from './variants/variant';
import { StyledStepperStepProps } from './types';

const StyledStep = styled(Box)<StyledStepperStepProps>`
	${variant}
	&:first-child {
		margin-top: 0;
	}
`;

StyledStep.defaultProps = {
	alignItems: 'center'
};

export default React.memo(StyledStep);
