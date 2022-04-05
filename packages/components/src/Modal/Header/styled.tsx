import React from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';
import { ModalHeaderProps } from './types';

const ModalHeader: React.FC<ModalHeaderProps> = styled(Flex)<ModalHeaderProps>``;

ModalHeader.defaultProps = {
	alignItems: 'center',
	flexShrink: 0,
	minHeight: '72px',
	order: 0,
	p: 4,
	pr: 8
};

export default ModalHeader;
