import { keyframes } from 'styled-components';

import Box from 'components/Box';
import { withBaseAnimation } from 'components/Animation/Base';

const SlideDownAnimation = keyframes`
  from {
    transform: translateY(-100%)
  }

  to {
    transform: translateY(0)
  }
`;

const SlideDown = withBaseAnimation(Box, SlideDownAnimation);

export { SlideDownAnimation };
export default SlideDown;
