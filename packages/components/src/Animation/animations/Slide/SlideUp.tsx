import { keyframes } from 'styled-components';

import Flex from 'components/Flex';
import { withBaseAnimation } from 'components/Animation/Base';

const SlideUpAnimation = keyframes`
  from {
    transform: translateY(100%)
  }

  to {
    transform: translateY(0)
  }
`;

const SlideUp = withBaseAnimation(Flex, SlideUpAnimation);

export { SlideUpAnimation };
export default SlideUp;
