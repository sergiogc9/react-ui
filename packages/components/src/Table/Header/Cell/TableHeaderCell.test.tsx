import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import merge from 'lodash/merge';

import { RecursivePartial } from 'components/types';
import { withTheme } from 'components/private/utils/tests';

import TableHeaderCell from '.';
import { TableHeaderCellProps } from './types';

const tableHeaderCellTestId1 = 'TableHeaderCell1';
const tableHeaderCellTestId2 = 'TableHeaderCell2';
const tableHeaderCellTestId3 = 'TableHeaderCell3';

const cellFirstText = 'First Header';
const cellSecondText = 'Second Header';
const cellThirdText = 'Third Header';

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
			<>
				<TableHeaderCell data-testid={tableHeaderCellTestId1} {...merge(defaultProps, props as any)}>
					{cellFirstText}
				</TableHeaderCell>
				<TableHeaderCell data-testid={tableHeaderCellTestId2} {...merge(defaultProps, props as any)}>
					{cellSecondText}
				</TableHeaderCell>
				<TableHeaderCell data-testid={tableHeaderCellTestId3} {...merge(defaultProps, props as any)}>
					{cellThirdText}
				</TableHeaderCell>
			</>
		)
	);
};

describe('TableHeaderCell', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render first header cell with correct styles', () => {
		getComponent();

		expect(screen.getByTestId(tableHeaderCellTestId1)).toHaveStyle(`
			align-items: center;
			font-size: 14px;
			font-weight: 600;
			padding-left: 16px;
			transition: background-color ease-in 0.15s;
		`);
	});

	it('should render second header cell with correct styles', () => {
		getComponent();

		expect(screen.getByTestId(tableHeaderCellTestId2)).toHaveStyle(`
			align-items: center;
			font-size: 14px;
			font-weight: 600;
			transition: background-color ease-in 0.15s;
		`);
	});

	it('should render last header cell with correct styles', () => {
		getComponent();

		expect(screen.getByTestId(tableHeaderCellTestId3)).toHaveStyle(`
			align-items: center;
			font-size: 14px;
			font-weight: 600;
			padding-right: 16px;
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
			'M12.7071 2.29289C12.3166 1.90237 11.6834 1.90237 11.2929 2.29289L6.29289 7.29289C5.90237 7.68342 5.90237 8.31658 6.29289 8.70711C6.68342 9.09763 7.31658 9.09763 7.70711 8.70711L12 4.41421L16.2929 8.70711C16.6834 9.09763 17.3166 9.09763 17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L12.7071 2.29289ZM7.70711 15.2929C7.31658 14.9024 6.68342 14.9024 6.29289 15.2929C5.90237 15.6834 5.90237 16.3166 6.29289 16.7071L11.2929 21.7071C11.6834 22.0976 12.3166 22.0976 12.7071 21.7071L17.7071 16.7071C18.0976 16.3166 18.0976 15.6834 17.7071 15.2929C17.3166 14.9024 16.6834 14.9024 16.2929 15.2929L12 19.5858L7.70711 15.2929Z'
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
			'M12.6809 21.7041C12.6716 21.7139 12.662 21.7236 12.6523 21.733C12.568 21.8147 12.4731 21.8776 12.3724 21.9218C12.2579 21.9721 12.1321 22 12 22C11.999 22 11.9981 22 11.9971 22C11.7527 21.9992 11.5085 21.9016 11.322 21.7071L5.28086 15.4071C4.90638 15.0166 4.90638 14.3834 5.28086 13.9929C5.65533 13.6024 6.26248 13.6024 6.63695 13.9929L11.0411 18.5858L11.0411 3C11.0411 2.44772 11.4704 2 12 2C12.5296 2 12.9589 2.44772 12.9589 3L12.9589 18.5858L17.363 13.9929C17.7375 13.6024 18.3447 13.6024 18.7191 13.9929C19.0936 14.3834 19.0936 15.0166 18.7191 15.4071L12.6809 21.7041Z'
		);
	});

	it('should render upward arrow if sorting enabled and column sorted asc', () => {
		const { container } = getComponent({
			column: { canSort: true, isSorted: true, isSortedDesc: false }
		});

		const icon = container.querySelector('svg')!;
		const path = container.querySelector('path')!;

		expect(icon).toBeVisible();
		expect(path.getAttribute('d')).toMatch(
			'M11.3191 2.29589C11.3284 2.28606 11.338 2.27642 11.3477 2.26699C11.432 2.18534 11.5269 2.12242 11.6276 2.07823C11.7421 2.02785 11.8679 2 12 2C12.001 2 12.0019 2 12.0029 2C12.2473 2.00076 12.4915 2.09839 12.678 2.29289L18.7191 8.59289C19.0936 8.98342 19.0936 9.61658 18.7191 10.0071C18.3447 10.3976 17.7375 10.3976 17.363 10.0071L12.9589 5.4142V21C12.9589 21.5523 12.5296 22 12 22C11.4704 22 11.0411 21.5523 11.0411 21V5.41423L6.63695 10.0071C6.26248 10.3976 5.65533 10.3976 5.28086 10.0071C4.90638 9.61658 4.90638 8.98342 5.28086 8.59289L11.3191 2.29589Z'
		);
	});

	it('should toggle column order by clicking', () => {
		getComponent({ column: { canSort: true } });

		userEvent.click(screen.getByTestId(tableHeaderCellTestId1));

		expect(mockOnToggleSortBy).toHaveBeenCalled();
	});

	it('should not toggle column order by clicking if order is disabled', () => {
		getComponent({ column: { canSort: false } });

		userEvent.click(screen.getByTestId(tableHeaderCellTestId1));

		expect(mockOnToggleSortBy).not.toHaveBeenCalled();
	});
});
