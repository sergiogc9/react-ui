import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { withTheme } from 'components/private/utils/tests';
import StepperStep from '.';
import StepperContext, { StepperStepContext } from '../Context';
import { StepperContextData } from '../Context/types';
import { StepperStepProps } from './types';

let currentContextData = {};
const Consumer = () => {
	const data = React.useContext(StepperStepContext);

	currentContextData = data;

	return null;
};
const Child1 = <Consumer />;
const Child2 = <Consumer />;
const mockOnChangeStep = jest.fn();
const defaultContextData: StepperContextData = {
	current: 1,
	onChangeStep: mockOnChangeStep,
	showCheckIcon: false,
	steps: [Child1, Child2],
	totalSteps: 2,
	variant: 'vertical'
};

const renderStepperStep = (
	props: Partial<StepperStepProps> = {},
	contextData: Partial<StepperContextData> = {},
	consumerChildren = Child1
) =>
	render(
		withTheme(
			<StepperContext.Provider value={{ ...defaultContextData, ...contextData }}>
				<StepperStep {...props}>{consumerChildren}</StepperStep>
			</StepperContext.Provider>
		)
	);

describe('StepperStep component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should provide data for previous step', () => {
		renderStepperStep({}, { current: 2 });

		expect(currentContextData).toEqual({
			current: 2,
			index: 1,
			isLast: false,
			showCheckIcon: false,
			variant: 'vertical'
		});
	});

	it('should provide data for current step', () => {
		renderStepperStep({}, { current: 1 });

		expect(currentContextData).toEqual({
			current: 1,
			index: 1,
			isLast: false,
			showCheckIcon: false,
			variant: 'vertical'
		});
	});

	it('should provide data for last step', () => {
		renderStepperStep({}, { current: 2 }, Child2);

		expect(currentContextData).toEqual({
			current: 2,
			index: 2,
			isLast: true,
			showCheckIcon: false,
			variant: 'vertical'
		});
	});

	it('should show cursor pointer if on change function is passed', () => {
		renderStepperStep({}, { current: 2 }, Child2);

		expect(screen.getByTestId('stepperStep')).toHaveStyle(`
      cursor: pointer;
    `);
	});

	it('should show default pointer if on change function is undefined', () => {
		renderStepperStep({}, { current: 2, onChangeStep: undefined }, Child2);

		expect(screen.getByTestId('stepperStep')).toHaveStyle(`
      cursor: default;
    `);
	});

	it('should show default pointer if step is not accessible', () => {
		renderStepperStep({ isAccessible: false }, { current: 1 }, Child2);

		expect(screen.getByTestId('stepperStep')).toHaveStyle(`
      cursor: default;
    `);
	});

	it('should call onChangeStep handler', () => {
		renderStepperStep({}, { current: 1 }, Child2);

		userEvent.click(screen.getByTestId('stepperStep'));

		expect(mockOnChangeStep).toHaveBeenCalledWith(2);
	});

	it('should not call onChangeStep handler if current step', () => {
		renderStepperStep({}, { current: 2 }, Child2);

		userEvent.click(screen.getByTestId('stepperStep'));

		expect(mockOnChangeStep).not.toHaveBeenCalled();
	});

	it('should not call onChangeStep handler if not accessible', () => {
		renderStepperStep({ isAccessible: false }, { current: 1 }, Child2);

		userEvent.click(screen.getByTestId('stepperStep'));

		expect(mockOnChangeStep).not.toHaveBeenCalled();
	});

	it('should not call onChangeStep handler if current step if not provide', () => {
		renderStepperStep({}, { current: 1, onChangeStep: undefined }, Child2);

		userEvent.click(screen.getByTestId('stepperStep'));

		expect(mockOnChangeStep).not.toHaveBeenCalled();
	});
});
