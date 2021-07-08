import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import Status from '.';
import { StatusProps } from './types';

const statusTestId = 'statusComponent';

const renderStatus = (props?: Partial<StatusProps>) =>
	render(withTheme(<Status data-testid={statusTestId} {...props} />));

describe('Icon component', () => {
	afterEach(cleanup);

	it('should render the Status component', () => {
		renderStatus();

		expect(screen.getByTestId(statusTestId)).toBeInTheDocument();
	});

	it('should render a variant', () => {
		renderStatus({ variant: 'green' });

		expect(screen.getByTestId(statusTestId)).toHaveStyle(`
      background-color: ${theme.colors.green[500]};
    `);
	});

	it('should render styles passed by props', () => {
		renderStatus({ bg: 'red.500', color: 'green.500' });

		expect(screen.getByTestId(statusTestId)).toHaveStyle(`
      background-color: ${theme.colors.red[500]};
      color: ${theme.colors.green[500]};
    `);
	});
});
