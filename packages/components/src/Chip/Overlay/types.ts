import { FlexProps } from 'components/Flex';
import { ChipProps } from '../types';

export interface ChipOverlayProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
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
}
