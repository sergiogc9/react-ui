import { ExtractThemeAttributes, Theme } from '@sergiogc9/react-ui-theme';
import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

type Props = {
	/**
	 * The size of the button.
	 */
	readonly aspectSize?: ExtractThemeAttributes<Theme>['ButtonAspectSize'];
	/**
	 * If true, the button is disabled
	 */
	readonly isDisabled?: boolean;
	/**
	 * If true, a loader spinner is shown
	 */
	readonly isLoading?: boolean;
	/**
	 * The variant type of the button
	 */
	readonly variant?: ExtractThemeAttributes<Theme>['ButtonVariant'];
};

export interface StyledProps {
	hasIcon: 'left' | 'right' | false;
}

type ButtonProps<T extends React.ElementType = 'button'> = ExtendedFlexProps<Props, T>;
type ButtonComponent = ExtendedFlexComponent<Props>;

type StyledButtonProps<T extends React.ElementType = 'button'> = ButtonProps<T> & StyledProps;
type StyledButtonComponent = ExtendedFlexComponent<Props & StyledProps>;

export { ButtonComponent, ButtonProps, StyledButtonComponent, StyledButtonProps };
