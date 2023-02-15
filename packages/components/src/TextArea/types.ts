import { FlexProps } from 'components/Flex';
import { StyledTextAreaProps as BaseStyledTextAreaProps } from 'components/private/components/Input';

interface Props
	extends Pick<
		BaseStyledTextAreaProps,
		'isDisabled' | 'isError' | 'isSuccess' | 'name' | 'onBlur' | 'onChange' | 'onClick' | 'placeholder' | 'ref'
	> {
	/**
	 * The default value used in the textArea
	 */
	readonly defaultValue?: string;
	/**
	 * The helper text to show at bottom of the input
	 */
	readonly helperText?: string;
	/**
	 * The maximum characters allowed
	 */
	readonly maxLength?: number;
	/**
	 * The label to show with the input
	 */
	readonly label?: string;

	/**
	 * Specifies how the label is positioned
	 */
	readonly labelPosition?: 'inside' | 'outside';
	/**
	 * The content of the textArea. Only used if the textArea is controlled from outside
	 */
	readonly value?: string;
}

export interface TextAreaProps extends Props, Omit<FlexProps, keyof Props> {
	readonly textareaProps?: Omit<BaseStyledTextAreaProps, keyof Props>;
}

export interface StyledTextAreaProps extends Props, Omit<BaseStyledTextAreaProps, keyof Props> {}
