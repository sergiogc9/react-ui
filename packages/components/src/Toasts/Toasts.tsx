import React from 'react';
import ReactDOM from 'react-dom';
import { usePortal } from '@sergiogc9/react-hooks';

import ToastsContext, { ToastsContextData } from './Context';
import Toast, { ToastOptions, ToastProps } from './Toast';
import StyledToasts from './styled';
import { ToastsProps } from './types';

const Toasts: React.FC<ToastsProps> = ({ children, placement = 'bottom-left', ...rest }) => {
	const wrapperRef = usePortal('toasts');

	const [toasts, setToasts] = React.useState<
		Record<string, { data: ToastOptions; status: ToastProps['visibleStatus'] }>
	>({});

	const onAddToast = React.useCallback((toastOptions: ToastOptions) => {
		// We override existing toast if key already exists
		setToasts(currentToasts => ({
			...currentToasts,
			[toastOptions.key]: {
				data: toastOptions,
				status: currentToasts[toastOptions.key]?.status || 'open'
			}
		}));
	}, []);

	const onCloseToast = React.useCallback((key: string) => {
		setToasts(currentToasts => ({
			...currentToasts,
			[key]: {
				...currentToasts[key],
				status: 'closing'
			}
		}));
	}, []);

	const onToastClosed = React.useCallback((key: string) => {
		setToasts(currentToasts => {
			const newToasts = { ...currentToasts };
			delete newToasts[key];

			return newToasts;
		});
	}, []);

	const contextData = React.useMemo<ToastsContextData>(
		() => ({ onAddToast, onCloseToast, onToastClosed, placement }),
		[onAddToast, onCloseToast, onToastClosed, placement]
	);

	const toastsContent = React.useMemo(() => {
		return Object.keys(toasts).map(toastKey => (
			<Toast key={toastKey} toastOptions={toasts[toastKey].data} visibleStatus={toasts[toastKey].status} />
		));
	}, [toasts]);

	const content = ReactDOM.createPortal(
		<StyledToasts data-testid="toasts" placement={placement} {...rest}>
			{toastsContent}
		</StyledToasts>,
		wrapperRef.current
	);

	return (
		<ToastsContext.Provider value={contextData}>
			{content}
			{children}
		</ToastsContext.Provider>
	);
};

export default React.memo(Toasts) as React.FC<ToastsProps>;
