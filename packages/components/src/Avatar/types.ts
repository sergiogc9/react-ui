import { FlexProps } from 'components/Flex';

export interface AvatarProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	/**
	 * Avatar size
	 */
	readonly aspectSize?: 's' | 'm' | 'l';
	/**
	 * Avatar type
	 */
	readonly iconType?: 'user' | 'business';
	/**
	 * Boolean to tell the Avatar component that the src url is being fetched from outside
	 */
	readonly isFetchingSource?: boolean;
	/**
	 * The image source
	 */
	readonly src?: string;
	/**
	 * Avatar Variants
	 */
	readonly variant?: 'circle' | 'rounded';
}
