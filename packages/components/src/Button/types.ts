import { ButtonHTMLAttributes } from 'react';
import { DefaultTheme } from 'styled-components';

import { FlexProps } from 'components/Flex';
import { ExtractThemeAttributes } from '@sergiogc9/react-ui-theme';

type Props = {
	/**
	 * The size of the button.
	 */
	readonly aspectSize?: ExtractThemeAttributes<DefaultTheme>['ButtonAspectSize'];
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
	readonly variant?: ExtractThemeAttributes<DefaultTheme>['ButtonVariant'];
};

export type ButtonProps = Props & FlexProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type StyledButtonProps = ButtonProps & {
	hasIcon: 'left' | 'right' | false;
};
