import React from 'react';

import StepperContext, { StepperStepContext } from '../Context';
import StyledStep from './styled';
import { StepperStepProps } from './types';

const StepperStep: React.FC<StepperStepProps> = ({ children, isAccessible = true, ...rest }) => {
	const { current, onChangeStep, showCheckIcon, steps, totalSteps, variant } = React.useContext(StepperContext);

	const contextValues = React.useMemo(() => {
		const stepIndex = steps.indexOf(children) + 1;
		const isFinalStep = stepIndex === totalSteps;
		return {
			current,
			index: stepIndex,
			isLast: isFinalStep,
			showCheckIcon,
			variant
		};
	}, [children, current, showCheckIcon, steps, totalSteps, variant]);

	const onStepClicked = React.useCallback(() => {
		if (isAccessible && current !== contextValues.index && onChangeStep) onChangeStep(contextValues.index);
	}, [contextValues.index, current, isAccessible, onChangeStep]);

	return (
		<StepperStepContext.Provider value={contextValues}>
			<StyledStep
				{...rest}
				className="stepper-step"
				cursor={isAccessible && onChangeStep ? 'pointer' : 'default'}
				data-testid="stepperStep"
				onClick={onStepClicked}
				variant={variant}
			>
				{children}
			</StyledStep>
		</StepperStepContext.Provider>
	);
};

export default React.memo(StepperStep);
