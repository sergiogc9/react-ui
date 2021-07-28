import { ToastsProps, ToastOptions } from '..';

export type ToastsContextData = {
	readonly onAddToast: (toastOptions: ToastOptions) => void;
	readonly onCloseToast: (key: string) => void; // Start hiding animation
	readonly onToastClosed: (key: string) => void; // Executed after hiding animation
	readonly placement: ToastsProps['placement'];
};
