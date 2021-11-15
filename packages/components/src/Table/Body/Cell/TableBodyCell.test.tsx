import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';

import TableBodyCell from '.';
import { TableBodyCellProps } from './types';

const tableBodyCellTestId1 = 'TableBodyCell1';
const tableBodyCellTestId2 = 'TableBodyCell2';
const tableBodyCellTestId3 = 'TableBodyCell3';

const getComponent = (props: Partial<TableBodyCellProps> = {}) => {
	return render(
		withTheme(
			<>
				<TableBodyCell data-testid={tableBodyCellTestId1} {...props} />
				<TableBodyCell data-testid={tableBodyCellTestId2} {...props} />
				<TableBodyCell data-testid={tableBodyCellTestId3} {...props} />
			</>
		)
	);
};

describe('TableBodyCell', () => {
	it('should render first cell with correct styles', () => {
		getComponent();

		expect(screen.getByTestId(tableBodyCellTestId1)).toHaveStyle(`
    	flex-shrink: 1;
    	padding-left: 16px;
    `);
	});

	it('should render last cell with correct styles', () => {
		getComponent();

		expect(screen.getByTestId(tableBodyCellTestId3)).toHaveStyle(`
  		flex-shrink: 1;
  		padding-right: 16px;
  	`);
	});
});
