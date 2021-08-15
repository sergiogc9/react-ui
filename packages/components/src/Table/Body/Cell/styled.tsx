import styled from 'styled-components';

import Box from 'components/Box';

import { TableBodyCellProps } from './types';

const TableBodyCell: React.FC<TableBodyCellProps> = styled(Box)<TableBodyCellProps>`
	flex-shrink: 1 !important;
`;

TableBodyCell.defaultProps = {
	padding: 3
};

export default TableBodyCell;
