import { BaseAnimationProps } from 'components/Animation';
import { FlexProps } from 'components/Flex';

export interface OverlayProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	/**
	 * If a blurred overlay is wanted, use this prop to set the blur px.
	 */
	readonly blur?: number;
	/**
	 * Boolean to show or hide the overlay
	 */
	readonly isVisible?: BaseAnimationProps['isVisible'];
}
