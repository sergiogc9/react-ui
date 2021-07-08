import styled from 'styled-components';

import Box from 'components/Box';
import location from '../variants/location';
import variant from './variants/variant';
import aspectSize from './variants/aspectSize';
import { ActionWrapperProps } from './types';

const ActionWrapper: React.FC<ActionWrapperProps> = styled(
  Box
)<ActionWrapperProps>`
  ${variant}
  ${aspectSize}
  ${location}
`;

ActionWrapper.defaultProps = {
  transition: 'background-color 0.15s ease-in',
  position: 'relative',
  borderWidth: 0,
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center'
};

export default ActionWrapper;
