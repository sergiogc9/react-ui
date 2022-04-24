import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';

import { AlertTextProps } from './types';

const StyledAlertText: React.FC<AlertTextProps> = styled(Text)<AlertTextProps>``;

export { StyledAlertText };
