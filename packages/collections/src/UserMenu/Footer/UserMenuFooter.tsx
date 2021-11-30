import React from 'react';
import { Box, Divider } from '@sergiogc9/react-ui';

import useScreenSize from 'collections/private/utils/hooks/useScreenSize';

import UserMenuContext from '../Context';
import StyledUserMenuFooter from './styled';
import { UserMenuFooterProps } from './types';

const UserMenuFooter: React.FC<UserMenuFooterProps> = ({ children, ...rest }) => {
	const { isMobileFullScreenEnabled } = React.useContext(UserMenuContext);
	const { isMobile } = useScreenSize();
	const isFullscreenMenuShown = isMobile && isMobileFullScreenEnabled;
	return (
		<Box flexDirection="column" mt="auto">
			<Divider data-testid="userMenuDividerFullScreen" mt={2} />
			<StyledUserMenuFooter p={isFullscreenMenuShown ? 3 : undefined} {...rest}>
				{children}
			</StyledUserMenuFooter>
		</Box>
	);
};

export default React.memo(UserMenuFooter);
