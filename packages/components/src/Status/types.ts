import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

type Props = {
	/**
	 * The color variant.
	 */
	readonly variant?: 'blue' | 'green' | 'grey' | 'red' | 'yellow';
};

type StatusProps<T extends React.ElementType = 'div'> = ExtendedFlexProps<Props, T>;

type StatusComponent = ExtendedFlexComponent<Props>;

export { StatusComponent, StatusProps };
