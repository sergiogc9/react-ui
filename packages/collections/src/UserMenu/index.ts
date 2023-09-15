import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import UserMenuFooter from './Footer';
import UserMenuItem from './Item';
import UserMenuTitle from './Title';
import { UserMenuProps } from './types';
import UserMenu from './UserMenu';

const NamespacedUserMenu = createNameSpacedComponent(UserMenu, {
	Footer: UserMenuFooter,
	Item: UserMenuItem,
	Title: UserMenuTitle
});

NamespacedUserMenu.displayName = 'UserMenu';
UserMenuFooter.displayName = 'UserMenu.Footer';
UserMenuItem.displayName = 'UserMenu.Item';
UserMenuTitle.displayName = 'UserMenu.Title';

export type { UserMenuProps };
export default NamespacedUserMenu;
