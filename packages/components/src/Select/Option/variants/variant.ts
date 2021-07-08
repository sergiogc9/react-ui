import { StyledProps } from 'styled-components';
import { variant } from 'styled-system';

import { StyledSelectOptionProps } from '../types';

export default (props: StyledProps<StyledSelectOptionProps>) => {
  const generateCSS = (variantProp: StyledSelectOptionProps['variant']) => ({
    color: props.isSelected
      ? props.theme.components.select.option.color[variantProp!].active
      : props.theme.components.select.option.color[variantProp!].default,
    fontWeight: props.isSelected ? 'bold' : 'semibold',
    transitionDuration: '0.15s',
    transitionProperty: 'background-color, color',
    transitionTimingFunction: 'ease-in',

    '&:hover, &:focus': {
      color: props.isSelected
        ? props.theme.components.select.option.color[variantProp!].active
        : props.theme.components.select.option.color[variantProp!].hover,
      backgroundColor:
        props.theme.components.select.option.color[variantProp!].bgHover
    },

    '&:active': {
      color: props.theme.components.select.option.color[variantProp!].active,
      backgroundColor:
        props.theme.components.select.option.color[variantProp!].bgActive
    }
  });

  return variant({
    prop: 'variant',
    variants: {
      neutral: generateCSS('neutral'),
      primary: generateCSS('primary')
    }
  });
};
