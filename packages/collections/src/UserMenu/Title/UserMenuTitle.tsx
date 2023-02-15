import React from 'react';
import { Divider } from '@sergiogc9/react-ui';
import { useScreenSize } from '@sergiogc9/react-ui-utils';

import UserMenuContext from '../Context';
import StyledUserMenuTitle from './styled';
import { UserMenuTitleProps } from './types';

const UserMenuTitle: React.FC<UserMenuTitleProps> = ({ children, ...rest }) => {
	const { isMobileFullScreenEnabled } = React.useContext(UserMenuContext);
	const { isMobile } = useScreenSize();

	const isFullscreenMenuShown = isMobile && isMobileFullScreenEnabled;

	return (
		<>
			<StyledUserMenuTitle
				aspectSize={isFullscreenMenuShown ? 's' : undefined}
				mr={isFullscreenMenuShown ? 8 : undefined}
				mb={isFullscreenMenuShown ? 3 : undefined}
				py={isFullscreenMenuShown ? 0 : undefined}
				{...rest}
			>
				{children}
			</StyledUserMenuTitle>
			<Divider mb={isMobileFullScreenEnabled ? { xs: 0, md: 2 } : 2} mt={2} />
		</>
	);
};
export default React.memo(UserMenuTitle);
