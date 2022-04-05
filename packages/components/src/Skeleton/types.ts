import { FlexProps } from 'components/Flex';

type Props = {
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
};

export type SkeletonProps = Props & Omit<FlexProps, 'color'>;
