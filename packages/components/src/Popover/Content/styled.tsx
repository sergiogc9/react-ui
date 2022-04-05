import styled, { css } from 'styled-components';
import systemCSS from '@styled-system/css';

import Flex from 'components/Flex';
import { PopoverContentProps } from './types';

export const StyledPopover: React.FC<PopoverContentProps> = styled(Flex)<PopoverContentProps>`
	opacity: ${props => (props.isVisible ? 1 : 0)};
	transition-duration: ${props => props.duration}ms;

	${props =>
		systemCSS({
			bg: props.theme.components.popover.colors.background,
			borderColor: props.theme.components.popover.colors.border
		})}

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
	borderRadius: 1,
	boxShadow: 'center2',
	borderStyle: 'solid',
	borderWidth: 'thin',
	height: '150px',
	paddingX: 3,
	paddingY: 2,
	transition: 'opacity 0.25s ease-in',
	width: '150px'
};
