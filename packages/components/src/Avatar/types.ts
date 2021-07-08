import { BoxProps } from 'components/Box';

type Props = {
	/**
	 * Avatar size
	 */
	readonly aspectSize?: 's' | 'm' | 'l';
	/**
	 * Avatar type
	 */
	readonly iconType?: 'user' | 'business';
	/**
	 * The image source
	 */
	readonly src?: string;
	/**
	 * Avatar Variants
	 */
	readonly variant?: 'circle' | 'rounded';
};

export type AvatarProps = Props & BoxProps;
