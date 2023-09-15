import React from 'react';
import styled from 'styled-components';
import { Flex } from '@sergiogc9/react-ui';

import { SwitchBoxContentComponent, SwitchBoxContentProps } from './types';

const SwitchBoxContent: SwitchBoxContentComponent = styled(Flex)<SwitchBoxContentProps>``;

SwitchBoxContent.defaultProps = {
	flexDirection: 'column',
	marginRight: 3,
	width: 2 / 3
};

export default React.memo(SwitchBoxContent);
