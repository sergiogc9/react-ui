import React from 'react';
import styled from 'styled-components';
import { Popover } from '@sergiogc9/react-ui';

import { UserMenuPopoverProps } from './types';

const UserMenuPopover: React.FC<UserMenuPopoverProps> = React.memo(styled(Popover.Content)``);

UserMenuPopover.defaultProps = {
	borderRadius: 2,
	boxShadow: 'up',
	flexDirection: 'column',
	height: 'auto',
	paddingX: 0,
	paddingY: 3
};

export default React.memo(UserMenuPopover);
