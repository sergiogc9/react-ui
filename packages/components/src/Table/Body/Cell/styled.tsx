import styled from 'styled-components';
import css from '@styled-system/css';

import Flex from 'components/Flex';

import { TableBodyCellProps } from './types';

const TableBodyCell: React.FC<TableBodyCellProps> = styled(Flex)<TableBodyCellProps>`
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
