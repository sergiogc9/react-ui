import styled from 'styled-components';

import Flex from 'components/Flex';
import variant from './variants/variant';
import { StatusProps } from './types';

const Status: React.FC<StatusProps> = styled(Flex)`
	${variant}
`;

Status.defaultProps = {
	borderColor: 'common.background',
	borderWidth: '2px',
	borderStyle: 'solid',
	borderRadius: '50%',
	size: 12,
	variant: 'grey'
};

export { Status };
