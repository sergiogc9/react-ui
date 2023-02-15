import { ResponsiveValue } from 'styled-system';

import { FlexProps } from 'components/Flex';
import { ComposedGridProps } from 'components/private/utils/composers/types';

export interface GridBoxProps
	extends FlexProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		ComposedGridProps {
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
}
