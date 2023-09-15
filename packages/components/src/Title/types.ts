import { BaseComponent, BaseComponentProps } from 'components/types';
import { ComposedTextProps } from 'components/private/utils/composers/types';

type Props = {
	/**
	 * The size of the text.
	 */
	readonly aspectSize?: 'uppercase' | 'subtle' | 's' | 'xs' | 'm' | 'l' | 'xl';
} & ComposedTextProps;

type TitleProps<T extends React.ElementType = 'div'> = BaseComponentProps<T, Props>;

type TitleComponent = BaseComponent<
	<T extends React.ElementType = keyof JSX.IntrinsicElements>(
		props: TitleProps<T>
	) => React.ReactElement<TitleProps<T>, any> | null
>;

export { TitleComponent, TitleProps };
