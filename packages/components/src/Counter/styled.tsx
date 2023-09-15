import styled from 'styled-components';

import Flex from 'components/Flex';
import aspectSize from './variants/aspectSize';
import variant from './variants/variant';
import { CounterComponent } from './types';

export const StyledCounter: CounterComponent = styled(Flex)`
	${aspectSize}
	${variant}
`;

StyledCounter.defaultProps = {
	alignItems: 'center',
	aspectSize: 'm',
	fontWeight: 'semibold',
	justifyContent: 'center'
};
