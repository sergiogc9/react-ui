import { ButtonHTMLAttributes } from 'react';

import { FlexProps } from 'components/Flex';
import { ExtractThemeAttributes, Theme } from '@sergiogc9/react-ui-theme';

export interface ButtonProps extends FlexProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
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
}

interface StyledProps {
	hasIcon: 'left' | 'right' | false;
}
export interface StyledButtonProps extends ButtonProps, StyledProps {}
