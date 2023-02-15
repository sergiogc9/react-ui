import { TextProps } from '@sergiogc9/react-ui';

export interface ActionMenuItemProps extends TextProps<React.HTMLAttributes<HTMLSpanElement>, undefined> {
	variant?: 'default' | 'danger';
}
