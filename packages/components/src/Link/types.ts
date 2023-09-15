import { ExtendedTextComponent, ExtendedTextProps } from 'components/types';

type Props = {
	/**
	 * Link behavior
	 */
	readonly behavior?: 'default' | 'opposite';
};

type LinkProps<T extends React.ElementType = 'a'> = ExtendedTextProps<Props, T>;

type LinkComponent = ExtendedTextComponent<Props>;

export { LinkComponent, LinkProps };
