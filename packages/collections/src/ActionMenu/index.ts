import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import ActionMenu from './ActionMenu';
import ActionMenuItem from './Item';
import { ActionMenuProps } from './types';

const NamespacedActionMenu = createNameSpacedComponent(ActionMenu, {
	Item: ActionMenuItem
});

NamespacedActionMenu.displayName = 'ActionMenu';
ActionMenuItem.displayName = 'ActionMenu.Item';

export type { ActionMenuProps };
export default NamespacedActionMenu;
