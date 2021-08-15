import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';

import TableToolbar from '.';
import { TableToolbarProps } from './types';

const tableToolbarTestId = 'TableToolbar';

const getComponent = (props: Partial<TableToolbarProps> = {}) => {
	return render(withTheme(<TableToolbar data-testid={tableToolbarTestId} {...props} />));
};

describe('TableToolbar', () => {
	it('should render toolbar with correct styles', () => {
		getComponent();

		expect(screen.getByTestId(tableToolbarTestId)).toHaveStyle(`
			align-items: center;
			min-height: 50px;
			width: 100%;
		`);
	});
});
