import styled from 'styled-components';

import Flex from 'components/Flex';

import { TableFilterGroupProps } from './types';

const StyledTableFilterGroup = styled(Flex)<TableFilterGroupProps>``;

StyledTableFilterGroup.defaultProps = {
	alignItems: 'center',
	minHeight: 48,
	overflow: 'hidden',
	width: '100%'
};

export default StyledTableFilterGroup;
