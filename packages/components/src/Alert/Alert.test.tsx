import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';

import Alert from '.';
import { AlertProps } from './types';
import { AlertIconProps } from './Icon';

const text = 'Nice text';

const renderAlert = (props: Partial<AlertProps> = {}, iconProps: Partial<AlertIconProps> = {}) =>
	render(
		withTheme(
			<Alert {...props}>
				<Alert.Icon {...iconProps} />
				<Alert.Text>{text}</Alert.Text>
			</Alert>
		)
	);

describe('Alert', () => {
	afterEach(cleanup);

	it('should render with icon and text', () => {
		renderAlert();

		expect(screen.getByTestId('alert')).toBeInTheDocument();
		expect(screen.getByTestId('alertIcon')).toBeInTheDocument();
		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should render with non default status variant', () => {
		renderAlert({ status: 'success' });

		expect(screen.getByTestId('alert')).toHaveStyle(`
      background-color: ${theme.colors.green[500]};
    `);
	});

	it('should render with custom background', () => {
		renderAlert({ bg: 'neutral.400' });

		expect(screen.getByTestId('alert')).toHaveStyle(`
      background-color: ${theme.colors.neutral[400]};
    `);
	});

	it('should render with custom icon', () => {
		renderAlert({}, { icon: 'edit', styling: 'filled' });

		expect(screen.getByTestId('alertIcon')).toBeInTheDocument();
	});

	it('should render with custom icon styling', () => {
		renderAlert({}, { styling: 'filled' });

		expect(screen.getByTestId('alertIcon')).toBeInTheDocument();
	});

	it('should render with custom icon filling', () => {
		renderAlert({}, { icon: 'edit', fill: 'neutral.200', styling: 'filled' });

		expect(screen.getByTestId('alertIcon')).toHaveStyle(`
      fill: ${theme.colors.neutral[200]};
    `);
	});
});
