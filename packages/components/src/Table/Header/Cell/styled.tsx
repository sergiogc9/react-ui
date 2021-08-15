import styled from 'styled-components';
import css from '@styled-system/css';

import Box from 'components/Box';

import { StyledTableHeaderCellProps } from './types';

const StyledTableHeaderCell: React.FC<StyledTableHeaderCellProps> = styled(Box)<StyledTableHeaderCellProps>`
	flex-shrink: 1 !important;

	${props =>
		props.canSort &&
		css({
			cursor: 'pointer',
			'&:hover': {
				bg: 'neutral.100'
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
`;

StyledTableHeaderCell.defaultProps = {
	alignItems: 'center',
	color: 'neutral.900',
	fontSize: 0,
	fontWeight: 'semibold',
	padding: 3,
	transition: 'background-color ease-in 0.15s'
};

export default StyledTableHeaderCell;
