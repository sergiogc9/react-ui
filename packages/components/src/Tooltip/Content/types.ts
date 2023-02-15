import { FlexProps } from 'components/Flex';

import { PopoverWrapperProps } from 'components/Popover';

export interface TooltipContentProps
	extends Omit<PopoverWrapperProps, 'render'>,
		Omit<FlexProps<React.HTMLAttributes<HTMLDivElement>, HTMLElement>, 'zIndex'> {
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
}
