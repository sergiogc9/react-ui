import { ExtendedTextComponent, ExtendedTextProps } from '@sergiogc9/react-ui';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

type DropdownMenuItemTextProps<T extends React.ElementType = 'span'> = ExtendedTextProps<Props, T>;

type DropdownMenuItemTextComponent = ExtendedTextComponent<Props>;

export { DropdownMenuItemTextComponent, DropdownMenuItemTextProps };
