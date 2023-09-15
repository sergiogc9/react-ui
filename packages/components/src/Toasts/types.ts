import React from 'react';
import { FlexProps } from 'components/Flex';

export interface ToastsProps {
	readonly children?: React.ReactNode;
	/**
	 * The placement of the page where the toasts will appear.
	 */
	readonly placement?: 'bottom' | 'bottom-left' | 'bottom-right' | 'top' | 'top-left' | 'top-right';
}
export interface StyledToastsProps extends ToastsProps, Omit<FlexProps<'div'>, 'children'> {}
