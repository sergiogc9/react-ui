import styled from 'styled-components';
import css from '@styled-system/css';

import Flex from 'components/Flex';

import { StyledTableHeaderCellProps, StyledTableHeaderCellContentProps } from './types';

const StyledTableHeaderCell: React.FC<StyledTableHeaderCellProps> = styled(Flex)<StyledTableHeaderCellProps>`
	flex-shrink: 1 !important;
	${props => css({ color: props.color ?? props.theme.components.table.colors.header.text })}

	${props =>
		props.canSort &&
		css({
			cursor: 'pointer',
			'&:hover': {
				bg: props.theme.components.table.colors.header.bgHover
			}
		})}

	.column-unsorted {
		opacity: 0;
		transition: opacity ease-in 0.15s;
		visibility: none;
	}

	&:hover {
		.column-unsorted {
			opacity: 1;
			visibility: visible;
		}
	}

	&:first-child {
		${css({ pl: 3 })}
	}

	&:last-child {
		${css({ pr: 3 })}
	}
`;

StyledTableHeaderCell.defaultProps = {
	alignItems: 'center',
	fontSize: 1,
	fontWeight: 'semibold',
	overflow: 'hidden',
	px: '12px',
	transition: 'background-color ease-in 0.15s'
};

const StyledTableHeaderCellContent: React.FC<StyledTableHeaderCellContentProps> = styled(Flex)`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
`;

StyledTableHeaderCellContent.defaultProps = {
	maxWidth: '100%',
	overflow: 'hidden',
	wordBreak: 'break-word'
};

export { StyledTableHeaderCellContent };
export default StyledTableHeaderCell;
