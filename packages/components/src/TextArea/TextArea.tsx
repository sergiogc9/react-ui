import React, { useState, useEffect, useCallback, useRef } from 'react';

import useMergeRefs from 'components/private/utils/hooks/useMergeRefs';
import { bottomInputContentAnimation, InputCounter, InputHelperText } from 'components/private/components/Input';
import Animation from 'components/Animation';
import Box from 'components/Box';
import TextAreaLabel from './Label';
import StyledTextArea, { StyledTextAreaWrapper } from './styled';
import { TextAreaProps } from './types';

const TextArea: React.FC<TextAreaProps> = React.forwardRef(
	(
		{
			defaultValue,
			height,
			helperText,
			id,
			isDisabled = false,
			isError = false,
			isSuccess = false,
			label,
			labelPosition = 'inside',
			maxLength,
			name,
			onBlur,
			onClick,
			onChange,
			placeholder,
			size,
			textareaProps,
			value,
			...rest
		},
		ref
	) => {
		const [textAreaContent, setTextAreaContent] = useState(
			value?.substr(0, maxLength) || defaultValue?.substr(0, maxLength) || ''
		);

		const innerRef = useRef<HTMLTextAreaElement>(null);
		const mergeRefs = useMergeRefs(innerRef, ref);

		const onValueChanged = useCallback(
			event => {
				setTextAreaContent(event.target.value);
				if (onChange) onChange(event);
			},
			[onChange]
		);

		useEffect(() => {
			const initialHeight = 65;
			innerRef.current!.style.height = `${initialHeight}px`;
			const finalHeight = height ?? size ?? Math.max(innerRef.current!.scrollHeight, initialHeight);
			innerRef.current!.style.height = `${+finalHeight}px`;
		}, [height, size, textAreaContent]);

		useEffect(() => {
			if (value !== undefined) setTextAreaContent(value);
		}, [value]);

		const finalContent = value ?? textAreaContent;

		return (
			<StyledTextAreaWrapper height={height} labelPosition={labelPosition} size={size} {...rest}>
				<Box
					position="absolute"
					height="100%"
					pointerEvents="none"
					width="99%" // Not using 100% because a 100% width causes the textarea to create horizontal scroll on parent
				>
					<TextAreaLabel
						htmlFor={id}
						isDisabled={isDisabled}
						isError={isError}
						isSuccess={isSuccess}
						labelPosition={labelPosition}
						placeholder={placeholder}
						value={finalContent}
					>
						{label}
					</TextAreaLabel>
				</Box>
				<StyledTextArea
					disabled={isDisabled}
					id={id}
					isDisabled={isDisabled}
					isError={isError}
					isSuccess={isSuccess}
					label={label}
					labelPosition={labelPosition}
					maxLength={maxLength}
					name={name}
					onBlur={onBlur}
					onChange={onValueChanged}
					onClick={onClick}
					overflow={size || height ? 'auto' : 'hidden'}
					placeholder={placeholder}
					ref={mergeRefs}
					value={finalContent}
					{...textareaProps}
				/>
				<Animation.BaseAnimation
					alignItems="flex-start"
					animation={bottomInputContentAnimation}
					duration="0.3s"
					isVisible={!!(helperText || maxLength)}
					minHeight={24}
					paddingX={1}
					zIndex={0}
				>
					<InputHelperText isDisabled={isDisabled} isError={isError} isSuccess={isSuccess}>
						{helperText}
					</InputHelperText>
					{!!maxLength && <InputCounter isDisabled={isDisabled} maxLength={maxLength} valueContent={finalContent} />}
				</Animation.BaseAnimation>
			</StyledTextAreaWrapper>
		);
	}
);

export default React.memo(TextArea);
