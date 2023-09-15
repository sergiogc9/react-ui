import { BaseComponent, BaseComponentProps } from 'components/types';
import { ComposedTextProps } from 'components/private/utils/composers/types';

type Props = {
	/**
	 * The size of the text.
	 */
	readonly aspectSize?: 's' | 'xs' | 'm' | 'l' | 'xl';
} & ComposedTextProps;

type TextProps<T extends React.ElementType = 'div'> = BaseComponentProps<T, Props>;

type TextComponent = BaseComponent<
	<T extends React.ElementType = keyof JSX.IntrinsicElements>(
		props: TextProps<T>
	) => React.ReactElement<TextProps<T>, any> | null
>;

export { TextComponent, TextProps };
