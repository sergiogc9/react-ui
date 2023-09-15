import { ExtendedFlexComponent, ExtendedFlexProps } from '@sergiogc9/react-ui';

import { UserMenuProps } from '../types';

type Props = Pick<UserMenuProps, 'appendTo' | 'isVisible' | 'onClose' | 'reference'>;

type UserMenuFullScreenProps<T extends React.ElementType = 'div'> = ExtendedFlexProps<Props, T>;

type UserMenuFullScreenComponent = ExtendedFlexComponent<Props>;

export { UserMenuFullScreenComponent, UserMenuFullScreenProps };
