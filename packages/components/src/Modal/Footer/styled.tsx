import React from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';
import { ModalFooterProps } from './types';

const ModalFooter: React.FC<ModalFooterProps> = styled(Flex)<ModalFooterProps>``;

ModalFooter.defaultProps = {
	alignItems: 'center',
	order: 2,
	paddingLeft: 4,
	paddingRight: 4,
	paddingY: 4
};

export default ModalFooter;
