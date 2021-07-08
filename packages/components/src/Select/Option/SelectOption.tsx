import React from 'react';

import CheckBox from 'components/CheckBox';

import SelectContext from '../Context';
import { StyledSelectOption } from './styled';
import { SelectOptionProps } from './types';

const SelectOption: React.FC<SelectOptionProps> = ({
  children,
  id,
  ...rest
}) => {
  const {
    aspectSize,
    inputValue,
    isAutocomplete,
    isMultiSelect,
    onKeyPressed,
    onOptionClicked,
    selectedOptions,
    variant
  } = React.useContext(SelectContext);

  const optionRef = React.useRef(document.createElement('li'));

  const onOptionKeyPressed = React.useCallback<
    NonNullable<SelectOptionProps['onKeyDown']>
  >(
    (ev) => {
      onKeyPressed('option', ev);
    },
    [onKeyPressed]
  );

  const isSelected = !!selectedOptions[id];

  const content = React.useMemo(() => {
    if (typeof children !== 'string' || !inputValue || !isAutocomplete)
      return children;

    return (
      <span
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: children.replace(
            new RegExp(inputValue, 'gi'),
            (match) => `<strong>${match}</strong>`
          )
        }}
      />
    );
  }, [children, inputValue, isAutocomplete]);

  return (
    <StyledSelectOption
      as="li"
      aria-selected={isSelected}
      aspectSize={aspectSize}
      id={id}
      isSelected={isSelected}
      onClick={onOptionClicked}
      onKeyDown={onOptionKeyPressed}
      ref={optionRef}
      role="option"
      tabIndex={-1}
      variant={variant}
      {...rest}
    >
      {isMultiSelect && <CheckBox isSelected={isSelected} mr={2} />}
      {content}
    </StyledSelectOption>
  );
};

export default React.memo(SelectOption);
