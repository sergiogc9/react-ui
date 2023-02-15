import { CounterProps } from 'components/Counter';
import { BadgeStatusProps } from '../Status/types';

export interface BadgeCounterProps extends CounterProps {
	/**
	 * Choose the badge location.
	 */
	readonly location?: BadgeStatusProps['location'];
}
