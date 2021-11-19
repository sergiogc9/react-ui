import { BoxProps } from 'components/Box';
import { ChipProps } from '../types';

type Props = {
	/**
	 * Choose one size
	 */
	readonly aspectSize?: ChipProps['aspectSize'];
	/**
	 * Set to show always the overlay
	 */
	readonly isAlwaysVisible?: ChipProps['isOverlayAlwaysVisible'];
	/**
	 * Choose the color variant
	 */
	readonly variant?: ChipProps['variant'];
};

export type ChipOverlayProps = Props & BoxProps;
