import React from 'react';

import Box, { BoxProps } from 'components/Box';
import withAnimate from './withAnimate';
import { AnimateProps } from './types';

const Animate: React.FC<AnimateProps> = withAnimate<BoxProps>(Box);

export default Animate;
