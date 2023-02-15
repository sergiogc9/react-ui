import { Keyframes } from 'styled-components';
import CSS from 'csstype';

import { FlexProps } from 'components/Flex';

export interface AnimationProps {
	/**
	 * Boolean to enable or disable the animation at first mount
	 */
	readonly animateAtMount?: boolean;
	/**
	 * Use custom animation.
	 */
	readonly animation?: Keyframes;
	/**
	 * Use custom exit animation.
	 */
	readonly animationExit?: Keyframes;
	/**
	 * Specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation.
	 * CSS rule: animation-delay
	 */
	readonly delay?: CSS.Properties['animationDelay'];
	/**
	 * Specifies the amount of time to wait from applying the exit animation to an element before beginning to perform the animation.
	 * CSS rule: animation-delay
	 */
	readonly delayExit?: CSS.Properties['animationDelay'];
	/**
	 * Sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
	 * CSS rule: animation-direction
	 */
	readonly direction?: CSS.Properties['animationDuration'];
	/**
	 * Sets whether an exit animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
	 * CSS rule: animation-direction
	 */
	readonly directionExit?: CSS.Properties['animationDuration'];
	/**
	 * Sets the length of time that an animation takes to complete one cycle.
	 * CSS rule: animation-duration
	 */
	readonly duration?: CSS.Properties['animationDuration'];
	/**
	 * Sets the length of time that an exit animation takes to complete one cycle.
	 * CSS rule: animation-duration
	 */
	readonly durationExit?: CSS.Properties['animationDuration'];
	/**
	 * Boolean to perform or not the animation. If false, the animation stopped and reset. If you want to pause the animation use the `playState` prop.
	 */
	readonly isEnabled?: boolean;
	/**
	 * Boolean to show or not the component. Use this prop if you want a reverse animation when unmounting.
	 */
	readonly isVisible?: boolean;
	/**
	 * Sets the number of times an animation sequence should be played before stopping.
	 * CSS rule: animation-iteration-count
	 */
	readonly iterationCount?: CSS.Properties['animationIterationCount'];
	/**
	 * Sets the number of times an exit animation sequence should be played before stopping.
	 * CSS rule: animation-iteration-count
	 */
	readonly iterationCountExit?: CSS.Properties['animationIterationCount'];
	/**
	 * Sets how a CSS animation applies styles to its target before
	 * CSS rule: animation-fill-mode
	 */
	readonly fillMode?: CSS.Properties['animationFillMode'];
	/**
	 * Sets how a CSS exit animation applies styles to its target before
	 * CSS rule: animation-fill-mode
	 */
	readonly fillModeExit?: CSS.Properties['animationFillMode'];
	/**
	 * Sets whether an animation is running or paused
	 * CSS rule: animation-play-state
	 */
	readonly playState?: CSS.Properties['animationPlayState'];
	/**
	 * Boolean to prevent the BaseAnimation to unmount the component
	 */
	readonly shouldAlwaysRender?: boolean;
	/**
	 * Sets how an animation progresses through the duration of each cycle.
	 * CSS rule: animation-timing-function
	 */
	readonly timingFunction?: CSS.Properties['animationTimingFunction'];
	/**
	 * Sets how an exit animation progresses through the duration of each cycle.
	 * CSS rule: animation-timing-function
	 */
	readonly timingFunctionExit?: CSS.Properties['animationTimingFunction'];
}

export type BaseAnimationProps<P = Record<string, unknown>> = AnimationProps & FlexProps & P;
