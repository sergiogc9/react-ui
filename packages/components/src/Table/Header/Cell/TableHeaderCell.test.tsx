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
		expect(path.getAttribute('d')).toMatch(
			'M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L17.7071 7.29289C18.0976 7.68342 18.0976 8.31658 17.7071 8.70711C17.3166 9.09763 16.6834 9.09763 16.2929 8.70711L12 4.41421L7.70711 8.70711C7.31658 9.09763 6.68342 9.09763 6.29289 8.70711C5.90237 8.31658 5.90237 7.68342 6.29289 7.29289L11.2929 2.29289Z'
		);
	});

	it('should render down arrow if sorting enabled and column sorted desc', () => {
		const { container } = getComponent({
			column: { canSort: true, isSorted: true, isSortedDesc: true }
		});

		const icon = container.querySelector('svg')!;
		const path = container.querySelector('path')!;

		expect(icon).toBeVisible();
		expect(path.getAttribute('d')).toMatch(
			'M12.2917 21.7334L19.298 14.7271L18.0126 13.4417L12.5581 18.8962V2.90908C12.5581 2.40636 12.1508 2 11.649 2C11.1472 2 10.7399 2.40636 10.7399 2.90908V18.8962L5.28544 13.4417L4 14.7271L11.0063 21.7334C11.3617 22.0889 11.9363 22.0889 12.2917 21.7334Z'
		);
	});

	it('should render down arrow if sorting enabled and column sorted asc', () => {
		const { container } = getComponent({
			column: { canSort: true, isSorted: true, isSortedDesc: false }
		});

		const icon = container.querySelector('svg')!;
		const path = container.querySelector('path')!;

		expect(icon).toBeVisible();
		expect(path.getAttribute('d')).toMatch(
			'M12.2917 2.26659L19.298 9.27287L18.0126 10.5583L12.5581 5.10383V21.0909C12.5581 21.5936 12.1508 22 11.649 22C11.1472 22 10.7399 21.5936 10.7399 21.0909V5.10383L5.28544 10.5583L4 9.27287L11.0063 2.26659C11.3617 1.91114 11.9363 1.91114 12.2917 2.26659Z'
		);
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
