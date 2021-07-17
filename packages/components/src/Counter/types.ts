import React from 'react';

import { BoxProps } from 'components/Box';

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

export type CounterProps = Props & Omit<BoxProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'bg'>;
