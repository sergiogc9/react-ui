import { IconProps } from 'components/Icon/types';
import { ChipGroupProps } from '../types';

type Props = {
	/**
	 * Choose one size
	 */
	readonly aspectSize?: ChipGroupProps['aspectSize'];
	/**
	 * Choose the color variant
	 */
	readonly variant?: ChipGroupProps['variant'];
	/**
	 * Prop to choose the location of the icon in the group
	 */
	readonly location?: 'left' | 'right';
};

export type ChipIconProps = Props & IconProps;
