import React from 'react';

import Keyboard from 'components/private/utils/keyboard';
import useMergeRefs from 'components/private/utils/hooks/useMergeRefs';
import dispatchOnChange from 'components/private/components/Input/utils';
import Box from 'components/Box';
import Icon from 'components/Icon';
import IconButton from 'components/IconButton';
import StyledTextFieldNumber from './styled';
import { TextFieldNumberProps } from './types';

const TextFieldNumber: React.FC<TextFieldNumberProps> = React.forwardRef<
  HTMLInputElement,
  TextFieldNumberProps
>(
  (
    {
      defaultValue,
      inputProps,
      inputMode = 'decimal',
      min = 0,
      max,
      onChange,
      value,
      ...rest
    },
    ref
  ) => {
    const [numberValue, setNumberValue] = React.useState(
      defaultValue ? +defaultValue : ''
    );

    const innerRef = React.useRef<HTMLInputElement>(null);
    const mergeRefs = useMergeRefs(innerRef, ref);

    const rightContent = React.useMemo(() => {
      return (
        <Box
          flexDirection="column"
          justifyContent="center"
          pointerEvents="auto"
        >
          <IconButton
            aspectSize="s"
            data-testid="text-field__number_up_arrow"
            isDisabled={max !== undefined && (value ?? numberValue) >= max}
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
            isDisabled={min !== undefined && (value ?? numberValue) <= min}
            onClick={() => {
              const num = value ?? numberValue;
              dispatchOnChange(innerRef, (+num - 1).toString());
            }}
            marginTop={1}
            size={16}
          >
            <Icon aspectSize="s" icon="arrow-down" styling="outlined" />
          </IconButton>
        </Box>
      );
    }, [max, min, numberValue, value]);

    const onTextFieldChange = React.useCallback<
      NonNullable<TextFieldNumberProps['onChange']>
    >(
      (ev) => {
        const newValue = ev.currentTarget.value.trim();

        if (ev.currentTarget.validity.badInput || Number.isNaN(+newValue))
          return;

        const currentValue = value ?? numberValue;
        if (
          newValue !== currentValue &&
          (newValue === '' ||
            ((max === undefined || +max >= +newValue) &&
              (min === undefined || +min <= +newValue)))
        ) {
          setNumberValue(newValue);
          if (onChange) onChange(ev);
        }
      },
      [max, min, numberValue, onChange, value]
    );

    const onKeyPressed = React.useCallback<
      NonNullable<TextFieldNumberProps['onKeyDown']>
    >(
      (event) => {
        const num = value ?? numberValue;
        if (Keyboard.isArrowDown(event.key))
          dispatchOnChange(innerRef, (+num - 1).toString());
        else if (Keyboard.isArrowUp(event.key))
          dispatchOnChange(innerRef, (+num + 1).toString());
      },
      [numberValue, value]
    );

    return (
      <StyledTextFieldNumber
        {...rest}
        inputProps={{ min, inputMode, ...inputProps }}
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
