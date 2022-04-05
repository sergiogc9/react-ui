import React from 'react';
import styled from 'styled-components';
import { Flex } from '@sergiogc9/react-ui';

import { SwitchBoxContentProps } from './types';

const SwitchBoxContent: React.FC<SwitchBoxContentProps> = styled(Flex)<SwitchBoxContentProps>``;

SwitchBoxContent.defaultProps = {
	flexDirection: 'column',
	marginRight: 3,
	width: 2 / 3
};

export default React.memo(SwitchBoxContent);
