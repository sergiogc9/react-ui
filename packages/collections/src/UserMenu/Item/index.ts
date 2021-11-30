import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import UserMenuItemIcon from './Icon';
import UserMenuItemText from './Text';
import UserMenuItem from './UserMenuItem';

export default createNameSpacedComponent(UserMenuItem, {
	Icon: UserMenuItemIcon,
	Text: UserMenuItemText
});
