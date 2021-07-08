import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import InputHelperText from '.';
import { InputHelperTextProps } from './types';

const inputHelperTextTestId = 'InputHelperText';
const text = 'Awesome helper text';

const renderFieldGroup = (props?: Partial<InputHelperTextProps>) =>
	render(
		withTheme(
			<InputHelperText data-testid={inputHelperTextTestId} {...props}>
				{text}
			</InputHelperText>
		)
	);

describe('InputHelperText component', () => {
	afterEach(cleanup);

	it('should render helper text text', () => {
		renderFieldGroup();

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should render helper text as error', () => {
		renderFieldGroup({ isError: true });

		const inputHelperText = screen.getByTestId(inputHelperTextTestId);
		expect(inputHelperText).toHaveStyle(`color: ${theme.colors.red['500']};`);
	});

	it('should render helper text as success', () => {
		renderFieldGroup({ isSuccess: true });
		const inputHelperText = screen.getByTestId(inputHelperTextTestId);

		expect(inputHelperText).toHaveStyle(`color: ${theme.colors.green['500']};`);
	});

	it('should render helper text as disabled', () => {
		renderFieldGroup({ isDisabled: true });
		const inputHelperText = screen.getByTestId(inputHelperTextTestId);

		expect(inputHelperText).toHaveStyle(`
        color: ${theme.colors.neutral['400']};
    `);
	});
});
