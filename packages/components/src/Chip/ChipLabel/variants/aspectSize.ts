import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';
import { ChipLabelProps } from '../types';

export default (props: StyledProps<ChipLabelProps>) => {
  const generateCSS = (aspectSize: ChipLabelProps['aspectSize']) => ({
    fontSize: props.theme.components.chip.sizes.chip[aspectSize!].fontSize
  });

  return variant({
    prop: 'aspectSize',
    variants: {
      s: generateCSS('s'),
      m: generateCSS('m')
    }
  });
};
