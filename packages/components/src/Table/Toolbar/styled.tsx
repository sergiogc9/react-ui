import styled from 'styled-components';

import Flex from 'components/Flex';

import { TableToolbarProps } from './types';

const TableToolbar: React.FC<TableToolbarProps> = styled(Flex)<TableToolbarProps>``;

TableToolbar.defaultProps = {
	alignItems: 'center',
	minHeight: 50,
	width: '100%'
};

export default TableToolbar;
