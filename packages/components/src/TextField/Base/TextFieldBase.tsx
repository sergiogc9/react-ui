import React, { useCallback, useState, useRef, HTMLAttributes } from 'react';
import { useMergeRefs } from '@sergiogc9/react-hooks';

import dispatchOnChange from 'components/private/components/Input/utils';
import { bottomInputContentAnimation, InputCounter, InputHelperText } from 'components/private/components/Input';
import Animation from 'components/Animation';
import Flex from 'components/Flex';

import TextFieldLabel from './Label';
import TextFieldInput from './Input';
import RemoveButton from './RemoveButton';
import StyledTextFieldBase, { StyledTextFieldBaseWrapper, StyledTextFieldIconContent } from './styled';
import { TextFieldBaseProps } from './types';

const TextField: React.FC<TextFieldBaseProps> = React.forwardRef<HTMLInputElement, TextFieldBaseProps>(
	(
		{
			aspectSize = 'm',
			defaultValue,
			hasRemoveButton = false,
			helperText,
			id,
			inputProps,
			isDisabled = false,
			isError,
			isSuccess,
			label,
			labelPosition = 'inside',
			leftContent,
			maxLength,
			name,
			onBlur,
			onChange,
			onClick,
			onFocus,
			onRemoveButtonClick,
			placeholder,
			rightContent,
			type,
			value,
			...rest
		},
		ref
	) => {
		const [currentValue, setCurrentValue] = useState(defaultValue?.toString().substr(0, maxLength) || '');
		const [isInputFocused, setIsInputFocused] = React.useState(false);
		const innerInputRef = useRef<HTMLInputElement>(null);
		const mergeRefs = useMergeRefs(innerInputRef, ref);

		const onTextFieldChange = useCallback(
			(event: React.ChangeEvent<HTMLInputElement>) => {
				setCurrentValue(event.target.value!);
				if (onChange) onChange(event);
			},
			[onChange]
		);

		const onInputBlur = React.useCallback<NonNullable<HTMLAttributes<HTMLInputElement>['onBlur']>>(
			ev => {
				setIsInputFocused(false);
				if (onBlur) onBlur(ev);
			},
			[onBlur]
		);

		const onInputFocus = React.useCallback<NonNullable<HTMLAttributes<HTMLInputElement>['onFocus']>>(
			ev => {
				setIsInputFocused(true);
				if (onFocus) onFocus(ev);
			},
			[onFocus]
		);

		const finalValue = React.useMemo(() => {
			const val = value ?? currentValue;

			return maxLength ? val.toString().substr(0, maxLength) : val;
		}, [currentValue, maxLength, value]);

		const rightInputPadding = React.useMemo(() => {
			let paddingRight = hasRemoveButton ? 6 : 3;
			if (rightContent) paddingRight += 4;

			return paddingRight;
		}, [hasRemoveButton, rightContent]);

		return (
			<StyledTextFieldBaseWrapper isDisabled={isDisabled} {...rest} as={rest.as as any}>
				<StyledTextFieldBase labelPosition={labelPosition}>
					<Flex position="absolute" height="100%" width="100%">
						<StyledTextFieldIconContent ml={3}>{leftContent}</StyledTextFieldIconContent>
						<TextFieldLabel
							aspectSize={aspectSize}
							htmlFor={id}
							isDisabled={isDisabled}
							isError={isError}
							isInputFocused={isInputFocused}
							isSuccess={isSuccess}
							labelPosition={labelPosition}
							leftContent={leftContent}
							ml={leftContent ? 2 : 0}
							placeholder={placeholder}
							value={finalValue}
						>
							{label}
						</TextFieldLabel>
						{hasRemoveButton && (
							<RemoveButton
								isDisabled={isDisabled}
								mr={rightContent ? 1 : 0}
								onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
									const emptyString = '';

									setCurrentValue(emptyString);
									dispatchOnChange(innerInputRef, emptyString);

									if (onRemoveButtonClick) onRemoveButtonClick(event);
								}}
								value={finalValue}
							/>
						)}
						<StyledTextFieldIconContent mr={3} pointerEvents="none">
							{rightContent}
						</StyledTextFieldIconContent>
					</Flex>
					<TextFieldInput
						aspectSize={aspectSize}
						disabled={isDisabled}
						id={id}
						isDisabled={isDisabled}
						isError={isError}
						isInputFocused={isInputFocused}
						isSuccess={isSuccess}
						label={label}
						labelPosition={labelPosition}
						maxLength={maxLength}
						name={name}
						onBlur={onInputBlur}
						onChange={onTextFieldChange}
						onClick={onClick}
						onFocus={onInputFocus}
						placeholder={placeholder}
						pl={leftContent ? (aspectSize === 'xs' ? 6 : 7) : 3}
						pr={rightInputPadding}
						ref={mergeRefs}
						type={type}
						value={finalValue}
						{...inputProps}
					/>
				</StyledTextFieldBase>
				<Animation.BaseAnimation
					alignItems="flex-start"
					animateAtMount={false}
					animation={bottomInputContentAnimation}
					duration="0.3s"
					isVisible={!!(helperText || maxLength)}
					minHeight={24}
					paddingX={1}
					zIndex={0}
				>
					<InputHelperText aspectSize={aspectSize} isDisabled={isDisabled} isError={isError} isSuccess={isSuccess}>
						{helperText}
					</InputHelperText>
					{!!maxLength && (
						<InputCounter isDisabled={isDisabled} maxLength={maxLength} valueContent={finalValue.toString()} />
					)}
				</Animation.BaseAnimation>
			</StyledTextFieldBaseWrapper>
		);
	}
);

export default React.memo(TextField);
