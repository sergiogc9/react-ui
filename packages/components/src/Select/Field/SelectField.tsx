import React from 'react';
import { useMergeRefs } from '@sergiogc9/react-hooks';

import Icon from 'components/Icon';

import SelectContext from '../Context';
import { SelectFieldCounter, StyledSelectField } from './styled';
import { SelectFieldProps } from './types';

const SelectField: React.FC<SelectFieldProps> = React.forwardRef<HTMLInputElement, SelectFieldProps>(
	({ hasRemoveButton, helperText, inputProps, label, labelPosition, onChange, placeholder, ...rest }, ref) => {
		const {
			aspectSize,
			inputValue,
			isAutocomplete,
			isDisabled,
			isError,
			isExternalFiltered,
			isMultiSelect,
			isOpen,
			isSuccess,
			onKeyPressed,
			onShowPopover,
			selectedOptions
		} = React.useContext(SelectContext);

		const textFieldRef = React.useRef<HTMLInputElement>(null);
		const mergeRefs = useMergeRefs(textFieldRef, ref);

		const onTextFieldClicked = React.useCallback(() => {
			if (isAutocomplete) onShowPopover(true);
			else onShowPopover(!isOpen);
		}, [isAutocomplete, isOpen, onShowPopover]);

		const onTextFieldKeyPressed = React.useCallback<NonNullable<SelectFieldProps['onKeyDown']>>(
			ev => {
				onKeyPressed('textField', ev);
			},
			[onKeyPressed]
		);

		const onArrowClicked = React.useCallback(() => {
			if (isAutocomplete) {
				onShowPopover(!isOpen);
			} else textFieldRef.current?.click();
		}, [isAutocomplete, isOpen, onShowPopover]);

		const rightContent = React.useMemo(() => {
			return (
				<>
					<SelectFieldCounter
						cursor={isAutocomplete ? 'text' : 'pointer'}
						data-testid="select-multiple-counter"
						isVisible={isMultiSelect && Object.keys(selectedOptions).length > 1}
						marginRight={1}
						numberOfItems={Math.max(1, Object.keys(selectedOptions).length)}
					/>
					{!isExternalFiltered && (
						<Icon
							cursor="pointer"
							data-testid={isOpen ? 'select-field-arrow-up-icon' : 'select-field-arrow-down-icon'}
							fill="neutral.400"
							icon={isOpen ? 'arrow-up' : 'arrow-down'}
							onClick={onArrowClicked}
							pointerEvents="auto"
							styling="outlined"
						/>
					)}
				</>
			);
		}, [isAutocomplete, isExternalFiltered, isMultiSelect, isOpen, onArrowClicked, selectedOptions]);

		const finalInputProps = React.useMemo<SelectFieldProps['inputProps']>(
			() => ({
				...inputProps,
				autoComplete: 'off',
				cursor: isAutocomplete ? 'text' : 'pointer',
				readOnly: !isAutocomplete
			}),
			[inputProps, isAutocomplete]
		);

		return (
			<StyledSelectField
				aspectSize={aspectSize}
				data-testid="select-field"
				hasRemoveButton={hasRemoveButton ?? isExternalFiltered}
				helperText={helperText}
				inputProps={finalInputProps}
				isDisabled={isDisabled}
				isError={isError}
				isSuccess={isSuccess}
				label={label}
				labelPosition={labelPosition}
				onChange={onChange}
				onClick={onTextFieldClicked}
				onKeyDown={onTextFieldKeyPressed}
				placeholder={placeholder}
				ref={mergeRefs}
				rightContent={rightContent}
				selectedOptions={selectedOptions}
				value={inputValue}
				{...rest}
			/>
		);
	}
);

export default React.memo(SelectField);
