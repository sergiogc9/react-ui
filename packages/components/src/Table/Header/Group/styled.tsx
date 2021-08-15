import styled from 'styled-components';

import Box from 'components/Box';

import { TableHeaderGroupProps } from './types';

const StyledTableHeaderGroup: React.FC<TableHeaderGroupProps> = styled(Box)<TableHeaderGroupProps>``;

StyledTableHeaderGroup.defaultProps = {
	alignItems: 'stretch',
	bg: 'neutral.50',
	borderColor: 'neutral.100',
	borderRadius: 1,
	borderStyle: 'solid',
	borderWidth: '1px',
	minHeight: 48,
	width: '100%'
};

export default StyledTableHeaderGroup;
