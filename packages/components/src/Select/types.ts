import React from 'react';

import { TextFieldProps } from 'components/TextField';
import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

export type SelectedOption = Record<'label', string>;

type Props = {
	/**
	 * Boolean to tell the Select component that an external options are fetched and updated with last input change. It should be false at first, and only be true once a fetch is done.
	 */
	readonly areExternalOptionsValid?: boolean;

	/**
	 * SelectWrapper size
	 */
	readonly aspectSize?: 's' | 'm' | 'l';

	/**
	 * The default selected option or options. Use only when using the Select as uncontrolled.
	 */
	readonly defaultValue?: string | string[];

	/**
	 * Custom content to be shown in popover when no results are available.
	 */
	readonly emptyResultsContent?: React.ReactNode;

	/**
	 * Boolean to enable autocomplete feature. If true, the user will be able to type inside the input to filter the options.
	 */
	readonly isAutocomplete?: boolean;

	/**
	 * Boolean to disable built-in option filtering feature in autocomplete mode. Use this prop when updating dynamically options from outside the Select component.
	 */
	readonly isExternalFiltered?: boolean;

	/**
	 * Boolean to enable multi selection. If true, the user will be able to select more than one option.
	 */
	readonly isMultiSelect?: boolean;

	/**
	 * Callback function that is triggered when text input changes. Use this handler to update asynchronously the options for the autocomplete.
	 */
	readonly onInputChange?: (inputValue: string) => void;

	/**
	 * Callback function that is triggered every time a new option is selected
	 */
	readonly onOptionChange?: (value: string | string[] | null) => void;

	/**
	 * The selected option or options. Use only when using the Select as controlled.
	 */
	readonly value?: string | string[] | null;

	/**
	 * The color variant
	 */
	readonly variant?: 'neutral' | 'primary';
} & Pick<
	TextFieldProps,
	| 'hasRemoveButton'
	| 'helperText'
	| 'inputProps'
	| 'isDisabled'
	| 'isError'
	| 'isSuccess'
	| 'label'
	| 'labelPosition'
	| 'leftContent'
	| 'name'
	| 'placeholder'
>;

type SelectProps<T extends React.ElementType = 'div'> = Omit<ExtendedFlexProps<Props, T>, keyof Props> & Props;

type SelectComponent = ExtendedFlexComponent<Props, ['defaultValue']>;

export { SelectComponent, SelectProps };
