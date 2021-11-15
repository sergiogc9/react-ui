import React from 'react';
import styled from 'styled-components';

import Box from 'components/Box';
import { ModalHeaderProps } from './types';

const ModalHeader: React.FC<ModalHeaderProps> = styled(Box)<ModalHeaderProps>``;

ModalHeader.defaultProps = {
	alignItems: 'center',
	flexShrink: 0,
	minHeight: '72px',
	order: 0,
	p: 4,
	pr: 8
};

export default ModalHeader;
