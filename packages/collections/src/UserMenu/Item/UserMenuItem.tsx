import React from 'react';
import { Divider, Flex } from '@sergiogc9/react-ui';

import Responsive from 'collections/private/components/Responsive/Responsive';

import UserMenuContext from '../Context';
import StyledUserMenuItem from './styled';
import { UserMenuItemProps } from './types';

const UserMenuItem: React.FC<UserMenuItemProps> = ({ children, ...rest }) => {
	const { isMobileFullScreenEnabled } = React.useContext(UserMenuContext);

	return (
		<>
			<StyledUserMenuItem {...rest}>
				<Flex alignItems="center" py={isMobileFullScreenEnabled ? { xs: 2, md: 0 } : undefined} width="100%">
					{children}
				</Flex>
			</StyledUserMenuItem>

			<Responsive visibility={isMobileFullScreenEnabled ? ['xs', 'sm'] : []}>
				<Divider data-testid="userMenuDividerFullScreen" px={3} />
			</Responsive>
		</>
	);
};
export default React.memo(UserMenuItem);
