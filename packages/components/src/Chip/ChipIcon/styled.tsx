import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';
import variant from './variants/variant';
import location from './variants/location';
import { ChipIconProps } from './types';

const StyledIcon: React.FC<ChipIconProps> = styled(Icon)`
  ${variant}
  ${location}
`;

StyledIcon.defaultProps = {
  position: 'relative',
  aspectSize: 's'
};

export default StyledIcon;
