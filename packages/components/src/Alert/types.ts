import { ExtendedBoxComponent, ExtendedFlexProps } from 'components/types';

type Props = {
	/**
	 * The size of the alert.
	 */
	readonly aspectSize?: 's' | 'm';
	/**
	 * The status of the alert. Used to colorize the Alert.
	 */
	readonly status?: 'error' | 'info' | 'success' | 'warning';
};

type AlertProps<T extends React.ElementType = 'div'> = ExtendedFlexProps<Props, T>;

type AlertComponent = ExtendedBoxComponent<Props>;

export { AlertComponent, AlertProps };
