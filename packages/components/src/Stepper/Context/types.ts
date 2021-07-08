import React from 'react';

import { StepperProps } from 'components/Stepper';

export type StepperContextData = {
	readonly current: number;
	readonly onChangeStep?: (step: number) => void;
	readonly showCheckIcon: boolean;
	readonly steps: React.ReactNode[];
	readonly totalSteps: number;
	readonly variant: StepperProps['variant'];
};

export type StepperStepContextData = {
	readonly current: number;
	readonly index: number;
	readonly isLast: boolean;
	readonly showCheckIcon: boolean;
	readonly variant: StepperProps['variant'];
};
