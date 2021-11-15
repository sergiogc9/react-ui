import styled from 'styled-components';
import css from '@styled-system/css';

import Box from 'components/Box';

import { TableBodyCellProps } from './types';

const TableBodyCell: React.FC<TableBodyCellProps> = styled(Box)<TableBodyCellProps>`
	flex-shrink: 1 !important;

	&:first-child {
		${css({ pl: 3 })}
	}

	&:last-child {
		${css({ pr: 3 })}
	}
`;

TableBodyCell.defaultProps = {
	px: '12px'
};

export default TableBodyCell;
