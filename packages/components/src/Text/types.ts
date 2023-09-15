import { BaseComponent, BaseComponentProps } from 'components/types';
import { ComposedTextProps } from 'components/private/utils/composers/types';

type Props = {
	/**
	 * The size of the text.
	 */
	readonly aspectSize?: 's' | 'xs' | 'm' | 'l' | 'xl';
} & ComposedTextProps;

type TextProps<T extends React.ElementType = 'span'> = BaseComponentProps<Props, T>;

type TextComponent = BaseComponent<
	<T extends React.ElementType = keyof JSX.IntrinsicElements>(
		props: TextProps<T>
	) => React.ReactElement<TextProps<T>, any> | null
>;

export { TextComponent, TextProps };
