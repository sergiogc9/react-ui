import React from 'react';
import { useUpdateEffect } from '@sergiogc9/react-hooks';

import Flex from 'components/Flex';

import SelectContext, { SelectContextData } from './Context';
import SelectField, { SelectFieldProps } from './Field';
import { handlePressedKey } from './keyboard';
import { SelectOptionProps } from './Option';
import SelectPopover from './Popover';
import { useFocusOptionWhilePressingKey } from './hooks';
import { getInputLabelFromSelectedOptions, getSelectedIds, getSelectOptions } from './utils';
import StyledSelect from './styled';
import { SelectedOption, SelectProps } from './types';

const Select: React.FC<SelectProps> = ({
	areExternalOptionsValid = false,
	aspectSize = 'm',
	children,
	defaultValue,
	emptyResultsContent,
	hasRemoveButton,
	helperText,
	inputProps,
	isAutocomplete = false,
	isExternalFiltered = false,
	isError = false,
	isSuccess = false,
	isDisabled = false,
	isMultiSelect = false,
	label,
	labelPosition,
	leftContent,
	name,
	onBlur,
	onInputChange,
	onOptionChange,
	placeholder,
	value,
	variant = 'neutral',
	...rest
}) => {
	const [selectedOptions, setSelectedOptions] = React.useState<Record<string, SelectedOption>>(() =>
		getSelectOptions(defaultValue, value, (children as React.ReactNode) || [])
	);

	const [inputValue, setInputValue] = React.useState(() => getInputLabelFromSelectedOptions(selectedOptions));
	const [lastUserInputChangedValue, setLastUserInputChangedValue] = React.useState(inputValue);
	const [isOpen, setIsOpen] = React.useState(false);

	const listBoxRef = React.useRef<HTMLUListElement>(null);
	const inputRef = React.useRef<HTMLInputElement>(null);
	const fieldBoxRef = React.useRef<HTMLDivElement>(null);

	useUpdateEffect(() => {
		const newSelectedOptions = value ? getSelectOptions(undefined, value, children) : {};

		setSelectedOptions(newSelectedOptions);
		setInputValue(getInputLabelFromSelectedOptions(newSelectedOptions));
	}, [value]);

	useUpdateEffect(() => {
		if (!isAutocomplete || document.activeElement !== inputRef.current) {
			const newSelectedOptions = getSelectOptions(
				undefined,
				value !== undefined ? value : Object.keys(selectedOptions),
				children
			);
			const newInputValue = getInputLabelFromSelectedOptions(newSelectedOptions);

			if (newInputValue !== inputValue) setInputValue(newInputValue);
		}
	}, [children]);

	const onOptionClicked = React.useCallback<NonNullable<SelectOptionProps['onClick']>>(
		ev => {
			if (!isMultiSelect) {
				setIsOpen(false);
				inputRef.current?.focus();
			}

			const option = ev.currentTarget as HTMLLIElement;
			const optionLabel = option.textContent || '';

			let newOptions = { ...selectedOptions };

			if (isMultiSelect) {
				if (newOptions[option.id]) delete newOptions[option.id];
				else newOptions[option.id] = { label: optionLabel };
			} else newOptions = { [option.id]: { label: optionLabel } };

			if (!isAutocomplete || !isMultiSelect) setInputValue(getInputLabelFromSelectedOptions(newOptions));
			setLastUserInputChangedValue('option selected'); // Needed to avoid cleaning selected option in autocomplete when blurring

			if (onOptionChange) onOptionChange(getSelectedIds(newOptions, isMultiSelect));

			setSelectedOptions(newOptions);
		},
		[isAutocomplete, isMultiSelect, onOptionChange, selectedOptions]
	);

	const onClearOptions = React.useCallback(() => {
		setSelectedOptions({});
		setInputValue('');
		if (onOptionChange) onOptionChange(getSelectedIds({}, isMultiSelect));
	}, [isMultiSelect, onOptionChange]);

	const onAlphanumericKeyPressed = useFocusOptionWhilePressingKey(listBoxRef, isAutocomplete, setIsOpen);
	const onKeyPressed = React.useCallback<SelectContextData['onKeyPressed']>(
		(source, ev) => {
			handlePressedKey(source, ev, {
				clearOptions: onClearOptions,
				isAutocomplete,
				isOpen,
				listBoxRef,
				onAlphanumericKeyPressed,
				setIsOpen,
				textFieldInput: inputRef.current!
			});
		},
		[isAutocomplete, isOpen, onAlphanumericKeyPressed, onClearOptions]
	);

	const contextData = React.useMemo<SelectContextData>(
		() => ({
			areExternalOptionsValid,
			aspectSize,
			emptyResultsContent,
			inputValue,
			isAutocomplete,
			isExternalFiltered,
			isDisabled,
			isError,
			isMultiSelect,
			isOpen,
			isSuccess,
			onClearOptions,
			onKeyPressed,
			onOptionClicked,
			onShowPopover: setIsOpen,
			selectedOptions,
			variant
		}),
		[
			areExternalOptionsValid,
			aspectSize,
			emptyResultsContent,
			inputValue,
			isAutocomplete,
			isExternalFiltered,
			isDisabled,
			isError,
			isMultiSelect,
			isOpen,
			isSuccess,
			onClearOptions,
			onKeyPressed,
			onOptionClicked,
			selectedOptions,
			variant
		]
	);

	const onTextFieldChanged = React.useCallback<NonNullable<SelectFieldProps['onChange']>>(
		ev => {
			const { value: newValue } = ev.target;

			setInputValue(newValue);
			setLastUserInputChangedValue(newValue);
			setIsOpen(true);
			if (onInputChange) onInputChange(newValue);
		},
		[onInputChange]
	);

	const onSelectBlur = React.useCallback<NonNullable<SelectFieldProps['onBlur']>>(
		ev => {
			ev.stopPropagation();

			if (!ev.relatedTarget || !ev.currentTarget.contains(ev.relatedTarget as Element)) {
				setIsOpen(false);

				if (isAutocomplete && !lastUserInputChangedValue.trim().length) {
					setSelectedOptions({});
					if (onOptionChange) onOptionChange(getSelectedIds({}, isMultiSelect));
				} else setInputValue(getInputLabelFromSelectedOptions(selectedOptions));

				if (onBlur) setTimeout(() => onBlur(ev), 100);
			}
		},
		[isAutocomplete, isMultiSelect, lastUserInputChangedValue, onBlur, onOptionChange, selectedOptions]
	);

	return (
		<SelectContext.Provider value={contextData}>
			<StyledSelect onBlur={onSelectBlur} {...rest}>
				<Flex aria-haspopup="listbox" aria-expanded={isOpen} height="fit-content" ref={fieldBoxRef} width="100%">
					<SelectField
						aspectSize={aspectSize}
						hasRemoveButton={hasRemoveButton}
						helperText={helperText}
						inputProps={inputProps}
						label={label}
						labelPosition={labelPosition}
						leftContent={leftContent}
						name={name}
						onChange={onTextFieldChanged}
						onRemoveButtonClick={onClearOptions}
						placeholder={placeholder}
						ref={inputRef}
					/>
				</Flex>
				<SelectPopover
					distance={4}
					isInteractive
					isVisible={isOpen}
					ref={listBoxRef}
					placement="bottom"
					reference={inputRef}
					tippyProps={{ appendTo: 'parent' }}
					width="100%"
				>
					{children}
				</SelectPopover>
			</StyledSelect>
		</SelectContext.Provider>
	);
};

Select.displayName = 'Select';

export default React.memo(Select);
