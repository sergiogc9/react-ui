import styled from 'styled-components';

import Flex from 'components/Flex';

import aspectSize from './variants/aspectSize';
import status from './variants/status';
import { AlertProps } from './types';

const StyledAlert: React.FC<AlertProps> = styled(Flex)<AlertProps>`
	${aspectSize}
	${status}
`;

StyledAlert.defaultProps = {
	alignItems: 'center',
	p: 3,
	width: '100%'
};

export default StyledAlert;
