import { FlexProps } from 'components/Flex';

export interface RippleProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	/**
	 * The color of the ripple. If not set, color will be "currentColor".
	 */
	readonly color?: string;
	/**
	 * The duration of the animation of the ripple.
	 */
	readonly duration?: number;
}

export interface RippleAnimationProps extends RippleProps {
	readonly x: number;
	readonly y: number;
	readonly size: number;
}
