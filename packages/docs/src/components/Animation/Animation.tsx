import { keyframes } from 'styled-components';
import { Animation, Button } from '@sergiogc9/react-ui';

const CustomAnimation = keyframes`
  from {
    transform: scale(1) translateX(0);
  }

  50% {
    transform: scale(1.5) translateX(75px);
  }

  to {
    transform: scale(1) translateX(150px);
  }
`;

const AnimatedButton = Animation.withBaseAnimation(
  Button,
  Animation.FadeInAnimation
);

const CustomAnimatedButton = Animation.withBaseAnimation(
  Button,
  CustomAnimation
);

const ButtonAnimate = Animation.withAnimate(Button);

export { AnimatedButton, ButtonAnimate, CustomAnimatedButton, CustomAnimation };
