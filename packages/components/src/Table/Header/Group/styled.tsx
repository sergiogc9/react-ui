import styled from 'styled-components';

import Box from 'components/Box';

import { TableHeaderGroupProps } from './types';

const StyledTableHeaderGroup: React.FC<TableHeaderGroupProps> = styled(Box)<TableHeaderGroupProps>``;

StyledTableHeaderGroup.defaultProps = {
	alignItems: 'stretch',
	bg: 'primary.100',
	borderColor: 'primary.100',
	borderRadius: 1,
	borderStyle: 'solid',
	borderWidth: '1px',
	minHeight: 48,
	overflow: 'hidden',
	width: '100%'
};

export default StyledTableHeaderGroup;
