import React from 'react';
import styled, { css, Keyframes } from 'styled-components';
import { useIsMounted, useMergeRefs, useUpdateEffect } from '@sergiogc9/react-hooks';

import { BaseAnimationProps } from './types';

const getAnimation = (
	isInitialRender: boolean,
	props: Required<
		Pick<BaseAnimationProps, 'animateAtMount' | 'animation' | 'animationExit' | 'isEnabled' | 'isVisible'>
	>,
	customAnimation?: Keyframes
) => {
	const { animation, animationExit, animateAtMount, isEnabled, isVisible } = props;

	if (!isEnabled || (!animateAtMount && isInitialRender)) return undefined;

	if (!isVisible && animationExit) return animationExit;

	return animation ?? customAnimation;
};

// eslint-disable-next-line @typescript-eslint/ban-types
const withBaseAnimation = <P extends {} = {}>(Component: React.ComponentType<P>, customAnimation?: Keyframes) => {
	const StyledAnimationComponent: React.FC<BaseAnimationProps> = styled(Component)<BaseAnimationProps>`
		animation-delay: ${props => (!props.isVisible ? props.delayExit ?? props.delay : props.delay)};
		animation-direction: ${props => (!props.isVisible ? props.directionExit ?? props.direction : props.direction)};
		animation-duration: ${props => (!props.isVisible ? props.durationExit ?? props.duration : props.duration)};
		animation-iteration-count: ${props =>
			!props.isVisible ? props.iterationCountExit ?? props.iterationCount : props.iterationCount};
		animation-fill-mode: ${props => (!props.isVisible ? props.fillModeExit ?? props.fillMode : props.fillMode)};
		animation-play-state: ${props => props.playState};
		animation-timing-function: ${props =>
			!props.isVisible ? props.timingFunctionExit ?? props.timingFunction : props.timingFunction};

		${props =>
			props.animation &&
			css`
				animation-name: ${props.animation};
			`}
	`;

	StyledAnimationComponent.defaultProps = {
		animateAtMount: true,
		delay: '0s',
		direction: 'normal',
		duration: '1s',
		iterationCount: '1',
		fillMode: 'both',
		playState: 'running',
		timingFunction: 'ease-in-out'
	};

	const AnimationComponent: React.FC<BaseAnimationProps<P>> = React.forwardRef<any, BaseAnimationProps<any>>(
		(
			{
				animateAtMount = true,
				animation,
				animationExit,
				isEnabled = true,
				isVisible = true,
				onAnimationEnd,
				shouldAlwaysRender = false,
				...rest
			},
			ref
		) => {
			const [isComponentRendered, setIsComponentRendered] = React.useState(isVisible);

			const isMounted = useIsMounted();

			const innerRef = React.useRef<HTMLElement>(null);
			const mergeRefs = useMergeRefs(innerRef, ref);

			useUpdateEffect(() => {
				if (isVisible) setIsComponentRendered(true);
			}, [isVisible]);

			React.useLayoutEffect(() => {
				const element = innerRef.current;

				if (element) {
					const direction = isVisible || animationExit ? '' : 'reverse';

					element.style.animation = 'none';
					// trigger reflow
					// eslint-disable-next-line @typescript-eslint/no-unused-expressions
					element.offsetWidth;
					element.style.animation = '';
					element.style.animationDirection = direction;
				}
			}, [isVisible]); // eslint-disable-line react-hooks/exhaustive-deps

			const onAnimationEnded: BaseAnimationProps['onAnimationEnd'] = event => {
				if (innerRef.current === event.target) {
					event.stopPropagation();

					const element = innerRef.current;
					if (element) element.style.animationDirection = '';

					if (!isVisible) setIsComponentRendered(false);
					if (onAnimationEnd) onAnimationEnd(event);
				}
			};

			const renderedAnimation = React.useMemo(() => {
				return getAnimation(
					!isMounted(),
					{ animateAtMount, animation, animationExit, isEnabled, isVisible },
					customAnimation
				);
			}, [animateAtMount, animation, animationExit, isEnabled, isMounted, isVisible]);

			// This is a kind of mock needed to improve tests performance and avoid tests to last many seconds when using animations
			if (typeof jest !== 'undefined' && !(window as any).useAnimationsInTests) {
				if (isVisible || shouldAlwaysRender) return <Component {...rest} ref={ref} />;
				return null;
			}

			if (!isComponentRendered && !shouldAlwaysRender) return null;

			return (
				<StyledAnimationComponent
					{...rest}
					animation={renderedAnimation}
					isEnabled={isEnabled}
					isVisible={isVisible}
					onAnimationEnd={onAnimationEnded}
					ref={mergeRefs}
				/>
			);
		}
	);

	return React.memo(AnimationComponent) as React.FC<BaseAnimationProps<P>>;
};

export default withBaseAnimation;
