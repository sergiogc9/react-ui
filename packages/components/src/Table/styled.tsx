import styled from 'styled-components';

import Box from 'components/Box';

import { StyledTableWrapperProps } from './types';

const StyledTableWrapper: React.FC<StyledTableWrapperProps> = styled(Box)<StyledTableWrapperProps>``;

StyledTableWrapper.defaultProps = {
	flexDirection: 'column'
};

export default StyledTableWrapper;
