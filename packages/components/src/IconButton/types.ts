import React from 'react';

import { BoxProps } from 'components/Box';

type Props = {
  /**
   * The size of the button.
   */
  readonly aspectSize?: 's' | 'm' | 'l';
  /**
   * If true, the button is disabled
   */
  readonly isDisabled?: boolean;
  /**
   * The variant type of the button
   */
  readonly variant?: 'default' | 'floating';
};

export type IconButtonProps = Props &
  BoxProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
