import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

type Props = {
	/**
	 * The size of the button.
	 */
	readonly aspectSize?: 's' | 'm' | 'l';
	/**
	 * If true, the button is disabled
	 */
	readonly isDisabled?: boolean;
	/**
	 * If true, a loader spinner is shown
	 */
	readonly isLoading?: boolean;
};
type StyledProps = {
	readonly hasText: boolean;
};

type FloatingButtonProps<T extends React.ElementType = 'button'> = ExtendedFlexProps<Props, T>;

type FloatingButtonComponent = ExtendedFlexComponent<Props>;

type StyledFloatingButtonProps<T extends React.ElementType = 'button'> = FloatingButtonProps<T> & StyledProps;

export { FloatingButtonComponent, FloatingButtonProps, StyledFloatingButtonProps };
