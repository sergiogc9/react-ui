import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import DropdownMenuFooter from './Footer';
import DropdownMenuItem from './Item';
import DropdownMenuTitle from './Title';
import { DropdownMenu } from './styled';
import { DropdownMenuProps } from './types';

const NamespacedDropdownMenu = createNameSpacedComponent(DropdownMenu, {
	Footer: DropdownMenuFooter,
	Item: DropdownMenuItem,
	Title: DropdownMenuTitle
});

NamespacedDropdownMenu.displayName = 'DropdownMenu';
DropdownMenuFooter.displayName = 'DropdownMenu.Footer';
DropdownMenuItem.displayName = 'DropdownMenu.Item';
DropdownMenuTitle.displayName = 'DropdownMenu.Title';

export type { DropdownMenuProps };
export default NamespacedDropdownMenu;
