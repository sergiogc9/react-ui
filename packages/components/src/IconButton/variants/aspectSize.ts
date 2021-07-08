import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { IconButtonProps } from 'components/IconButton';

export default (props: StyledProps<IconButtonProps>) => {
  const generateCSS = (aspectSize: IconButtonProps['aspectSize']) => ({
    height:
      props.height ??
      props.size ??
      props.theme.components.iconButton.sizes[aspectSize!],
    width:
      props.height ??
      props.size ??
      props.theme.components.iconButton.sizes[aspectSize!]
  });

  return variant({
    prop: 'aspectSize',
    variants: {
      s: generateCSS('s'),
      m: generateCSS('m'),
      l: generateCSS('l')
    }
  });
};
