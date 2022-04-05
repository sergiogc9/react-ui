import { ContentProps, FlexProps } from '@sergiogc9/react-ui';

type Props = {
	aspectSize?: ContentProps['aspectSize'];
	variant?: 'default' | 'danger';
};

export type ActionMenuItemProps = FlexProps & Props;
