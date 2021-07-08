import { StyledProps } from 'styled-components';
import { variant } from 'styled-system';

import { ChipIconProps } from '../types';

export default (props: StyledProps<ChipIconProps>) => {
  const generateCSS = (variantProp: ChipIconProps['variant']) => ({
    fill: props.fill ?? props.theme.components.chip.colors[variantProp!].color!
  });

  return variant({
    prop: 'variant',
    variants: {
      blue: generateCSS('blue'),
      grey: generateCSS('grey'),
      green: generateCSS('green'),
      red: generateCSS('red'),
      white: generateCSS('white'),
      yellow: generateCSS('yellow')
    }
  });
};
