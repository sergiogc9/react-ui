import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import UserMenuFooter from './Footer';
import UserMenuItem from './Item';
import UserMenuTitle from './Title';
import { UserMenuProps } from './types';
import UserMenu from './UserMenu';

export type { UserMenuProps };

export default createNameSpacedComponent(UserMenu, {
	Footer: UserMenuFooter,
	Item: UserMenuItem,
	Title: UserMenuTitle
});
