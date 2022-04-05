import { keyframes } from 'styled-components';

import Flex from 'components/Flex';
import { withBaseAnimation } from 'components/Animation/Base';

const FadeInAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const FadeIn = withBaseAnimation(Flex, FadeInAnimation);

export { FadeInAnimation };
export default FadeIn;
