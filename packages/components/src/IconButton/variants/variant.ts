import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { IconButtonProps } from 'components/IconButton';

export default (props: StyledProps<IconButtonProps>) => {
  const generateCSS = (variantProp: IconButtonProps['variant']) => ({
    bg:
      props.bg ??
      props.theme.components.iconButton.colors[variantProp!].background.default,
    borderColor: props.borderColor ?? 'transparent',
    color:
      props.color ??
      props.theme.components.iconButton.colors[variantProp!].icon,

    '&:focus-visible': {
      borderColor:
        props.theme.components.iconButton.colors[variantProp!].borderActive ||
        'transparent'
    },

    '@media (hover: hover)': !props.isDisabled && {
      '&:hover': {
        bg:
          props.bg ??
          props.theme.components.iconButton.colors[variantProp!].background
            .hover
      }
    },

    '&:active': !props.isDisabled && {
      bg:
        props.bg ??
        props.theme.components.iconButton.colors[variantProp!].background.active
    }
  });

  return variant({
    prop: 'variant',
    variants: {
      default: generateCSS('default'),
      floating: generateCSS('floating')
    }
  });
};
