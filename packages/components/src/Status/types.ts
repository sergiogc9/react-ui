import { FlexProps } from 'components/Flex';

type Props = {
	/**
	 * The color variant.
	 */
	readonly variant?: 'blue' | 'green' | 'grey' | 'red' | 'yellow';
};

export type StatusProps = Props & FlexProps;
