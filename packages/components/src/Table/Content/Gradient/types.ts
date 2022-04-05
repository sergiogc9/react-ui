import { FlexProps } from 'components/Flex';

type Props = {
	/**
	 * Choose the gradient location.
	 */
	readonly location?: 'bottom' | 'left' | 'right' | 'top';
};

type TableContentGradientProps = FlexProps & Props;

export default TableContentGradientProps;
