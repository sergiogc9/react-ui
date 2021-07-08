import styled, { css } from 'styled-components';

import Box from 'components/Box';
import aspectSize from './variants/aspectSize';
import variant from './variants/variant';
import { StyledButtonProps } from './types';

const StyledButton: React.FC<StyledButtonProps> = styled(
  Box
)<StyledButtonProps>`
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  ${(props) =>
    props.isLoading &&
    css`
      cursor: not-allowed;
    `}

  ${aspectSize};
  ${variant};
`;

StyledButton.defaultProps = {
  alignItems: 'center',
  border: '1px solid transparent',
  boxSizing: 'border-box',
  cursor: 'pointer',
  fontWeight: 'bold',
  justifyContent: 'center',
  position: 'relative',
  outline: 'none',
  overflow: 'hidden',
  textDecoration: 'none',
  transition: 'all ease 0.3s',
  whiteSpace: 'nowrap'
};

export default StyledButton;
