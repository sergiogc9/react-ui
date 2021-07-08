import React from 'react';

import { StepperStepContext } from 'components/Stepper/Context';
import useGetLineLength from './hooks';
import StyledStepperCircleLine from './styled';
import { StepperCircleLineProps } from './types';

const StepperCircleLine: React.FC<StepperCircleLineProps> = props => {
	const contextData = React.useContext(StepperStepContext);

	const { length, ref } = useGetLineLength(contextData.variant);

	return (
		<StyledStepperCircleLine data-testid="stepper-circle-line" length={length} ref={ref} {...contextData} {...props} />
	);
};

export default React.memo(StepperCircleLine);
