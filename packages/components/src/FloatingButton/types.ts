import { ButtonHTMLAttributes } from 'react';

import { FlexProps } from 'components/Flex';

export interface FloatingButtonProps extends FlexProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
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
}
export interface StyledFloatingButtonProps extends FloatingButtonProps {
	readonly hasText: boolean;
}
