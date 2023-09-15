import styled, { css } from 'styled-components';
import { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import Flex from 'components/Flex';
import { SkeletonProps } from './types';

const __getSkeletonGradient = (backgroundColor: string) => {
	return `linear-gradient(90deg, ${backgroundColor}00 0, ${backgroundColor}33 20%, ${backgroundColor}80 60%, ${backgroundColor}00)`;
};

const StyledSkeleton = styled(Flex)<SkeletonProps>`
	${props => {
		const backgroundColor = getColorFromTheme(props.theme, props.theme.colors.common.background);
		const themeColor = getColorFromTheme(props.theme, props.color ?? props.theme.components.skeleton.colors.color);

		return css`
			& {
				color: ${themeColor};

				&::after {
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					transform: translateX(-100%);
					background-image: ${__getSkeletonGradient(backgroundColor)};
					${props.animate &&
					css`
						animation: shimmer ${props.duration}s infinite;
					`}
					animation-timing-function: linear;
					content: '';
				}

				@keyframes shimmer {
					100% {
						transform: translateX(100%);
					}
				}
			}
		`;
	}}
`;

StyledSkeleton.defaultProps = {
	overflow: 'hidden',
	width: '100%'
};

export default StyledSkeleton;
