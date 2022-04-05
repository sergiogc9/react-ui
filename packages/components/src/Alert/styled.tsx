import styled from 'styled-components';

import Flex from 'components/Flex';

import status from './variants/status';
import { AlertProps } from './types';

const StyledAlert: React.FC<AlertProps> = styled(Flex)<AlertProps>`
	${status}
`;

StyledAlert.defaultProps = {
	alignItems: 'center',
	minHeight: 48,
	p: 3,
	width: '100%'
};

export default StyledAlert;
