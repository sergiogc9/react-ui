import { PopoverContentProps } from '@sergiogc9/react-ui';

export type StyledActionMenuProps = PopoverContentProps;

export type ActionMenuProps = Omit<StyledActionMenuProps, 'isInteractive'>;
