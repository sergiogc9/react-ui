import { StyledComponentProps } from 'components/types';
import { ComposedTextProps } from 'components/private/utils/composers/types';

interface Props {
	/**
	 * The size of the text.
	 */
	readonly aspectSize?: 'uppercase' | 'subtle' | 's' | 'xs' | 'm' | 'l' | 'xl';
}

export type TitleProps<
	Attrs extends React.HTMLAttributes<any> = React.HTMLAttributes<HTMLSpanElement>,
	Ref = any
> = Props & StyledComponentProps<ComposedTextProps, Attrs, Ref>;
