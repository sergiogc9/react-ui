import React from 'react';

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
};

export type IconButtonProps = Props & FlexProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
