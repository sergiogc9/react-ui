import styled from 'styled-components';

import Flex from 'components/Flex';
import variant from './variants/variant';
import { StatusComponent } from './types';

const Status: StatusComponent = styled(Flex)`
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
