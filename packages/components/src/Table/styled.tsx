import styled from 'styled-components';

import Flex from 'components/Flex';

import { StyledTableWrapperProps } from './types';

const StyledTableWrapper: React.FC<StyledTableWrapperProps> = styled(Flex)<StyledTableWrapperProps>``;

StyledTableWrapper.defaultProps = {
	flexDirection: 'column'
};

export default StyledTableWrapper;
