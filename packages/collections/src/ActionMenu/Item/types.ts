import { ExtendedTextComponent, ExtendedTextProps } from '@sergiogc9/react-ui';

type Props = {
	variant?: 'default' | 'danger';
};

type ActionMenuItemProps<T extends React.ElementType = 'span'> = ExtendedTextProps<Props, T>;

type ActionMenuItemComponent = ExtendedTextComponent<Props>;

export { ActionMenuItemComponent, ActionMenuItemProps };
