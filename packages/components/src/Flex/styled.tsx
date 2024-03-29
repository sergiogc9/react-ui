import styled from 'styled-components';

import Box from 'components/Box';

import { FlexComponent } from './types';

const Flex: FlexComponent = styled(Box)``;

Flex.defaultProps = {
	display: 'flex'
};

Flex.displayName = 'Flex';

export default Flex;
