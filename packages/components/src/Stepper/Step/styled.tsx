import React from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';
import variant from './variants/variant';
import { StyledStepperStepProps } from './types';

const StyledStep = styled(Flex)<StyledStepperStepProps>`
	${variant}
	&:first-child {
		margin-top: 0;
	}
`;

StyledStep.defaultProps = {
	alignItems: 'center'
};

export default React.memo(StyledStep);
