import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { CounterProps } from '../types';

export default (props: StyledProps<CounterProps>) => {
  const generateCSS = (variantProp: CounterProps['variant']) => ({
    bg: props.bg ?? props.theme.components.counter.colors[variantProp!].bg!,
    color:
      props.color ??
      (props.theme.components.counter.colors[variantProp!].color! ||
        'neutral.0')
  });

  return variant({
    prop: 'variant',
    variants: {
      grey: generateCSS('grey'),
      red: generateCSS('red'),
      blue: generateCSS('blue'),
      green: generateCSS('green'),
      yellow: generateCSS('yellow')
    }
  });
};
