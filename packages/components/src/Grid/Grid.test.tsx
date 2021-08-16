import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import Grid from 'components/Grid';
import { GridProps } from './types';

const testID = 'grid';
const text = 'Awesome text';

const renderGrid = (props?: GridProps) =>
	render(
		withTheme(
			<Grid data-testid={testID} {...props}>
				{text}
			</Grid>
		)
	);

describe('Box', () => {
	afterEach(cleanup);

	it('should render content', () => {
		renderGrid();

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should render grid with custom columns', () => {
		renderGrid({ columns: 12 });

		expect(screen.getByText(text)).toHaveStyle(`
      grid-template-columns: repeat(12,1fr);
      grid-template-rows: repeat(1,auto);
    `);
	});

	it('should render not equal columns', () => {
		renderGrid({ columns: 12, hasEqualColumns: false });

		expect(screen.getByText(text)).toHaveStyle(`
      grid-template-columns: repeat(12,auto);
    `);
	});

	it('should render custom gaps', () => {
		renderGrid({ columnGap: 100, rowGap: 50 });

		expect(screen.getByText(text)).toHaveStyle(`
      column-gap: 100px;
      row-gap: 50px;
    `);
	});

	it('should render overridden grid css props', () => {
		renderGrid({
			gridTemplateColumns: '200px 100px',
			gridTemplateRows: '100px 200px'
		});

		expect(screen.getByText(text)).toHaveStyle(`
      grid-template-columns: 200px 100px;
      grid-template-rows: 100px 200px;
    `);
	});
});
