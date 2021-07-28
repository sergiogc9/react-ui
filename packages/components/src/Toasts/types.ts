import { BoxProps } from 'components/Box';

type Props = {
	/**
	 * The placement of the page where the toasts will appear.
	 */
	readonly placement?: 'bottom' | 'bottom-left' | 'bottom-right' | 'top' | 'top-left' | 'top-right';
};

export type ToastsProps = Props;
export type StyledToastsProps = Props & BoxProps;
