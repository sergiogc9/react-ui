import { StatusProps } from 'components/Status';

export interface BadgeStatusProps extends StatusProps {
	/**
	 * Choose the badge location.
	 */
	readonly location?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
