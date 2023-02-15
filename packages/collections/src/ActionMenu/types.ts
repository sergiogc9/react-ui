import { PopoverContentProps } from '@sergiogc9/react-ui';

export interface StyledActionMenuProps extends PopoverContentProps {}

export interface ActionMenuProps extends Omit<StyledActionMenuProps, 'isInteractive'> {}
