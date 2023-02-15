import { TextProps } from 'components/Text';

export interface LinkProps extends TextProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, undefined> {
	/**
	 * Link behavior
	 */
	readonly behavior?: 'default' | 'opposite';
}
