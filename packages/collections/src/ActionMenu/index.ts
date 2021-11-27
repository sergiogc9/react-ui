import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import ActionMenu from './ActionMenu';
import ActionMenuItem from './Item';
import { ActionMenuProps } from './types';

export type { ActionMenuProps };
export default createNameSpacedComponent(ActionMenu, {
	Item: ActionMenuItem
});
