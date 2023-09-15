import styled from 'styled-components';

import Flex from 'components/Flex';

import { TableFilterCellWrapperProps } from './types';

const TableFilterCellWrapper = styled(Flex)<TableFilterCellWrapperProps>`
	flex-shrink: 1 !important;
`;

TableFilterCellWrapper.defaultProps = {
	role: 'columnheader',
	px: 2,
	pt: 2
};

export default TableFilterCellWrapper;
