import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import Flex from 'components/Flex';
import { SpinnerCircleProps } from './types';

const spin = keyframes`
	from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

const spinBack = keyframes`
	from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(-720deg);
    }
`;

const __getCircleCss = ({ circles }: SpinnerCircleProps) => {
	if (circles === 1)
		return css<SpinnerCircleProps>`
			animation: ${spin} 1s linear infinite;
			background: transparent;
			border-radius: 50%;
			border-right: ${props => props.circleSize}px solid transparent;
			border-top: ${props => props.circleSize}px solid
				${props => getColorFromTheme(props.theme, props.color || 'primary.500')};
			margin: 0;
		`;

	if (circles === 2)
		return css<SpinnerCircleProps>`
			& {
				animation: ${spin} 1.5s linear infinite;
				border: ${props => props.circleSize}px solid transparent;
				border-radius: 50%;
				border-left-color: ${props => getColorFromTheme(props.theme, props.color || 'primary.700')};
				border-top-color: ${props => getColorFromTheme(props.theme, props.color || 'primary.700')};
				position: relative;
			}

			&::before {
				animation: ${spinBack} 1s linear infinite;
				border: ${props => props.circleSize}px solid transparent;
				border-left-color: ${props => getColorFromTheme(props.theme, props.color2 || 'primary.500')};
				border-radius: 50%;
				border-top-color: ${props => getColorFromTheme(props.theme, props.color2 || 'primary.500')};
				bottom: 7%;
				content: '';
				left: 7%;
				right: 7%;
				top: 7%;
				position: absolute;
			}
		`;

	if (circles === 3)
		return css<SpinnerCircleProps>`
			& {
				border: ${props => props.circleSize}px solid transparent;
				border-radius: 50%;
				border-top: ${props => props.circleSize}px solid
					${props => getColorFromTheme(props.theme, props.color || 'primary.500')};
				position: relative;
				animation: ${spin} 2s linear infinite;
			}

			&::before,
			&::after {
				content: '';
				border: ${props => props.circleSize}px solid transparent;
				border-radius: 50%;
				position: absolute;
			}
			&::before {
				bottom: 5%;
				left: 5%;
				right: 5%;
				top: 5%;
				border-top-color: ${props => getColorFromTheme(props.theme, props.color2 || 'primary.700')};
				animation: ${spin} 3.5s linear infinite;
			}
			&::after {
				bottom: 15%;
				left: 15%;
				right: 15%;
				top: 15%;
				border-top-color: ${props => getColorFromTheme(props.theme, props.color3 || 'primary.400')};
				animation: ${spin} 1.75s linear infinite;
			}
		`;
};

const Circle: React.FC<SpinnerCircleProps> = styled(Flex)<SpinnerCircleProps>`
	${__getCircleCss}
`;

Circle.defaultProps = {
	as: 'span',
	circles: 1,
	circleSize: 4,
	flexShrink: 0,
	overflow: 'hidden',
	size: 100
};

export { Circle };
