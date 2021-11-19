import styled, { css } from 'styled-components';

import Box from 'components/Box';
import { PopoverContentProps } from './types';

export const StyledPopover: React.FC<PopoverContentProps> = styled(Box)<PopoverContentProps>`
	opacity: ${props => (props.isVisible ? 1 : 0)};
	transition-duration: ${props => props.duration}ms;

	${props =>
		props.isBlur &&
		css`
			@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
				background-color: rgba(255, 255, 255, 0);
				backdrop-filter: blur(16px);
			}
		`}
`;

StyledPopover.defaultProps = {
	bg: 'neutral.0',
	borderRadius: 1,
	boxShadow: 'center2',
	height: '150px',
	paddingX: 3,
	paddingY: 2,
	transition: 'opacity 0.25s ease-in',
	width: '150px'
};
