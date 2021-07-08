import { keyframes } from 'styled-components';

import Box from 'components/Box';
import { withBaseAnimation } from 'components/Animation/Base';

const FadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const FadeOut = withBaseAnimation(Box, FadeOutAnimation);

export { FadeOutAnimation };
export default FadeOut;
