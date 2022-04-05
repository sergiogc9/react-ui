import { keyframes } from 'styled-components';

import Flex from 'components/Flex';
import { withBaseAnimation } from 'components/Animation/Base';

const SlideDownAnimation = keyframes`
  from {
    transform: translateY(-100%)
  }

  to {
    transform: translateY(0)
  }
`;

const SlideDown = withBaseAnimation(Flex, SlideDownAnimation);

export { SlideDownAnimation };
export default SlideDown;
