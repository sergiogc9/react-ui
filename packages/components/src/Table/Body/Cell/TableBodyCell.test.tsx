import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';

import TableBodyCell from '.';
import { TableBodyCellProps } from './types';

const tableBodyCellTestId = 'TableBodyCell';

const getComponent = (props: Partial<TableBodyCellProps> = {}) => {
	return render(withTheme(<TableBodyCell data-testid={tableBodyCellTestId} {...props} />));
};

describe('TableBodyCell', () => {
	it('should render cell with correct styles', () => {
		getComponent();

		expect(screen.getByTestId(tableBodyCellTestId)).toHaveStyle(`
			flex-shrink: 1;
			padding: 16px;
		`);
	});
});
