import { ButtonHTMLAttributes } from 'react';

import { BoxProps } from 'components/Box';

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
	readonly variant?: 'danger' | 'default' | 'floating' | 'link' | 'primary' | 'secondary' | 'subtle' | 'warning';
};

export type ButtonProps = Props & BoxProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type StyledButtonProps = ButtonProps & {
	hasIcon: 'left' | 'right' | false;
};
