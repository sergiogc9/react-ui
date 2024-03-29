import styled from 'styled-components';
import css from '@styled-system/css';

import Flex from 'components/Flex';

import { TableBodyCellProps } from './types';

const TableBodyCell = styled(Flex)<TableBodyCellProps>`
	flex-shrink: 1 !important;

	&:first-child {
		${css({ pl: 3 })}
	}

	&:last-child {
		${css({ pr: 3 })}
	}
`;

TableBodyCell.defaultProps = {
	px: '12px',
	role: 'cell'
};

export default TableBodyCell;
