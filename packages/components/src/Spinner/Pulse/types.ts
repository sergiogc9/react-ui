import { FlexProps } from 'components/Flex';

export interface SpinnerPulseProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	/**
	 * The position index of the pulse element, starting from 1.
	 */
	index: number;
}
