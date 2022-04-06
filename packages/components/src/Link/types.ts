import { TextProps } from 'components/Text';

type Props = {
	/**
	 * Link behavior
	 */
	readonly behavior?: 'default' | 'opposite';
};

export type LinkProps = Props & TextProps;
