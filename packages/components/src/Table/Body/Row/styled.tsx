import styled from 'styled-components';
import css from '@styled-system/css';

import Box from 'components/Box';

import { TableBodyRowProps } from './types';

const StyledTableBodyRow: React.FC<TableBodyRowProps> = styled(Box)<TableBodyRowProps>`
	&:hover {
		${css({
			bg: 'neutral.50'
		})}

		+ div:not([role="row"]) {
			${css({
				bg: 'neutral.50'
			})}
		}
	}

	&:not(:first-child) {
		margin-top: -1px;
	}
`;

StyledTableBodyRow.defaultProps = {
	alignItems: 'center',
	borderRadius: 1,
	marginBottom: '-1px',
	minHeight: 56,
	transition: 'background-color ease-in 0.15s',
	width: '100%'
};

export default StyledTableBodyRow;
