import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import DropdownMenuFooter from './Footer';
import DropdownMenuItem from './Item';
import DropdownMenuTitle from './Title';
import { DropdownMenu } from './styled';
import { DropdownMenuProps } from './types';

export type { DropdownMenuProps };
export default createNameSpacedComponent(DropdownMenu, {
	Footer: DropdownMenuFooter,
	Item: DropdownMenuItem,
	Title: DropdownMenuTitle
});
