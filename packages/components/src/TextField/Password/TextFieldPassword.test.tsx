import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import TextFieldPassword from 'components/TextField/Password';
import { TextFieldProps } from 'components/TextField/types';

const textFieldPasswordTestId = 'textFieldPassword';
const renderTextField = (props?: Partial<TextFieldProps>) =>
	render(withTheme(<TextFieldPassword data-testid={textFieldPasswordTestId} {...props} />));

describe('TextField component', () => {
	afterEach(cleanup);

	it('should render input as password by default', () => {
		renderTextField();
		const input = screen.getByTestId(textFieldPasswordTestId)!.querySelector('input')!;

		expect(input).toHaveAttribute('type', 'password');
	});

	it('should render input as text after clicking icon', () => {
		renderTextField();
		const input = screen.getByTestId(textFieldPasswordTestId)!.querySelector('input')!;
		const icon = screen.getByTestId('text-field__password_icon')!;
		fireEvent.click(icon);

		expect(input).toHaveAttribute('type', 'text');
	});

	it('should render input as password even another type is passed in input props', () => {
		renderTextField({ type: 'text' });
		const input = screen.getByTestId(textFieldPasswordTestId)!.querySelector('input')!;

		expect(input).toHaveAttribute('type', 'password');
	});
});
