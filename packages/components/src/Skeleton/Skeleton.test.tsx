import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';

import Skeleton from '.';
import { SkeletonProps } from './types';

const renderSkeleton = (props: Partial<SkeletonProps> = {}) =>
	render(
		withTheme(
			<Skeleton {...props}>
				<Skeleton.Circle left="0" top="0" size={50} />
				<Skeleton.Rect height={30} />
				<Skeleton.Rect height={6} />
			</Skeleton>
		)
	);

describe('Skeleton', () => {
	afterEach(cleanup);

	it('should render skeleton', () => {
		renderSkeleton();

		expect(screen.getByTestId('skeleton')).toBeInTheDocument();
		expect(screen.getAllByTestId('skeleton-circle')).toHaveLength(1);
		expect(screen.getAllByTestId('skeleton-rect')).toHaveLength(2);
	});

	it('should use theme colors', () => {
		renderSkeleton({
			color: 'red.100'
		});

		expect(screen.getByTestId('skeleton')).toHaveStyle(`color: ${theme.colors.red[100]}`);
	});

	it('should use pre-defined border radius', () => {
		renderSkeleton();

		const firstRect = screen.getAllByTestId('skeleton-rect')[0];
		expect(firstRect).toHaveStyle(`
      height: 30px;
      border-radius: 8px;
    `);

		const secondRect = screen.getAllByTestId('skeleton-rect')[1];
		expect(secondRect).toHaveStyle(`
      height: 6px;
      border-radius: 3px;
    `);
	});

	it('should use default rect height', () => {
		render(
			withTheme(
				<Skeleton>
					<Skeleton.Rect />
				</Skeleton>
			)
		);

		expect(screen.getByTestId('skeleton-rect')).toHaveStyle(`
        height: 20px;
    `);
	});

	it('should use custom border radius', () => {
		render(
			withTheme(
				<Skeleton>
					<Skeleton.Rect borderRadius={2} />
				</Skeleton>
			)
		);

		expect(screen.getByTestId('skeleton-rect')).toHaveStyle(`
      border-radius: 16px;
    `);
	});

	it('should use custom title', () => {
		renderSkeleton({ title: 'Fake title' });

		expect(screen.getByTestId('skeleton')).toHaveAttribute('title', 'Fake title');
	});

	it('should render elements as grid containers', () => {
		render(
			withTheme(
				<Skeleton>
					<Skeleton.Circle columns={5} type="grid" />
					<Skeleton.Rect columns={7} type="grid" />
				</Skeleton>
			)
		);

		expect(screen.getByTestId('skeleton-circle')).toHaveStyle(`
      grid-column-end: span 5;
      grid-row-end: span 1;
    `);
		expect(screen.getByTestId('skeleton-rect')).toHaveStyle(`
      grid-column-end: span 7;
      grid-row-end: span 1;
    `);
	});
});
