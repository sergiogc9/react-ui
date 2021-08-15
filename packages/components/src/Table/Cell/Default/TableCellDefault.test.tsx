import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';

import TableCellDefault from '.';

const cellValue = 'Fake value';
const tableCellDefaultTestId = 'TableCellDefault';

const getComponent = (props: any = {}) => {
	return render(withTheme(<TableCellDefault data-testid={tableCellDefaultTestId} value={cellValue} {...props} />));
};

describe('TableCellDefault', () => {
	it('should render cell with correct value', () => {
		getComponent();

		expect(screen.getByText(cellValue)).toBeInTheDocument();
	});

	it('should render cell with children', () => {
		getComponent({ children: <div>Nice</div> });

		expect(screen.getByText('Nice')).toBeInTheDocument();
	});
});
