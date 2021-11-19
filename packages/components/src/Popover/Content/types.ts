import { BoxProps } from 'components/Box';
import { PopoverWrapperProps } from '../Wrapper';

type Props = {
	/**
	 * Show the popover with a backdrop blur effect.
	 */
	readonly isBlur?: boolean;
};

export type PopoverContentProps = Props & Omit<PopoverWrapperProps, 'render'> & BoxProps;
