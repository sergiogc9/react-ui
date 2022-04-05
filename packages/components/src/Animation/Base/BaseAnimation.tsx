import React from 'react';

import Flex, { FlexProps } from 'components/Flex';
import withBaseAnimation from './withBaseAnimation';
import { BaseAnimationProps } from './types';

const BaseAnimation: React.FC<BaseAnimationProps> = withBaseAnimation<FlexProps>(Flex);

export default BaseAnimation;
