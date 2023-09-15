import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import UserMenuItemIcon from './Icon';
import UserMenuItemText from './Text';
import UserMenuItem from './UserMenuItem';

const NamespacedUserMenuItem = createNameSpacedComponent(UserMenuItem, {
	Icon: UserMenuItemIcon,
	Text: UserMenuItemText
});

NamespacedUserMenuItem.displayName = 'UserMenu.Item';
UserMenuItemIcon.displayName = 'UserMenu.Item.Icon';
UserMenuItemText.displayName = 'UserMenu.Item.Text';

export default NamespacedUserMenuItem;
