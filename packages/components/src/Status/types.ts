import { FlexProps } from 'components/Flex';

export interface StatusProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	/**
	 * The color variant.
	 */
	readonly variant?: 'blue' | 'green' | 'grey' | 'red' | 'yellow';
}
