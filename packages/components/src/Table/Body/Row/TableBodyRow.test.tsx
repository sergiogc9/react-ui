import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';

import TableBodyRow from '.';
import { TableBodyRowProps } from './types';

const tableBodyRowTestId = 'TableBodyRow';

const getComponent = (props: Partial<TableBodyRowProps> = {}) => {
	return render(withTheme(<TableBodyRow data-testid={tableBodyRowTestId} {...props} />));
};

describe('TableBodyRow', () => {
	it('should render row with correct styles', () => {
		getComponent();

		expect(screen.getByTestId(tableBodyRowTestId)).toHaveStyle(`
			align-items: center;
			min-height: 56px;
			width: 100%;
		`);
	});
});
