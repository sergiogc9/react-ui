import React from 'react';
import styled from 'styled-components';

import { ScrollBox } from 'components/Box';
import { ModalContentProps } from './types';

const ModalContent: React.FC<ModalContentProps> = styled(ScrollBox)<ModalContentProps>``;

ModalContent.defaultProps = {
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
	flexShrink: 2,
	px: 4,
	py: 6,
	order: 1
};

export default ModalContent;
