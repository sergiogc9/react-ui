import { FlexProps } from 'components/Flex';

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

export type AlertProps = Props & FlexProps;
