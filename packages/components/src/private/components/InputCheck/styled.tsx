import {
  getColorFromTheme,
  getColorFromThemeWithOpacity
} from '@sergiogc9/react-ui-theme';
import Box from 'components/Box';
import styled, { css } from 'styled-components';

import { InputCheckProps } from './types';

const StyledInputCheck: React.FC<InputCheckProps> = styled(
  Box
)<InputCheckProps>`
  input {
    cursor: inherit;
    height: 100%;
    margin: 0;
    opacity: 0;
    z-index: 10;
    width: 100%;
  }

  &::before {
    border: 2px solid;
    content: '';
    height: 18px;
    left: 11px;
    position: absolute;
    top: calc(50% - 9px);
    width: 18px;
  }

  &::after {
    content: '';
    opacity: 0;
    position: absolute;
    transition-property: background-color;
    transition-duration: 0.15s;
    transition-timing-function: cubic-bezier(0.64, 0, 0.35, 1);
    transform: scale(0);
  }

  ${(props) =>
    props.type === 'checkbox' &&
    css`
      &::before {
        border-color: ${getColorFromTheme(
          props.theme,
          props.theme.components.inputCheck.colors.default
        )};
        border-radius: ${props.theme.components.inputCheck.borderRadius
          .checkbox};
      }
      &::after {
        background-color: ${getColorFromTheme(
          props.theme,
          props.theme.components.inputCheck.colors.selected
        )};
        border: 0;
        height: 16px;
        left: 12px;
        top: calc(50% - 9px);
        width: 16px;
      }
    `};

  ${(props) =>
    props.type === 'radio' &&
    css`
      &::before {
        border-color: ${getColorFromTheme(
          props.theme,
          props.theme.components.inputCheck.colors.default
        )};
        border-radius: ${props.theme.components.inputCheck.borderRadius.radio};
      }
      &::after {
        background-color: ${getColorFromTheme(
          props.theme,
          props.theme.components.inputCheck.colors.selected
        )};
        border-radius: ${props.theme.components.inputCheck.borderRadius.radio};
        height: 10px;
        left: 15px;
        top: calc(50% - 5px);
        width: 10px;
      }
    `};

  svg {
    position: absolute;
  }

  input:focus + div::before {
    outline: 1px solid transparent; /* For Windows high contrast mode. */
  }

  ${(props) =>
    !props.isDisabled &&
    css`
      @media (hover: hover){
        &:hover {
          background-color: ${getColorFromThemeWithOpacity(
            props.theme,
            props.theme.components.inputCheck.colors.hover,
            8
          )};
        }
      }

      &:active {
        background-color: ${getColorFromThemeWithOpacity(
          props.theme,
          props.theme.components.inputCheck.colors.hover,
          32
        )};
        }
      }
    `};

  ${(props) =>
    props.isSelected &&
    css`
      &::before {
        border-color: ${getColorFromTheme(
          props.theme,
          props.theme.components.inputCheck.colors.selected
        )};
      }
      &::after {
        opacity: 1;
        transform: scale(1);
      }
    `}

  ${(props) =>
    !props.isDisabled &&
    props.isSelected &&
    css`
      @media (hover: hover){
        &:hover {
          background-color: ${getColorFromThemeWithOpacity(
            props.theme,
            props.theme.components.inputCheck.colors.selected,
            8
          )};
          }
        }
      }
      &:active {
        background-color: ${getColorFromThemeWithOpacity(
          props.theme,
          props.theme.components.inputCheck.colors.active,
          32
        )};
      }
    `}

    ${(props) =>
    props.isDisabled &&
    css`
      opacity: 0.4;
      cursor: default;
    `}
`;

StyledInputCheck.defaultProps = {
  alignItems: 'center',
  borderRadius: '50%',
  cursor: 'pointer',
  flexShrink: 0,
  justifyContent: 'center',
  height: '40px',
  width: '40px'
};

const StyledInputCheckWrapper: React.FC<InputCheckProps> = styled(
  Box
)<InputCheckProps>``;

StyledInputCheckWrapper.defaultProps = {
  height: '40px'
};

export { StyledInputCheckWrapper };
export default StyledInputCheck;
