import { variant } from 'styled-system';
import { Theme } from '@sergiogc9/react-ui-theme';

import { ButtonTextProps } from 'components/Button/Text/types';

export default (theme: Theme) => {
  const generateCSS = (aspectSize: ButtonTextProps['aspectSize']) => ({
    fontSize: theme.components.button.fontSizes[aspectSize!],
    lineHeight: theme.components.button.lineHeights[aspectSize!]
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
