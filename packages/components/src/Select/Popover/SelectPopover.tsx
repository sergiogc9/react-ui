import React from 'react';
import { useTheme } from 'styled-components';
import { getComponentLocale } from '@sergiogc9/react-ui-theme';

import Button from 'components/Button';
import Divider from 'components/Divider';
import Icon from 'components/Icon';

import SelectContext from '../Context';
import {
  StyledSelectPopover,
  StyledSelectPopoverEmptyBox,
  StyledSelectPopoverFooter,
  StyledPopoverListBox
} from './styled';
import { SelectPopoverProps } from './types';
import { getElementText, isStringIncluded } from '../utils';

const SelectPopover: React.FC<SelectPopoverProps> = React.forwardRef(
  ({ children, ...rest }, ref) => {
    const {
      isAutocomplete,
      isDisabled,
      inputValue,
      isMultiSelect,
      onClearOptions,
      onKeyPressed,
      onShowPopover,
      selectedOptions
    } = React.useContext(SelectContext);

    const theme = useTheme();

    const onSaveBtnClicked = React.useCallback(
      () => onShowPopover(false),
      [onShowPopover]
    );

    const onListBoxKeyPressed = React.useCallback<
      NonNullable<SelectPopoverProps['onKeyDown']>
    >(
      (ev) => {
        onKeyPressed('listBox', ev);
      },
      [onKeyPressed]
    );

    const filteredChildren = React.useMemo(() => {
      const childElements = React.Children.map(children, (c) => c);

      if (!childElements) return [];
      if (!isAutocomplete) return childElements;

      return childElements.filter((element) => {
        if (!React.isValidElement(element)) return false;

        const optionId = element.props.id;

        const isSearchOptionMatched =
          isStringIncluded(getElementText(element), inputValue) ||
          isStringIncluded(optionId, inputValue);

        return isSearchOptionMatched;
      });
    }, [children, inputValue, isAutocomplete]);

    return (
      <StyledSelectPopover onKeyDown={onListBoxKeyPressed} {...rest}>
        {filteredChildren.length === 0 && (
          <StyledSelectPopoverEmptyBox>
            <Icon icon="alert-error" marginRight={2} styling="outlined" />
            {getComponentLocale(theme, 'select', 'no_results')}
          </StyledSelectPopoverEmptyBox>
        )}
        <StyledPopoverListBox ref={ref} role="listbox">
          {filteredChildren}
        </StyledPopoverListBox>
        <Divider />
        {isMultiSelect && filteredChildren.length > 0 && (
          <StyledSelectPopoverFooter>
            <Button
              aspectSize="s"
              data-testid="select-listbox-remove-all-btn"
              isDisabled={
                isDisabled || Object.keys(selectedOptions).length === 0
              }
              onClick={onClearOptions}
              variant="subtle"
            >
              {getComponentLocale(theme, 'select', 'remove_all_btn')}
            </Button>
            <Button
              aspectSize="s"
              data-testid="select-listbox-save-btn"
              isDisabled={
                isDisabled || Object.keys(selectedOptions).length === 0
              }
              onClick={onSaveBtnClicked}
              variant="default"
            >
              {getComponentLocale(theme, 'select', 'save_btn')}
            </Button>
          </StyledSelectPopoverFooter>
        )}
      </StyledSelectPopover>
    );
  }
);

export default SelectPopover;
