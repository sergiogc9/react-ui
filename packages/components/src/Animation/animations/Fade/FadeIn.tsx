import { keyframes } from 'styled-components';

import Box from 'components/Box';
import { withBaseAnimation } from 'components/Animation/Base';

const FadeInAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const FadeIn = withBaseAnimation(Box, FadeInAnimation);

export { FadeInAnimation };
export default FadeIn;
