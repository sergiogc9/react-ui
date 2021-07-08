import { CounterProps } from 'components/Counter';
import { BadgeStatusProps } from '../Status/types';

type Props = {
	/**
	 * Choose the badge location.
	 */
	readonly location?: BadgeStatusProps['location'];
};

export type BadgeCounterProps = Props & CounterProps;
