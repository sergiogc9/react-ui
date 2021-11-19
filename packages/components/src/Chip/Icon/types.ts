import { IconProps } from 'components/Icon/types';
import { ChipProps } from '../types';

type Props = {
	/**
	 * Choose the color variant
	 */
	readonly variant?: ChipProps['variant'];
};

export type ChipIconProps = Props & IconProps;
