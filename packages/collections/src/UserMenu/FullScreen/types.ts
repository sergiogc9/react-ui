import { BoxProps } from '@sergiogc9/react-ui';

import { UserMenuProps } from '../types';

export type UserMenuFullScreenProps = BoxProps &
	Pick<UserMenuProps, 'appendTo' | 'isVisible' | 'onClose' | 'reference'>;
