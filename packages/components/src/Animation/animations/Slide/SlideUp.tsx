import { keyframes } from 'styled-components';

import Box from 'components/Box';
import { withBaseAnimation } from 'components/Animation/Base';

const SlideUpAnimation = keyframes`
  from {
    transform: translateY(100%)
  }

  to {
    transform: translateY(0)
  }
`;

const SlideUp = withBaseAnimation(Box, SlideUpAnimation);

export { SlideUpAnimation };
export default SlideUp;
