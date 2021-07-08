import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import DatePickerPopover from '.';
import { DatePickerPopoverProps } from './types';

const datePickerPopoverTestId = 'AwesomeDatePickerPopover';

const renderDatePickerPopover = (props?: Partial<DatePickerPopoverProps>) =>
	render(
		withTheme(
			<DatePickerPopover
				data-testid={datePickerPopoverTestId}
				isVisible
				{...props}
				datePickerProps={props?.datePickerProps || {}}
			/>
		)
	);

describe('DatePickerPopover component', () => {
	afterEach(cleanup);

	it('should render calendar', () => {
		renderDatePickerPopover();
		expect(screen.getByText('Mon')).toBeInTheDocument();
	});

	it('should render children in footer', () => {
		renderDatePickerPopover({ children: <div>Awesome</div> });
		expect(screen.getByText('Awesome')).toBeInTheDocument();
	});
});
