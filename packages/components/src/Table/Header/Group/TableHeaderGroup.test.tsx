import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';

import TableHeaderGroup from '.';
import { TableHeaderGroupProps } from './types';

const tableHeaderGroupTestId = 'TableHeaderGroup';

const getComponent = (props: Partial<TableHeaderGroupProps> = {}) => {
	return render(withTheme(<TableHeaderGroup data-testid={tableHeaderGroupTestId} {...props} />));
};

describe('TableHeaderGroup', () => {
	it('should render group row with correct styles', () => {
		getComponent();

		expect(screen.getByTestId(tableHeaderGroupTestId)).toHaveStyle(`
			align-items: stretch;
			border-radius: 8px;
			border-style: solid;
			border-width: 1px;
			min-height: 48px;
			width: 100%;
		`);
	});
});
