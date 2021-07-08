import { StatusProps } from 'components/Status';

type Props = {
	/**
	 * Choose the badge location.
	 */
	readonly location?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

export type BadgeStatusProps = Props & StatusProps;
