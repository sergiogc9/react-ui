import styled from 'styled-components';

import Box from 'components/Box';

import { TableToolbarProps } from './types';

const TableToolbar: React.FC<TableToolbarProps> = styled(Box)<TableToolbarProps>``;

TableToolbar.defaultProps = {
	alignItems: 'center',
	minHeight: 50,
	width: '100%'
};

export default TableToolbar;
