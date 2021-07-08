import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import { StepperStepContext } from '../../Context';
import { StepperStepContextData } from '../../Context/types';
import StepperCircleLine from './StepperCircleLine';
import { StepperCircleLineProps } from './types';

const text = 'Awesome tab';
const defaultContextData: StepperStepContextData = {
	current: 0,
	index: 0,
	isLast: false,
	showCheckIcon: false,
	variant: 'vertical'
};

const renderStepperCircleLine = (
	props: Partial<StepperCircleLineProps> = {},
	contextData: Partial<StepperStepContextData> = {}
) =>
	render(
		withTheme(
			<StepperStepContext.Provider value={{ ...defaultContextData, ...contextData }}>
				<StepperCircleLine {...props}>{text}</StepperCircleLine>
			</StepperStepContext.Provider>
		)
	);

describe('StepperCircleLine component', () => {
	afterEach(cleanup);

	it('should render content', () => {
		renderStepperCircleLine();
		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should not render line', () => {
		renderStepperCircleLine({});
		expect(screen.getByTestId('stepper-circle-line')).toBeInTheDocument();
	});
});
