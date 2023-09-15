import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import DropdownMenuItemIcon from './Icon';
import DropdownMenuItemText from './Text';
import DropdownMenuItem from './styled';

const NamespacedDropdownMenuItem = createNameSpacedComponent(DropdownMenuItem, {
	Icon: DropdownMenuItemIcon,
	Text: DropdownMenuItemText
});

NamespacedDropdownMenuItem.displayName = 'DropdownMenu.Item';
DropdownMenuItemIcon.displayName = 'DropdownMenu.Item.Icon';
DropdownMenuItemText.displayName = 'DropdownMenu.Item.Text';

export default NamespacedDropdownMenuItem;
