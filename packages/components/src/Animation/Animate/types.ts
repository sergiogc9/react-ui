import { BoxProps } from 'components/Box';
import { AnimationProps } from '../Base/types';

type Props = {
	/**
	 * Array of custom animations to be used.
	 */
	readonly animation: NonNullable<AnimationProps['animation']>[];
	/**
	 * Array of delays to be used for each animation.
	 */
	readonly delay?: NonNullable<AnimationProps['delay']>[];
	/**
	 * Array of directions to be used for each animation.
	 */
	readonly direction?: NonNullable<AnimationProps['direction']>[];
	/**
	 * Array of durations to be used for each animation.
	 */
	readonly duration?: NonNullable<AnimationProps['duration']>[];
	/**
	 * Boolean to perform or not the animation. If false, the animations are stopped and reset.
	 */
	readonly isEnabled?: boolean;
	/**
	 * Boolean to show or not the component. Use this prop if you want a reverse animation when unmounting.
	 */
	readonly isVisible?: boolean;
	/**
	 * Array of iterations count to be used for each animation.
	 */
	readonly iterationCount?: NonNullable<AnimationProps['iterationCount']>[];
	/**
	 * Array of fill modes to be used for each animation.
	 */
	readonly fillMode?: NonNullable<AnimationProps['fillMode']>[];
	/**
	 * Array of playState to be used for each animation.
	 */
	readonly playState?: NonNullable<AnimationProps['playState']>[];
	/**
	 * Array of timing functions to be used for each animation.
	 */
	readonly timingFunction?: NonNullable<AnimationProps['timingFunction']>[];
};

export type AnimateProps = Props & BoxProps;
