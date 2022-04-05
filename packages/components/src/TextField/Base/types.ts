import React from 'react';

import { StyledInputProps } from 'components/private/components/Input';
import { FlexProps } from 'components/Flex';

export type Props = {
	/**
	 * The default value used in the textField. Used only when textField is uncontrolled.
	 */
	readonly defaultValue?: string | number;

	/**
	 * Show or hide the remove button
	 */
	readonly hasRemoveButton?: boolean;

	/**
	 * The helper text to show at bottom of the input
	 */
	readonly helperText?: string;

	/**
	 * The content to show at left of the text
	 */
	readonly leftContent?: React.ReactNode;

	/**
	 * The label to show with the input
	 */
	readonly label?: string;

	/**
	 * Specifies how the label is positioned
	 */
	readonly labelPosition?: 'inside' | 'outside';

	/**
	 * The maximum characters allowed
	 */
	readonly maxLength?: number;

	/**
	 * The input name
	 */
	readonly rightContent?: React.ReactNode;

	/**
	 * The event that occurs when the user clicks on the remove button.
	 */
	readonly onRemoveButtonClick?: React.MouseEventHandler<HTMLButtonElement>;

	/**
	 * The type of the input. Some type values have custom text fields implemented (e.g. date, number, etc.)
	 */
	readonly type?:
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';

	/**
	 * The value attribute specifies the value of an input element. Used to control the textField from outside.
	 */
	readonly value?: string | number;
} & Pick<
	StyledInputProps,
	| 'aspectSize'
	| 'isDisabled'
	| 'isError'
	| 'isSuccess'
	| 'name'
	| 'onBlur'
	| 'onChange'
	| 'onClick'
	| 'placeholder'
	| 'ref'
	| 'type'
>;

export type TextFieldBaseProps = Props &
	Omit<FlexProps, keyof Props> & {
		readonly inputProps?: Omit<StyledInputProps, keyof Props>;
	};
