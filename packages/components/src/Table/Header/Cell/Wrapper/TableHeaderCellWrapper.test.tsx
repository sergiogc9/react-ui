import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';

import TableHeaderCellWrapper from '.';
import { TableHeaderCellWrapperProps } from './types';

const tableHeaderCellWrapperTestId1 = 'TableHeaderCellWrapper1';
const tableHeaderCellWrapperTestId2 = 'TableHeaderCellWrapper2';
const tableHeaderCellWrapperTestId3 = 'TableHeaderCellWrapper3';

const getComponent = (props: Partial<TableHeaderCellWrapperProps> = {}) => {
	return render(
		withTheme(
			<>
				<TableHeaderCellWrapper data-testid={tableHeaderCellWrapperTestId1} {...props} />
				<TableHeaderCellWrapper data-testid={tableHeaderCellWrapperTestId2} {...props} />
				<TableHeaderCellWrapper data-testid={tableHeaderCellWrapperTestId3} {...props} />
			</>
		)
	);
};

describe('TableHeaderCellWrapper', () => {
	it('should render first cell with correct styles', () => {
		getComponent();

		expect(screen.getByTestId(tableHeaderCellWrapperTestId1)).toHaveStyle(`
    	flex-shrink: 1;
    `);
	});

	it('should render last cell with correct styles', () => {
		getComponent();

		expect(screen.getByTestId(tableHeaderCellWrapperTestId3)).toHaveStyle(`
  		flex-shrink: 1;
  	`);
	});
});
