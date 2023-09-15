import { FlexProps } from 'components/Flex';

export type TableContentGradientProps<T extends React.ElementType = 'div'> = FlexProps<T> & {
	/**
	 * Choose the gradient location.
	 */
	readonly location?: 'bottom' | 'left' | 'right' | 'top';
};
