import React from 'react';
import { useMergeRefs } from '@sergiogc9/react-hooks';
import { Keyboard } from '@sergiogc9/react-utils';

import dispatchOnChange from 'components/private/components/Input/utils';
import Flex from 'components/Flex';
import Icon from 'components/Icon';
import IconButton from 'components/IconButton';

import StyledTextFieldNumber from './styled';
import { TextFieldNumberProps } from './types';

const TextFieldNumber: React.FC<TextFieldNumberProps> = React.forwardRef<HTMLInputElement, TextFieldNumberProps>(
	({ defaultValue, inputProps, inputMode = 'decimal', isDisabled, min = 0, max, onChange, value, ...rest }, ref) => {
		const [numberValue, setNumberValue] = React.useState(defaultValue ? +defaultValue : '');

		const innerRef = React.useRef<HTMLInputElement>(null);
		const mergeRefs = useMergeRefs(innerRef, ref);

		const rightContent = React.useMemo(() => {
			return (
				<Flex flexDirection="column" justifyContent="center" pointerEvents="auto">
					<IconButton
						aspectSize="s"
						cursor={isDisabled ? 'default' : 'pointer'}
						data-testid="text-field__number_up_arrow"
						isDisabled={isDisabled || (max !== undefined && (value ?? numberValue) >= max)}
						onClick={() => {
							const num = value ?? numberValue;
							dispatchOnChange(innerRef, (+num + 1).toString());
						}}
						size={16}
					>
						<Icon aspectSize="s" icon="arrow-up" styling="outlined" />
					</IconButton>
					<IconButton
						aspectSize="s"
						data-testid="text-field__number_down_arrow"
						isDisabled={isDisabled || (min !== undefined && (value ?? numberValue) <= min)}
						onClick={() => {
							const num = value ?? numberValue;
							dispatchOnChange(innerRef, (+num - 1).toString());
						}}
						marginTop={1}
						size={16}
					>
						<Icon aspectSize="s" icon="arrow-down" styling="outlined" />
					</IconButton>
				</Flex>
			);
		}, [isDisabled, max, min, numberValue, value]);

		const onTextFieldChange = React.useCallback<NonNullable<TextFieldNumberProps['onChange']>>(
			ev => {
				const newValue = ev.currentTarget.value.trim();

				if (ev.currentTarget.validity.badInput || Number.isNaN(+newValue)) return;

				const currentValue = value ?? numberValue;
				if (
					newValue !== currentValue &&
					(newValue === '' || ((max === undefined || +max >= +newValue) && (min === undefined || +min <= +newValue)))
				) {
					setNumberValue(newValue);
					if (onChange) onChange(ev);
				}
			},
			[max, min, numberValue, onChange, value]
		);

		const onKeyPressed = React.useCallback<NonNullable<TextFieldNumberProps['onKeyDown']>>(
			event => {
				const num = value ?? numberValue;
				if (Keyboard.isKey('ArrowDown', event.key)) dispatchOnChange(innerRef, (+num - 1).toString());
				else if (Keyboard.isKey('ArrowUp', event.key)) dispatchOnChange(innerRef, (+num + 1).toString());
			},
			[numberValue, value]
		);

		return (
			<StyledTextFieldNumber
				{...rest}
				inputProps={{ min, inputMode, ...inputProps }}
				isDisabled={isDisabled}
				onChange={onTextFieldChange}
				onKeyDown={onKeyPressed}
				ref={mergeRefs}
				rightContent={rightContent}
				type="text"
				value={value ?? numberValue}
			/>
		);
	}
);

export default React.memo(TextFieldNumber);
