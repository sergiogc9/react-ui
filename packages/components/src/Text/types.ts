import { StyledComponentProps } from 'components/types';
import { ComposedTextProps } from 'components/private/utils/composers/types';

export interface Props {
	/**
	 * The size of the text.
	 */
	readonly aspectSize?: 's' | 'xs' | 'm' | 'l' | 'xl';
}

export type TextProps<
	Attrs extends React.HTMLAttributes<any> = React.HTMLAttributes<HTMLSpanElement>,
	Ref = any
> = Props & StyledComponentProps<ComposedTextProps, Attrs, Ref>;
