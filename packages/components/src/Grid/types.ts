import React from 'react';
import { ResponsiveValue } from 'styled-system';

import { BaseComponent, BaseComponentProps } from 'components/types';
import { ComposedGridProps } from 'components/private/utils/composers/types';

type Props = {
	/**
	 * The number of explicit columns the grid will use
	 */
	readonly columns?: ResponsiveValue<number>;
	/**
	 * A boolean to change between `1fr` (true) or `auto` (false) for columns width.
	 */
	readonly hasEqualColumns?: boolean;
	/**
	 * The number of explicit rows the grid will use
	 */
	readonly rows?: number;
};

type GridProps<T extends React.ElementType = 'div'> = BaseComponentProps<ComposedGridProps & Props, T>;

type GridComponent = BaseComponent<
	<T extends React.ElementType = keyof JSX.IntrinsicElements>(
		props: GridProps<T>
	) => React.ReactElement<GridProps<T>, any> | null
>;

export { GridComponent, GridProps };
