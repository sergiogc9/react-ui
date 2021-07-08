import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import Box from 'components/Box';
import { StyledTextArea as BaseStyledTextArea } from 'components/private/components/Input';
import { TextAreaProps, StyledTextAreaProps } from './types';

const StyledTextArea: React.FC<StyledTextAreaProps> = styled(
  BaseStyledTextArea
)<StyledTextAreaProps>`
  ${(props) => {
    if (props.labelPosition === 'outside') {
      return css({
        zIndex: 1
      });
    }

    if (!props.label || (!props.value!.toString().trim() && !props.placeholder))
      return {};

    return css({
      paddingTop: 4
    });
  }}
`;

StyledTextArea.defaultProps = {
  height: '100%',
  width: '100%'
};

const StyledTextAreaWrapper: React.FC<TextAreaProps> = styled(
  Box
)<TextAreaProps>`
  ${(props) =>
    !props.paddingTop &&
    props.labelPosition === 'outside' &&
    css({ paddingTop: 4 })}
`;

StyledTextAreaWrapper.defaultProps = {
  boxSizing: 'border-box',
  flexDirection: 'column',
  width: '100%'
};

export { StyledTextAreaWrapper };
export default React.memo(StyledTextArea);
