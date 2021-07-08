import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { ButtonIconProps } from 'components/Button/Icon/types';

export default (props: StyledProps<ButtonIconProps>) => {
  const generateCSS = (aspectSize: ButtonIconProps['aspectSize']) => ({
    '&:first-child': {
      marginRight: props.theme.components.button.iconMargins[aspectSize!]
    },
    '&:nth-child(2)': {
      marginLeft: props.theme.components.button.iconMargins[aspectSize!]
    },
    width:
      props.size ??
      props.theme.components.icon.sizes[aspectSize === 'l' ? 'm' : aspectSize!]
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
