import { FlexProps } from '@sergiogc9/react-ui';

import { UserMenuProps } from '../types';

export interface UserMenuFullScreenProps
	extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined>,
		Pick<UserMenuProps, 'appendTo' | 'isVisible' | 'onClose' | 'reference'> {}
