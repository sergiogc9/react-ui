import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';

import TableSkeleton, { TableSkeletonProps } from '.';

const renderComponent = (props: Partial<TableSkeletonProps> = {}) => {
	return render(
		withTheme(
			<TableSkeleton {...props}>
				<TableSkeleton.Toolbar />
				<TableSkeleton.Content />
			</TableSkeleton>
		)
	);
};

describe('TableSkeleton', () => {
	afterEach(cleanup);

	it('should render skeleton', () => {
		renderComponent();

		expect(screen.getByTestId('skeleton')).toBeInTheDocument();
		expect(screen.queryAllByTestId('skeleton-rect')).not.toBeNull();
	});
});
