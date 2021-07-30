import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import Box from 'components/Box';
import { SpinnerPulseProps } from './types';

const pulse = keyframes`
	0% {transform: scale(1); opacity: 1}
  45% {transform: scale(0.1); opacity: 0.7}
  80% {transform: scale(1); opacity: 1}
`;

const getPulseAnimation = (i: number) => css`
	animation: ${pulse} 1s ${i * 0.12}s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
`;

const Pulse: React.FC<SpinnerPulseProps> = styled(Box)<SpinnerPulseProps>`
	background-color: currentColor;
	border-radius: 100%;
	display: inline-block;
	animation-fill-mode: both;

	${props => getPulseAnimation(props.index)}
`;

Pulse.defaultProps = {
	as: 'span'
};

export { Pulse };
