import React from 'react';

import { AlertProps } from 'components/Alert';

export type ToastOptions = {
	actionContent?: React.ReactNode;
	aspectSize?: AlertProps['aspectSize'];
	duration?: number | 'always';
	key: string; // The key should be numeric and based on time
	hasIcon?: boolean;
	hasCloseBtn?: boolean;
	onClose?: () => void;
	message: string;
	status?: AlertProps['status'];
};

type Props = {
	/**
	 * The toast data given by the provider
	 */
	readonly toastOptions: ToastOptions;

	/**
	 * The toast visibility status. It should be controlled from the provider.
	 */
	readonly visibleStatus: 'open' | 'closing';
};

export type ToastProps = Props & AlertProps;
export type StyledToastProps = AlertProps;
