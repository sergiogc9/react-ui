import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import Stepper from '.';
import StepperContext from './Context';
import { StepperProps } from './types';

let currentContextData = {};
const Consumer = () => {
	const data = React.useContext(StepperContext);

	currentContextData = data;

	return null;
};
const Child1 = <Consumer />;
const Child2 = <Consumer />;

const renderStepper = (props: Partial<StepperProps> = {}) =>
	render(
		withTheme(
			<Stepper current={1} {...props}>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="add" styling="outlined" />
					</Stepper.Circle>
					<Stepper.Text>Step 1</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="add" styling="outlined" />
					</Stepper.Circle>
					<Stepper.Text>Step 2</Stepper.Text>
				</Stepper.Step>
			</Stepper>
		)
	);

const renderFakeStepper = (props: Partial<StepperProps> = {}) =>
	render(
		withTheme(
			<Stepper current={1} {...props}>
				{Child1}
				{Child2}
			</Stepper>
		)
	);

describe('Stepper component', () => {
	afterEach(cleanup);

	it('should provide correct data', () => {
		renderFakeStepper();
		expect(currentContextData).toMatchObject({ current: 1, totalSteps: 2 });
	});

	it('should print vertical lines', () => {
		renderStepper({ variant: 'vertical' });
		const line = screen.getByTestId('stepper-circle-line');
		expect(line).toHaveStyle(`
      width: 2px;
    `);
	});

	it('should print horizontal lines', () => {
		renderStepper({ variant: 'horizontal' });
		const line = screen.getByTestId('stepper-circle-line');
		expect(line).toHaveStyle(`
      height: 2px;
    `);
	});

	it('should print horizontal lines in compacted variant', () => {
		renderStepper({ variant: 'compacted' });
		const line = screen.getByTestId('stepper-circle-line');
		expect(line).toHaveStyle(`
      height: 2px;
    `);
	});

	it('should hide lines in compacted-no-line variant', () => {
		renderStepper({ variant: 'compacted-no-line' });
		const line = screen.getByTestId('stepper-circle-line');
		expect(line).toHaveStyle(`
      display: none;
    `);
	});

	it('should render check icon', () => {
		renderStepper({ current: 2, showCheckIcon: true });
		expect(screen.getByTestId('stepper-circle-check-icon')).toBeInTheDocument();
	});
});
