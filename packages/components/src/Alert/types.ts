import { FlexProps } from 'components/Flex';

export interface AlertProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	/**
	 * The size of the alert.
	 */
	readonly aspectSize?: 's' | 'm';
	/**
	 * The status of the alert. Used to colorize the Alert.
	 */
	readonly status?: 'error' | 'info' | 'success' | 'warning';
}
