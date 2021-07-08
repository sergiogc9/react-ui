import styled, { css } from 'styled-components';

import Box from 'components/Box';
import aspectSize from './variants/aspectSize';
import variant from './variants/variant';
import { IconButtonProps } from './types';

const StyledIconButton: React.FC<IconButtonProps> = styled(
  Box
)<IconButtonProps>`
  ${(props) =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
      opacity: 0.4;
    `}

  ${aspectSize};
  ${variant};
`;

StyledIconButton.defaultProps = {
  alignItems: 'center',
  borderRadius: '50%',
  borderStyle: 'solid',
  borderWidth: '2px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  flexShrink: 0,
  justifyContent: 'center',
  outline: 'none',
  padding: 0,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all ease 0.3s',
  whiteSpace: 'nowrap'
};

export default StyledIconButton;
