import React from 'react';

import { FlexProps } from 'components/Flex';

export interface IconButtonProps extends FlexProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	/**
	 * The size of the button.
	 */
	readonly aspectSize?: 's' | 'm' | 'l';
	/**
	 * If true, the button is disabled
	 */
	readonly isDisabled?: boolean;
}
