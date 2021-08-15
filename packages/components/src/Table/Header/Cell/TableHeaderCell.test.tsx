import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import merge from 'lodash/merge';

import { RecursivePartial } from 'components/types';
import { withTheme } from 'components/private/utils/tests';

import TableHeaderCell from '.';
import { TableHeaderCellProps } from './types';

const tableHeaderCellTestId = 'TableHeaderCell';
const cellText = 'Nice Header';
const mockOnToggleSortBy = jest.fn();

const defaultProps: RecursivePartial<TableHeaderCellProps> = {
	column: {
		canSort: false,
		isSorted: false,
		isSortedDesc: false,
		toggleSortBy: mockOnToggleSortBy
	}
};

const getComponent = (props: RecursivePartial<TableHeaderCellProps> = {}) => {
	return render(
		withTheme(
			<TableHeaderCell data-testid={tableHeaderCellTestId} {...merge(defaultProps, props as any)}>
				{cellText}
			</TableHeaderCell>
		)
	);
};

describe('TableHeaderCell', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render row with correct styles', () => {
		getComponent();

		expect(screen.getByTestId(tableHeaderCellTestId)).toHaveStyle(`
			align-items: center;
			font-size: 12px;
			font-weight: 600;
			padding: 16px;
			transition: background-color ease-in 0.15s;
		`);
	});

	it('should not render icon if sorting is disabled', () => {
		const { container } = getComponent();

		const icon = container.querySelector('svg');

		expect(icon).toBeNull();
	});

	it('should not render arrows if sorting enabled but column not sorted', () => {
		const { container } = getComponent({ column: { canSort: true } });

		const icon = container.querySelector('svg')!;
		const path = container.querySelector('path')!;

		expect(icon).not.toBeVisible();
		expect(icon).toHaveClass('column-unsorted');
		expect(path.getAttribute('d')).toMatch('M12,5.83l2.46,2.46c0.39,0.39');
	});

	it('should render down arrow if sorting enabled and column sorted desc', () => {
		const { container } = getComponent({
			column: { canSort: true, isSorted: true, isSortedDesc: true }
		});

		const icon = container.querySelector('svg')!;
		const path = container.querySelector('path')!;

		expect(icon).toBeVisible();
		expect(path.getAttribute('d')).toMatch('M17.8825 14.29C17.4925 13.9');
	});

	it('should render down arrow if sorting enabled and column sorted asc', () => {
		const { container } = getComponent({
			column: { canSort: true, isSorted: true, isSortedDesc: false }
		});

		const icon = container.querySelector('svg')!;
		const path = container.querySelector('path')!;

		expect(icon).toBeVisible();
		expect(path.getAttribute('d')).toMatch('M5.2925 9.2925C5.6825 9.6825');
	});

	it('should toggle column order by clicking', () => {
		getComponent({ column: { canSort: true } });

		userEvent.click(screen.getByTestId(tableHeaderCellTestId));

		expect(mockOnToggleSortBy).toHaveBeenCalled();
	});

	it('should not toggle column order by clicking if order is disabled', () => {
		getComponent({ column: { canSort: false } });

		userEvent.click(screen.getByTestId(tableHeaderCellTestId));

		expect(mockOnToggleSortBy).not.toHaveBeenCalled();
	});
});
