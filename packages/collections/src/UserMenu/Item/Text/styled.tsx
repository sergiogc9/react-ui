import React from 'react';
import styled from 'styled-components';
import { Content } from '@sergiogc9/react-ui';

import { UserMenuItemTextProps } from './types';

const UserMenuItemText: React.FC<UserMenuItemTextProps> = styled(Content)<UserMenuItemTextProps>``;

UserMenuItemText.defaultProps = {
	aspectSize: 'm',
	color: 'neutral.700'
};

export default UserMenuItemText;
