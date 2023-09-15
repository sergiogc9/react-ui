import { ExtendedFlexComponent, ExtendedFlexProps } from '@sergiogc9/react-ui';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

type DropdownMenuItemProps<T extends React.ElementType = 'div'> = ExtendedFlexProps<Props, T>;

type DropdownMenuItemComponent = ExtendedFlexComponent<Props>;

export { DropdownMenuItemComponent, DropdownMenuItemProps };
