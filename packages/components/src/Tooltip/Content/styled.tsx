import styled from 'styled-components';

import Box from 'components/Box';
import variant from './variants/variant';
import { TooltipContentProps } from './types';

const getArrowPosition = (props: TooltipContentProps) => {
	const size = props.arrowSize! / 2;
	switch (props.placement) {
		case 'top':
		case 'top-start':
		case 'top-end':
			return `bottom: -${size}px;`;
		case 'bottom':
		case 'bottom-start':
		case 'bottom-end':
			return `top: -${size}px;`;
		case 'left':
		case 'left-start':
		case 'left-end':
			return `right: -${size}px;`;
		case 'right':
		case 'right-start':
		case 'right-end':
			return `left: -${size}px;`;
		default:
			return '';
	}
};

const StyledTooltip: React.FC<TooltipContentProps> = styled(Box)<TooltipContentProps>`
	opacity: ${props => (props.isVisible ? 1 : 0)};
	transition-duration: ${props => props.duration}ms;
	${props => variant(props)};
`;

StyledTooltip.defaultProps = {
	borderRadius: 0,
	paddingX: 3,
	paddingY: 2,
	transition: 'opacity 0.25s ease-in'
};

const StyledArrow = styled(Box)<TooltipContentProps>`
	width: ${props => props.arrowSize}px;
	height: ${props => props.arrowSize}px;
	${props => getArrowPosition(props)}
	&::before {
		content: '';
		position: absolute;
		height: ${props => props.arrowSize}px;
		width: ${props => props.arrowSize}px;
		transform: rotate(45deg);
		${props => variant(props)};
	}
`;

StyledArrow.defaultProps = {
	background: 'transparent',
	position: 'absolute'
};

export { StyledArrow, StyledTooltip };
