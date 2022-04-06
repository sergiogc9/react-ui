import { FlexProps, TextProps } from '@sergiogc9/react-ui';

type Props = {
	aspectSize?: TextProps['aspectSize'];
	variant?: 'default' | 'danger';
};

export type ActionMenuItemProps = FlexProps & Props;
