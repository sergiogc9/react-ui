import React from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';
import { SpinnerProps } from './types';

const StyledSpinner: React.FC<SpinnerProps> = React.memo(styled(Flex)<SpinnerProps>``);

export default StyledSpinner;
