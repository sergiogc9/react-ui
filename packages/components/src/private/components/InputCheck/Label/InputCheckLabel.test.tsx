import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import InputCheckLabel from '.';
import { InputCheckLabelProps } from './types';

const inputCheckLabelTestId = 'InputCheckLabel';
const text = 'Awesome Label';

const renderInputHelperText = (props?: Partial<InputCheckLabelProps>) =>
	render(
		withTheme(
			<InputCheckLabel data-testid={inputCheckLabelTestId} {...props}>
				{text}
			</InputCheckLabel>
		)
	);

describe('InputCheckLabel component', () => {
	afterEach(cleanup);

	it('should render Label text', () => {
		renderInputHelperText();

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should render label as disabled', () => {
		renderInputHelperText({ isDisabled: true });

		const inputCheckLabel = screen.getByTestId(inputCheckLabelTestId);

		expect(inputCheckLabel).toHaveStyle(`
        opacity: 0.4;
    `);
	});
});
