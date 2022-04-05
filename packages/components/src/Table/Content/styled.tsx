import styled from 'styled-components';

import Flex from 'components/Flex';

import { TableContentProps } from './types';

const StyledTableContent: React.FC<TableContentProps> = styled(Flex)<TableContentProps>`
	display: block;
`;

StyledTableContent.defaultProps = {
	overflowX: 'auto',
	width: '100%'
};

export default StyledTableContent;
