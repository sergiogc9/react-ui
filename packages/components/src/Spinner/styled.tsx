import React from 'react';
import styled from 'styled-components';

import Box from 'components/Box';
import { SpinnerProps } from './types';

const StyledSpinner: React.FC<SpinnerProps> = React.memo(styled(Box)<SpinnerProps>``);

export default StyledSpinner;
