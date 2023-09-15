import { PopoverWrapperProps } from '../Wrapper';
import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

type Props = {
	/**
	 * Show the popover with a backdrop blur effect.
	 */
	readonly isBlur?: boolean;
};

type PopoverContentProps<T extends React.ElementType = 'div'> = ExtendedFlexProps<
	Props & Omit<PopoverWrapperProps, 'render'>,
	T,
	['zIndex']
>;

type PopoverContentComponent = ExtendedFlexComponent<Props & Omit<PopoverWrapperProps, 'render'>, ['zIndex']>;

export { PopoverContentComponent, PopoverContentProps };
