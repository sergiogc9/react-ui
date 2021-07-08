import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import TextField from 'components/TextField';
import { TextFieldProps } from './types';

const placeholderText = 'awesome placeholder';
const textFieldTestId = 'textField';
const renderTextField = (props?: Partial<TextFieldProps>) =>
	render(withTheme(<TextField data-testid={textFieldTestId} placeholder={placeholderText} {...props} />));

describe('TextField component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render base text textField', () => {
		renderTextField();

		expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
	});

	it('should render number textField', () => {
		renderTextField({ type: 'number' });

		expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
	});

	it('should render password textField', () => {
		renderTextField({ type: 'password' });

		expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
	});

	it('should render date textField', () => {
		renderTextField({ type: 'date' });

		expect(screen.getByTestId('TextFieldDate')).toBeInTheDocument();
	});
});
