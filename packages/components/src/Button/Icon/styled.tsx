import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';
import aspectSize from './variants/aspectSize';
import { ButtonIconProps } from './types';

const ButtonIcon: React.FC<ButtonIconProps> = styled(Icon)<ButtonIconProps>`
  fill: currentColor;

  ${aspectSize};
`;

ButtonIcon.defaultProps = {
  aspectSize: 'm'
};

const MemoButtonIcon = React.memo(ButtonIcon);
MemoButtonIcon.displayName = 'ButtonIcon';

export default MemoButtonIcon;
