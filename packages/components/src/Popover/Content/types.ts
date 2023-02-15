import { FlexProps } from 'components/Flex';
import { PopoverWrapperProps } from '../Wrapper';

export interface PopoverContentProps
	extends Omit<PopoverWrapperProps, 'render'>,
		Omit<FlexProps<React.HTMLAttributes<HTMLDivElement>, HTMLElement>, 'zIndex'> {
	/**
	 * Show the popover with a backdrop blur effect.
	 */
	readonly isBlur?: boolean;
}
