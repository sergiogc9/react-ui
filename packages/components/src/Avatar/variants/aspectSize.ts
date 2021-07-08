import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { AvatarProps } from 'components/Avatar/types';

export default (props: StyledProps<AvatarProps>) => {
  const generateCSS = (aspectSize: AvatarProps['aspectSize']) => ({
    width: props.size
      ? props.size
      : props.theme.components.avatar.sizes[aspectSize!],
    height: props.size
      ? props.size
      : props.theme.components.avatar.sizes[aspectSize!],
    '> span': {
      fontSize: props.size
        ? `calc(${props.size} / 2)`
        : props.theme.components.avatar.fontSizes[aspectSize!]
    },
    '> svg': {
      width: props.size
        ? `80%`
        : `${props.theme.components.avatar.iconSizes[aspectSize!]}px`,
      height: props.size
        ? `80%`
        : `${props.theme.components.avatar.iconSizes[aspectSize!]}px`
    }
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
