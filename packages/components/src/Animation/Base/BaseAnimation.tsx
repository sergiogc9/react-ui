import React from 'react';

import Box, { BoxProps } from 'components/Box';
import withBaseAnimation from './withBaseAnimation';
import { BaseAnimationProps } from './types';

const BaseAnimation: React.FC<BaseAnimationProps> =
  withBaseAnimation<BoxProps>(Box);

export default BaseAnimation;
