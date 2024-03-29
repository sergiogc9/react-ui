import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

type Props = {
	/**
	 * The size of the input label
	 */
	readonly aspectSize?: 'm' | 'l';
	/**
	 * A description text to be shown below the label. Should only be used together with label.
	 */
	readonly description?: string;
	/**
	 * If true, the inputCheck is disabled
	 */
	readonly isDisabled?: boolean;
	/**
	 * True if the inputCheck is checked by default. Use this prop only if the inputCheck is not controlled from outside.
	 */
	readonly isDefaultSelected?: boolean;
	/**
	 * True if the inputCheck is checked. Using this prop could be controlled from outside.
	 */
	readonly isSelected?: boolean;
	/**
	 * The label to show at right of the input
	 */
	readonly label?: string;
};

type InputCheckProps<T extends React.ElementType = 'input'> = ExtendedFlexProps<Props, T>;

type InputCheckComponent = ExtendedFlexComponent<Props>;

export { InputCheckComponent, InputCheckProps };
