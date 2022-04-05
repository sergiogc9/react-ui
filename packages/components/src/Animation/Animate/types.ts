import { FlexProps } from 'components/Flex';
import { AnimationProps } from '../Base/types';

type Props = {
	/**
	 * Boolean to enable or disable the animation at first mount
	 */
	readonly animateAtMount?: NonNullable<AnimationProps['animateAtMount']>;
	/**
	 * Array of custom animations to be used.
	 */
	readonly animation: NonNullable<AnimationProps['animation']>[];
	/**
	 * Array of custom exit animations to be used.
	 */
	readonly animationExit?: NonNullable<AnimationProps['animationExit']>[];
	/**
	 * Array of delays to be used for each animation.
	 */
	readonly delay?: NonNullable<AnimationProps['delay']>[];
	/**
	 * Array of delays to be used for each exit animation.
	 */
	readonly delayExit?: NonNullable<AnimationProps['delayExit']>[];
	/**
	 * Array of directions to be used for each animation.
	 */
	readonly direction?: NonNullable<AnimationProps['direction']>[];
	/**
	 * Array of directions to be used for each exit animation.
	 */
	readonly directionExit?: NonNullable<AnimationProps['directionExit']>[];
	/**
	 * Array of durations to be used for each animation.
	 */
	readonly duration?: NonNullable<AnimationProps['duration']>[];
	/**
	 * Array of durations to be used for each exit animation.
	 */
	readonly durationExit?: NonNullable<AnimationProps['durationExit']>[];
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
	 * Array of iterations count to be used for each exit animation.
	 */
	readonly iterationCountExit?: NonNullable<AnimationProps['iterationCountExit']>[];
	/**
	 * Array of fill modes to be used for each animation.
	 */
	readonly fillMode?: NonNullable<AnimationProps['fillMode']>[];
	/**
	 * Array of fill modes to be used for each exit animation.
	 */
	readonly fillModeExit?: NonNullable<AnimationProps['fillModeExit']>[];
	/**
	 * Array of playState to be used for each animation.
	 */
	readonly playState?: NonNullable<AnimationProps['playState']>[];
	/**
	 * Array of timing functions to be used for each animation.
	 */
	readonly timingFunction?: NonNullable<AnimationProps['timingFunction']>[];
	/**
	 * Array of timing functions to be used for each exit animation.
	 */
	readonly timingFunctionExit?: NonNullable<AnimationProps['timingFunctionExit']>[];
};

export type AnimateProps = Props & FlexProps;
