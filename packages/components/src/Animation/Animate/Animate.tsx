import Flex from 'components/Flex';
import withAnimate from './withAnimate';
import { AnimateComponent } from './types';

const Animate: AnimateComponent = withAnimate(Flex) as AnimateComponent;

export default Animate;
