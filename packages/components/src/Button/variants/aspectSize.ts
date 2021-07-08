import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { StyledButtonProps } from 'components/Button/types';

const getButtonPadding = (props: StyledProps<StyledButtonProps>) => {
  if (props.padding) return props.padding;
  if (props.hasIcon === 'left')
    return props.theme.components.button.paddings[props.aspectSize!].leftIcon;
  if (props.hasIcon === 'right')
    return props.theme.components.button.paddings[props.aspectSize!].rightIcon;
  return props.theme.components.button.paddings[props.aspectSize!].default;
};

export default (props: StyledProps<StyledButtonProps>) => {
  const generateCSS = (aspectSize: StyledButtonProps['aspectSize']) => ({
    height: props.height ?? props.theme.components.button.heights[aspectSize!],
    padding: getButtonPadding(props)
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
