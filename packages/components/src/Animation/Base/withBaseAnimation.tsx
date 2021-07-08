import React from 'react';
import styled, { css, Keyframes } from 'styled-components';

import useMergeRefs from 'components/private/utils/hooks/useMergeRefs';
import { BaseAnimationProps } from './types';

// eslint-disable-next-line @typescript-eslint/ban-types
const withBaseAnimation = <P extends {} = {}>(Component: React.ComponentType<P>, customAnimation?: Keyframes) => {
	const StyledAnimationComponent: React.FC<BaseAnimationProps> = styled(Component)<BaseAnimationProps>`
		animation-delay: ${props => props.delay};
		animation-direction: ${props => props.direction};
		animation-duration: ${props => props.duration};
		animation-iteration-count: ${props => props.iterationCount};
		animation-fill-mode: ${props => props.fillMode};
		animation-play-state: ${props => props.playState};
		animation-timing-function: ${props => props.timingFunction};

		${props =>
			props.isEnabled &&
			(props.animation || customAnimation) &&
			css`
				animation-name: ${props.animation || customAnimation};
			`}
	`;

	StyledAnimationComponent.defaultProps = {
		delay: '0s',
		direction: 'normal',
		duration: '1s',
		isEnabled: true,
		iterationCount: '1',
		fillMode: 'both',
		playState: 'running',
		timingFunction: 'ease'
	};

	const AnimationComponent: React.FC<BaseAnimationProps<P>> = React.forwardRef<any, BaseAnimationProps<any>>(
		({ fillMode = 'both', isVisible = true, onAnimationEnd, shouldAlwaysRender = false, ...rest }, ref) => {
			const [isComponentRendered, setIsComponentRendered] = React.useState(isVisible);

			const innerRef = React.useRef<HTMLElement>(null);
			const mergeRefs = useMergeRefs(innerRef, ref);

			React.useEffect(() => {
				if (isVisible) setIsComponentRendered(true);
			}, [isVisible]);

			React.useLayoutEffect(() => {
				const element = innerRef.current;

				if (element) {
					const direction = isVisible ? '' : 'reverse';

					element.style.animation = 'none';
					// trigger reflow
					// eslint-disable-next-line @typescript-eslint/no-unused-expressions
					element.offsetWidth;
					element.style.animation = '';
					element.style.animationDirection = direction;
				}
			}, [isVisible]);

			const onAnimationEnded: BaseAnimationProps['onAnimationEnd'] = event => {
				const element = innerRef.current;
				if (element) element.style.animationDirection = '';

				if (!isVisible) setIsComponentRendered(false);
				if (onAnimationEnd) onAnimationEnd(event);
			};

			if (!isComponentRendered && !shouldAlwaysRender) return null;

			return (
				<StyledAnimationComponent
					{...rest}
					fillMode={fillMode}
					isVisible={isVisible}
					onAnimationEnd={onAnimationEnded}
					ref={mergeRefs}
				/>
			);
		}
	);

	return AnimationComponent;
};

export default withBaseAnimation;
