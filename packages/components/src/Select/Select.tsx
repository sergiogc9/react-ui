import React from 'react';

import useClickOutside from 'components/private/utils/hooks/useClickOutside';
import useUpdateEffect from 'components/private/utils/hooks/useUpdateEffect';
import Box from 'components/Box';

import SelectContext, { SelectContextData } from './Context';
import SelectField, { SelectFieldProps } from './Field';
import { handlePressedKey } from './keyboard';
import { SelectOptionProps } from './Option';
import SelectPopover from './Popover';
import { useFocusOptionWhilePressingKey } from './hooks';
import { getInputLabelFromSelectedOptions, getSelectOptions } from './utils';
import StyledSelect from './styled';
import { SelectedOption, SelectProps } from './types';

const Select: React.FC<SelectProps> = ({
	aspectSize = 'm',
	children,
	defaultValue,
	hasRemoveButton = false,
	helperText,
	inputProps,
	isAutocomplete = false,
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
		getSelectOptions(defaultValue, value, (children as React.ReactChildren) || [])
	);

	const [inputValue, setInputValue] = React.useState(() => getInputLabelFromSelectedOptions(selectedOptions));
	const [isOpen, setIsOpen] = React.useState(false);

	const listBoxRef = React.useRef<HTMLUListElement>(null);
	const inputRef = React.useRef<HTMLInputElement>(null);
	const fieldBoxRef = React.useRef<HTMLDivElement>(null);

	useUpdateEffect(() => {
		if (onOptionChange) {
			if (isMultiSelect) onOptionChange(Object.keys(selectedOptions));
			else onOptionChange(Object.keys(selectedOptions).length ? Object.keys(selectedOptions)[0] : null);
		}
	}, [isMultiSelect, selectedOptions]);

	useUpdateEffect(() => {
		const newSelectedOptions = value ? getSelectOptions(undefined, value, children) : {};

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
			setSelectedOptions(newSelectedOptions);
		}
	}, [children]);

	const onClickedOutside = React.useCallback(() => {
		setIsOpen(false);
		setInputValue(getInputLabelFromSelectedOptions(selectedOptions));
	}, [selectedOptions]);

	useClickOutside(fieldBoxRef, onClickedOutside);

	const onOptionClicked = React.useCallback<NonNullable<SelectOptionProps['onClick']>>(
		ev => {
			if (!isMultiSelect) {
				setIsOpen(false);
				inputRef.current?.focus();
			}

			const option = ev.currentTarget as HTMLLIElement;
			const optionLabel = option.textContent || '';

			setSelectedOptions(currentOptions => {
				let newOptions = { ...currentOptions };

				if (isMultiSelect) {
					if (newOptions[option.id]) delete newOptions[option.id];
					else newOptions[option.id] = { label: optionLabel };
				} else newOptions = { [option.id]: { label: optionLabel } };

				if (!isAutocomplete || !isMultiSelect) setInputValue(getInputLabelFromSelectedOptions(newOptions));

				return newOptions;
			});
		},
		[isAutocomplete, isMultiSelect]
	);

	const onClearOptions = React.useCallback(() => {
		setSelectedOptions({});
		setInputValue('');
	}, []);

	const onAlphanumericKeyPressed = useFocusOptionWhilePressingKey(listBoxRef, isAutocomplete, setIsOpen);
	const onKeyPressed = React.useCallback<SelectContextData['onKeyPressed']>(
		(source, ev) => {
			handlePressedKey(source, ev, {
				clearOptions: onClearOptions,
				isAutocomplete,
				isOpen,
				listBoxElement: listBoxRef.current!,
				onAlphanumericKeyPressed,
				setIsOpen,
				textFieldInput: inputRef.current!
			});
		},
		[isAutocomplete, isOpen, onAlphanumericKeyPressed, onClearOptions]
	);

	const contextData = React.useMemo<SelectContextData>(
		() => ({
			aspectSize,
			inputValue,
			isAutocomplete,
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
			aspectSize,
			inputValue,
			isAutocomplete,
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
			setIsOpen(true);
			if (onInputChange) onInputChange(newValue);
		},
		[onInputChange]
	);

	const onTextFieldRemoveBtnClicked = React.useCallback<NonNullable<SelectFieldProps['onRemoveButtonClick']>>(
		() => setSelectedOptions({}),
		[]
	);

	return (
		<SelectContext.Provider value={contextData}>
			<StyledSelect {...rest}>
				<Box aria-haspopup="listbox" aria-expanded={isOpen} height="fit-content" ref={fieldBoxRef} width="100%">
					<SelectField
						aspectSize={aspectSize}
						hasRemoveButton={hasRemoveButton}
						helperText={helperText}
						inputProps={inputProps}
						label={label}
						labelPosition={labelPosition}
						leftContent={leftContent}
						name={name}
						onBlur={onBlur}
						onChange={onTextFieldChanged}
						onRemoveButtonClick={onTextFieldRemoveBtnClicked}
						placeholder={placeholder}
						ref={inputRef}
					/>
				</Box>
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
