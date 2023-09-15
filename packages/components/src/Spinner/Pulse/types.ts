import { FlexProps } from 'components/Flex';

export type SpinnerPulseProps<T extends React.ElementType = 'div'> = FlexProps<T> & {
	/**
	 * The position index of the pulse element, starting from 1.
	 */
	index: number;
};
