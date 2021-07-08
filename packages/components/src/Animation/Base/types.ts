import { Keyframes } from 'styled-components';
import CSS from 'csstype';

import { BoxProps } from 'components/Box';

export type AnimationProps = {
	/**
	 * Use custom animation. It can be used if not using the withBaseAnimation HOC.
	 */
	readonly animation?: Keyframes;
	/**
	 * Specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation.
	 * CSS rule: animation-delay
	 */
	readonly delay?: CSS.Properties['animationDelay'];
	/**
	 * Sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
	 * CSS rule: animation-direction
	 */
	readonly direction?: CSS.Properties['animationDuration'];
	/**
	 * Sets the length of time that an animation takes to complete one cycle.
	 * CSS rule: animation-duration
	 */
	readonly duration?: CSS.Properties['animationDuration'];
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
	 * Sets how a CSS animation applies styles to its target before
	 * CSS rule: animation-fill-mode
	 */
	readonly fillMode?: CSS.Properties['animationFillMode'];
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
};

export type BaseAnimationProps<P = Record<string, unknown>> = AnimationProps & BoxProps & P;
