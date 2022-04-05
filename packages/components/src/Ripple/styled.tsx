import styled, { keyframes } from 'styled-components';

import Flex from 'components/Flex';
import { RippleAnimationProps, RippleProps } from './types';

const StyledRipple = styled(Flex)<RippleProps>`
	position: absolute;
	overflow: hidden;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	/**
  * This solves an issue with iOS devices where ripple was showing outside the border-radius shape
  */
	mask-image: radial-gradient(white, black);
	border-radius: inherit;
`;

const rippleCssAnimation = keyframes`
  to {
    opacity: 0;
    transform: scale(2);
  }
`;

const RippleAnimation = styled.span<RippleAnimationProps>`
	left: ${props => props.x}px;
	top: ${props => props.y}px;
	width: ${props => props.size}px;
	height: ${props => props.size}px;
	transform: scale(0);
	border-radius: 100%;
	position: absolute;
	opacity: 0.2;
	background-color: currentColor;
	animation-name: ${rippleCssAnimation};
	animation-duration: ${props => props.duration}ms;
`;

export { RippleAnimation };
export default StyledRipple;
