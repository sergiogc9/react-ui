import React from 'react';
import { keyframes } from 'styled-components';

import { BaseAnimationProps, withBaseAnimation } from '../Base';
import { AnimateProps } from './types';

// eslint-disable-next-line @typescript-eslint/ban-types
const withAnimate = <P extends {} = {}>(Component: React.ComponentType<P>) => {
	const BaseAnimation = withBaseAnimation(Component, keyframes``);

	const AnimateComponent: React.FC<AnimateProps> = ({
		animateAtMount = true,
		animation,
		animationExit,
		delay,
		delayExit,
		direction,
		directionExit,
		duration,
		durationExit,
		iterationCount,
		iterationCountExit,
		fillMode,
		fillModeExit,
		isEnabled = true,
		isVisible = true,
		onAnimationEnd,
		playState,
		timingFunction,
		timingFunctionExit,
		...rest
	}) => {
		const [index, setIndex] = React.useState(0);
		const [isComponentRendered, setIsComponentRendered] = React.useState(isVisible);

		React.useEffect(() => {
			if (isVisible) setIndex(0);
			else if (animationExit) setIndex(0);
			else setIndex(animation.length - 1);
		}, [isEnabled]); // eslint-disable-line react-hooks/exhaustive-deps

		React.useEffect(() => {
			if (isVisible) {
				setIndex(0);
				setIsComponentRendered(true);
			} else if (animationExit) setIndex(0);
			else setIndex(animation.length - 1);
		}, [isVisible]); // eslint-disable-line react-hooks/exhaustive-deps

		const onAnimationEnded: BaseAnimationProps['onAnimationEnd'] = React.useCallback<
			NonNullable<BaseAnimationProps['onAnimationEnd']>
		>(
			event => {
				if (isVisible) {
					if (index < animation.length - 1) {
						setIndex(currentIndex => currentIndex + 1);
					}
				} else if (animationExit) {
					if (index < animationExit.length - 1) {
						setIndex(currentIndex => currentIndex + 1);
					} else setIsComponentRendered(false);
				} else if (index > 0) {
					setIndex(currentIndex => currentIndex - 1);
				} else setIsComponentRendered(false);

				if (onAnimationEnd) onAnimationEnd(event);
			},
			[animation.length, animationExit, index, isVisible, onAnimationEnd]
		);

		const animationProps = React.useMemo<BaseAnimationProps>(() => {
			let finalDirection = direction ? direction[index] : undefined;
			if (!isVisible && !animationExit) finalDirection = 'reverse';

			return {
				animation: animation[index],
				animationExit: animationExit ? animationExit[index] : undefined,
				delay: delay ? delay[index] : undefined,
				delayExit: delayExit ? delayExit[index] : undefined,
				direction: finalDirection,
				directionExit: directionExit ? directionExit[index] : undefined,
				duration: duration ? duration[index] : undefined,
				durationExit: durationExit ? durationExit[index] : undefined,
				iterationCount: iterationCount ? iterationCount[index] : undefined,
				iterationCountExit: iterationCountExit ? iterationCountExit[index] : undefined,
				fillMode: fillMode ? fillMode[index] : undefined,
				fillModeExit: fillModeExit ? fillModeExit[index] : undefined,
				playState: playState ? playState[index] : undefined,
				timingFunction: timingFunction ? timingFunction[index] : undefined,
				timingFunctionExit: timingFunctionExit ? timingFunctionExit[index] : undefined
			};
		}, [
			animation,
			animationExit,
			delay,
			delayExit,
			direction,
			directionExit,
			duration,
			durationExit,
			fillMode,
			fillModeExit,
			index,
			isVisible,
			iterationCount,
			iterationCountExit,
			playState,
			timingFunction,
			timingFunctionExit
		]);

		if (!isComponentRendered) return null;

		return (
			<BaseAnimation
				animateAtMount={animateAtMount}
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
