import { FlexProps } from 'components/Flex';

export interface TableContentGradientProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	/**
	 * Choose the gradient location.
	 */
	readonly location?: 'bottom' | 'left' | 'right' | 'top';
}
