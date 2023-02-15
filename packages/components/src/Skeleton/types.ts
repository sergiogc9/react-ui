import { FlexProps } from 'components/Flex';

export interface SkeletonProps extends Omit<FlexProps, 'color'> {
	/**
	 * Boolean to perform or not the animation
	 */
	readonly animate?: boolean;
	/**
	 * The skeleton color
	 */
	readonly color?: string;
	/**
	 * The animation duration in seconds
	 */
	readonly duration?: number;
}
