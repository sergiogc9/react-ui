import React from 'react';

import { StepperProps } from 'components/Stepper';

export interface StepperContextData {
	readonly current: number;
	readonly onChangeStep?: (step: number) => void;
	readonly showCheckIcon: boolean;
	readonly steps: React.ReactNode[];
	readonly totalSteps: number;
	readonly variant: StepperProps['variant'];
}

export interface StepperStepContextData {
	readonly current: number;
	readonly index: number;
	readonly isLast: boolean;
	readonly showCheckIcon: boolean;
	readonly variant: StepperProps['variant'];
}
