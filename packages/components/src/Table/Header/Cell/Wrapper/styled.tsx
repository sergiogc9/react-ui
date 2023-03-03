import styled from 'styled-components';

import Flex from 'components/Flex';

import { TableHeaderCellWrapperProps } from './types';

const TableHeaderCellWrapper: React.FC<TableHeaderCellWrapperProps> = styled(Flex)<TableHeaderCellWrapperProps>`
	flex-shrink: 1 !important;
`;

TableHeaderCellWrapper.defaultProps = {
	role: 'columnheader'
};

export default TableHeaderCellWrapper;
