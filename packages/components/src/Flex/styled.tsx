import React from 'react';
import styled from 'styled-components';

import Box from 'components/Box';

import { FlexProps } from './types';

const Flex: React.FC<FlexProps> = styled(Box)``;

Flex.defaultProps = {
	display: 'flex'
};

export default Flex;
