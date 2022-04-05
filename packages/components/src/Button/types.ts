import { ButtonHTMLAttributes } from 'react';

import { FlexProps } from 'components/Flex';

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
	/**
	 * The variant type of the button
	 */
	readonly variant?: 'danger' | 'default' | 'link' | 'primary' | 'secondary' | 'subtle' | 'success' | 'warning';
};

export type ButtonProps = Props & FlexProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type StyledButtonProps = ButtonProps & {
	hasIcon: 'left' | 'right' | false;
};
