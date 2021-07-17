import styled, { css } from 'styled-components';
import { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import Box from 'components/Box';
import { SkeletonProps } from './types';

const skeletonGradient =
	'linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0))';

const StyledSkeleton: React.FC<SkeletonProps> = styled(Box)<SkeletonProps>`
	${props => {
		const themeColor = getColorFromTheme(props.theme, props.color!);

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
					background-image: ${skeletonGradient};
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
