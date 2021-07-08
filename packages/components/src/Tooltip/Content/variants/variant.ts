import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { TooltipContentProps } from 'components/Tooltip/Content/types';

export default (props: StyledProps<TooltipContentProps>) => {
  const generateCSS = (variantProp: TooltipContentProps['variant']) => ({
    bg:
      props.bg ??
      props.theme.components.tooltip.colors[variantProp!].background ??
      'neutral.900',
    color:
      props.color ??
      props.theme.components.tooltip.colors[variantProp!].text ??
      'neutral.0'
  });

  return variant({
    prop: 'variant',
    variants: {
      dark: generateCSS('dark'),
      light: generateCSS('light')
    }
  });
};
