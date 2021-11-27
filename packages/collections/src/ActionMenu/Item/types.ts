import { BoxProps, ContentProps } from '@sergiogc9/react-ui';

type Props = {
	aspectSize?: ContentProps['aspectSize'];
	variant?: 'default' | 'danger';
};

export type ActionMenuItemProps = BoxProps & Props;
