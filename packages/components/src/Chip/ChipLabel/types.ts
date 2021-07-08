import React from 'react';

import { ContentProps } from 'components/Content';
import { ChipGroupProps } from '../types';

type Props = {
  /**
   * Choose one size
   */
  readonly aspectSize?: ChipGroupProps['aspectSize'];
  /**
   * Choose the color variant
   */
  readonly variant?: ChipGroupProps['variant'];
};

export type ChipLabelProps = Props &
  ContentProps<React.HTMLAttributes<HTMLSpanElement>>;
