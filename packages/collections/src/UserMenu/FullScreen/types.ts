import { FlexProps } from '@sergiogc9/react-ui';

import { UserMenuProps } from '../types';

export type UserMenuFullScreenProps = FlexProps &
	Pick<UserMenuProps, 'appendTo' | 'isVisible' | 'onClose' | 'reference'>;
