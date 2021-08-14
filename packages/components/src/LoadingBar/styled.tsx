import React from 'react';
import styled from 'styled-components';
import css, { SystemStyleObject } from '@styled-system/css';

import Animation from 'components/Animation';
import Box from 'components/Box';

import { StyledLoadingBarProps, StyledLoadingBarProgressProps } from './types';

const getTransitionCssValues = (percentage: number): SystemStyleObject => {
	if (percentage <= 10) {
		return {
			transitionDuration: '0s',
			transitionTimingFunction: 'ease-out'
		};
	}

	if (percentage <= 70) {
		return {
			transitionDuration: '0.3s',
			transitionTimingFunction: 'linear'
		};
	}

	if (percentage <= 80) {
		return {
			transitionDuration: '4.5s',
			transitionTimingFunction: 'linear'
		};
	}

	if (percentage <= 90) {
		return {
			transitionDuration: '2s',
			transitionTimingFunction: 'linear'
		};
	}

	return {
		transitionDuration: '0.1s',
		transitionTimingFunction: 'ease-in'
	};
};

const StyledLoadingBar: React.FC<StyledLoadingBarProps> = styled(Box)<StyledLoadingBarProps>``;

StyledLoadingBar.defaultProps = {
	bg: 'neutral.100',
	height: 4,
	position: 'fixed',
	width: '100%',
	zIndex: 100
};

const StyledLoadingBarProgress: React.FC<StyledLoadingBarProgressProps> = styled(Box)<StyledLoadingBarProgressProps>`
	${({ percentage }) =>
		css({
			transitionProperty: 'width',
			width: `${percentage}%`,
			...getTransitionCssValues(percentage)
		})}
`;

StyledLoadingBarProgress.defaultProps = {
	bg: 'primary.500',
	height: '100%'
};

const AnimatedStyledLoadingBar = Animation.withBaseAnimation(StyledLoadingBar, Animation.SlideDownAnimation);

export { StyledLoadingBarProgress };
export default React.memo(AnimatedStyledLoadingBar);
