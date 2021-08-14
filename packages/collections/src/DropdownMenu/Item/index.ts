import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import DropdownMenuItemIcon from './Icon';
import DropdownMenuItemText from './Text';
import DropdownMenuItem from './styled';

export default createNameSpacedComponent(DropdownMenuItem, {
	Icon: DropdownMenuItemIcon,
	Text: DropdownMenuItemText
});
