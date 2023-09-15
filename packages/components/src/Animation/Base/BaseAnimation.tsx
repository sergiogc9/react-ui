import Flex, { FlexProps } from 'components/Flex';
import withBaseAnimation from './withBaseAnimation';
import { BaseAnimationComponent } from './types';

const BaseAnimation: BaseAnimationComponent = withBaseAnimation<FlexProps>(Flex as any) as BaseAnimationComponent;

export default BaseAnimation;
