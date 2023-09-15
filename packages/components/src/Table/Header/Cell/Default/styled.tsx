import styled from 'styled-components';
import css from '@styled-system/css';

import Flex from 'components/Flex';

import { StyledTableHeaderCellDefaultProps } from './types';

const StyledTableHeaderCellDefault = styled(Flex)<StyledTableHeaderCellDefaultProps>`
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
`;

StyledTableHeaderCellDefault.defaultProps = {
	alignItems: 'center',
	fontSize: 1,
	fontWeight: 'semibold',
	overflow: 'hidden',
	px: '12px',
	transition: 'background-color ease-in 0.15s',
	width: '100%'
};

const StyledTableHeaderCellDefaultContent = styled(Flex)`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	word-break: break-word;
`;

StyledTableHeaderCellDefaultContent.defaultProps = {
	maxWidth: '100%',
	overflow: 'hidden'
};

export { StyledTableHeaderCellDefaultContent };
export default StyledTableHeaderCellDefault;
