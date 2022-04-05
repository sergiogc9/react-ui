import { keyframes } from 'styled-components';

import Flex from 'components/Flex';
import { withBaseAnimation } from 'components/Animation/Base';

const FadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const FadeOut = withBaseAnimation(Flex, FadeOutAnimation);

export { FadeOutAnimation };
export default FadeOut;
