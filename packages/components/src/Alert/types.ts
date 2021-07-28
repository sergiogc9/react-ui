import { BoxProps } from 'components/Box';

type Props = {
	/**
	 * The status of the alert. Used to colorize the Alert.
	 */
	readonly status?: 'error' | 'info' | 'success' | 'warning';
};

export type AlertProps = Props & BoxProps;
