import { ResponsiveValue } from 'styled-system';

import { ComposedGridProps } from 'components/private/utils/composers/types';
import { ExtendedBoxComponent, ExtendedBoxProps } from 'components/types';

type Props = ComposedGridProps & {
	/**
	 * The number of explicit columns space to take
	 */
	readonly columns?: ResponsiveValue<number>;
	/**
	 * The number of the initial column where the box will be placed
	 */
	readonly initialColumn?: ResponsiveValue<number>;
	/**
	 * The number of the initial row where the box will be placed
	 */
	readonly initialRow?: ResponsiveValue<number>;
	/**
	 * The number of explicit rows space to take
	 */
	readonly rows?: ResponsiveValue<number>;
};

type GridBoxProps<T extends React.ElementType = 'div'> = ExtendedBoxProps<T, Props>;

type GridBoxComponent = ExtendedBoxComponent<Props>;

export { GridBoxComponent, GridBoxProps };
