import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';

import TableCellDate from '.';

const tableCellDateTestId = 'TableCellDate';

const getComponent = (props: any = {}) => {
	return render(withTheme(<TableCellDate data-testid={tableCellDateTestId} {...props} />));
};

describe('TableCellDate', () => {
	it('should render cell with correct locale string', () => {
		getComponent({
			cell: { getValue: () => '2021-06-15T12:34:18.547Z', getContext: () => ({ table: { options: {} } }) }
		});

		expect(screen.getByText('Jun 15, 2021')).toBeInTheDocument();
	});

	it('should render cell with correct date', () => {
		getComponent({
			cell: { getValue: () => new Date('2021-06-15T12:34:18.547Z'), getContext: () => ({ table: { options: {} } }) }
		});

		expect(screen.getByText('Jun 15, 2021')).toBeInTheDocument();
	});
});
