import { BoxProps } from 'components/Box';

import { PopoverWrapperProps } from 'components/Popover';

export type Props = {
	/**
	 * Boolean to show or hide the arrow
	 */
	readonly arrow?: boolean;
	/**
	 * The arrow size number
	 */
	readonly arrowSize?: number;
	/**
	 * The variant te be used in the tooltip
	 */
	readonly variant?: 'light' | 'dark';
};

export type TooltipContentProps = Props & Omit<PopoverWrapperProps, 'render'> & BoxProps;
