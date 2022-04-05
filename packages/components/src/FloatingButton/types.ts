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
};
type StyledProps = {
	readonly hasText: boolean;
};

export type FloatingButtonProps = Props & FlexProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type StyledFloatingButtonProps = StyledProps & FloatingButtonProps;
