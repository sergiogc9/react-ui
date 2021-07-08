import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import { GridBox } from './styled';
import { GridBoxProps } from './types';

const testID = 'gridBox';
const text = 'Awesome text';

const renderGridBox = (props?: GridBoxProps) =>
	render(
		withTheme(
			<GridBox data-testid={testID} {...props}>
				{text}
			</GridBox>
		)
	);

describe('Box', () => {
	afterEach(cleanup);

	it('should render content', () => {
		renderGridBox();
		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should render default grid styles', () => {
		renderGridBox();
		expect(screen.getByText(text)).toHaveStyle(`
      grid-column-end: span 1;
      grid-row-end: span 1;
    `);
	});

	it('should render custom grid column styles', () => {
		renderGridBox({ columns: 4, initialColumn: 8 });
		expect(screen.getByText(text)).toHaveStyle(`
      grid-column-start: 8;
      grid-column-end: span 4;
    `);
	});

	it('should render custom grid row styles', () => {
		renderGridBox({ rows: 4, initialRow: 8 });
		expect(screen.getByText(text)).toHaveStyle(`
      grid-row-start: 8;
      grid-row-end: span 4;
    `);
	});

	it('should render with overridden grid css props', () => {
		renderGridBox({ gridColumn: '1 / 4', gridRow: '1 / 2' });
		expect(screen.getByText(text)).toHaveStyle(`
      grid-column: 1 / 4;
      grid-row: 1 / 2;
    `);
	});
});
