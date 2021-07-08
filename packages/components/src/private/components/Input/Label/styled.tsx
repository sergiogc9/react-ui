import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import composers from 'components/private/utils/composers';
import Box from 'components/Box';
import StatusColor from '../collaborator/StatusColor';
import { InputLabelProps } from './types';

const InputLabel: React.FC<InputLabelProps> = styled(
  Box
).withConfig<InputLabelProps>({
  shouldForwardProp: (prop) => prop !== 'placeholder'
})`
  ${composers.text}
  ${({ theme, ...props }) => {
    const statusColor = new StatusColor(props, theme);

    return css({
      color: statusColor.getStatusColorWithFallback('default')
    });
  }}
`;

InputLabel.defaultProps = {
  as: 'label',
  color: 'neutral.500',
  cursor: 'inherit',
  fontSize: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  transition: 'all ease-in 0.2s',
  whiteSpace: 'nowrap'
};

export default React.memo(InputLabel);
