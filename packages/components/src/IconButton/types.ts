import React from 'react';

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
};

type IconButtonProps<T extends React.ElementType = 'button'> = ExtendedFlexProps<Props, T>;

type IconButtonComponent = ExtendedFlexComponent<Props>;

export { IconButtonComponent, IconButtonProps };
