import React from 'react';

import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

type Props = {
	/**
	 * The size of the text.
	 */
	readonly aspectSize?: 's' | 'm';
	/**
	 * The custom background color
	 */
	readonly bg?: string;
	/**
	 * The number of items to display.
	 */
	readonly numberOfItems?: number;
	/**
	 * The color variant.
	 */
	readonly variant?: 'blue' | 'green' | 'grey' | 'red' | 'yellow';
};

type CounterProps<T extends React.ElementType = 'div'> = ExtendedFlexProps<Props, T>;

type CounterComponent = ExtendedFlexComponent<Props>;

export { CounterComponent, CounterProps };
