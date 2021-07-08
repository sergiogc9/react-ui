import { BoxProps } from 'components/Box';

type Props = {
	/**
	 * The color of the ripple. If not set, color will be "currentColor".
	 */
	readonly color?: string;
	/**
	 * The duration of the animation of the ripple.
	 */
	readonly duration?: number;
};

export type RippleProps = Props & BoxProps;

export type RippleAnimationProps = {
	readonly x: number;
	readonly y: number;
	readonly size: number;
} & RippleProps;
