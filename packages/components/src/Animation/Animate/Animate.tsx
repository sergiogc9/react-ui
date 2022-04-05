import React from 'react';

import Flex, { FlexProps } from 'components/Flex';
import withAnimate from './withAnimate';
import { AnimateProps } from './types';

const Animate: React.FC<AnimateProps> = withAnimate<FlexProps>(Flex);

export default Animate;
