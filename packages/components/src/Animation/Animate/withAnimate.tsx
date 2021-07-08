import React from 'react';
import { keyframes } from 'styled-components';

import { BaseAnimationProps, withBaseAnimation } from '../Base';
import { AnimateProps } from './types';

// eslint-disable-next-line @typescript-eslint/ban-types
const withAnimate = <P extends {} = {}>(Component: React.ComponentType<P>) => {
	const BaseAnimation = withBaseAnimation(Component, keyframes``);

	const AnimateComponent: React.FC<AnimateProps> = ({
		animation,
		delay,
		direction,
		duration,
		iterationCount,
		fillMode,
		isEnabled = true,
		isVisible = true,
		onAnimationEnd,
		playState,
		timingFunction,
		...rest
	}) => {
		const [index, setIndex] = React.useState(0);
		const [isComponentRendered, setIsComponentRendered] = React.useState(isVisible);

		React.useEffect(() => {
			if (isVisible) setIndex(0);
			else {
				setIndex(animation.length - 1);
			}
		}, [isEnabled]); // eslint-disable-line react-hooks/exhaustive-deps

		React.useEffect(() => {
			if (isVisible) {
				setIndex(0);
				setIsComponentRendered(true);
			} else {
				setIndex(animation.length - 1);
			}
		}, [isVisible]); // eslint-disable-line react-hooks/exhaustive-deps

		const onAnimationEnded: BaseAnimationProps['onAnimationEnd'] = event => {
			if (isVisible) {
				if (index < animation.length - 1) {
					setIndex(currentIndex => currentIndex + 1);
				}
			} else if (index > 0) {
				setIndex(currentIndex => currentIndex - 1);
			} else setIsComponentRendered(false);

			if (onAnimationEnd) onAnimationEnd(event);
		};

		const animationProps = React.useMemo<BaseAnimationProps>(() => {
			let finalDirection = direction ? direction[index] : undefined;
			if (!isVisible) finalDirection = 'reverse';

			return {
				animation: animation[index],
				delay: delay ? delay[index] : undefined,
				direction: finalDirection,
				duration: duration ? duration[index] : undefined,
				iterationCount: iterationCount ? iterationCount[index] : undefined,
				fillMode: fillMode ? fillMode[index] : undefined,
				playState: playState ? playState[index] : undefined,
				timingFunction: timingFunction ? timingFunction[index] : undefined
			};
		}, [animation, delay, direction, duration, fillMode, index, isVisible, iterationCount, playState, timingFunction]);

		if (!isComponentRendered) return null;

		return (
			<BaseAnimation
				isEnabled={isEnabled}
				isVisible={isVisible}
				onAnimationEnd={onAnimationEnded}
				{...animationProps}
				{...(rest as P)}
				shouldAlwaysRender
			/>
		);
	};

	return React.memo(AnimateComponent) as React.FC<AnimateProps & P>;
};

export default withAnimate;
