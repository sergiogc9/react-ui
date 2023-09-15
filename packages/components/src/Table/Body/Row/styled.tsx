import styled from 'styled-components';
import css from '@styled-system/css';

import Flex from 'components/Flex';

import { TableBodyRowProps } from './types';

const StyledTableBodyRow = styled(Flex)<TableBodyRowProps>`
	${props =>
		css({
			bg:
				(props.bg as string) ??
				props.background ??
				props.backgroundColor ??
				props.theme.components.table.colors.content.bg
		})}

	&:hover {
		${props =>
			css({
				bg: props.theme.components.table.colors.content.bgHover
			})}

		+ div:not([role="row"]) {
			${props =>
				!props.showAllBorders &&
				css({
					bg: props.theme.components.table.colors.content.bgHover
				})}
		}
	}

	${props =>
		!props.showAllBorders &&
		`
			&:not(:first-child) {
				margin-top: -1px;
			}
		`}

	${props => props.css}
`;

StyledTableBodyRow.defaultProps = {
	alignItems: 'center',
	borderRadius: 1,
	marginBottom: '-1px',
	minHeight: 56,
	role: 'row',
	transition: 'background-color ease-in 0.15s',
	width: '100%'
};

export default StyledTableBodyRow;
