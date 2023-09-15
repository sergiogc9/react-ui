import styled from 'styled-components';

import Flex from 'components/Flex';

import { TableContentProps } from './types';

const StyledTableContent = styled(Flex)<TableContentProps>`
	display: block;
`;

StyledTableContent.defaultProps = {
	overflowX: 'auto',
	role: 'table',
	width: '100%'
};

export default StyledTableContent;
