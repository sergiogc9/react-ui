import React from 'react';

import { StyledComponentProps } from 'components/types';
import { ComposedGridProps } from 'components/private/utils/composers/types';

type Props = {
  /**
   * The number of explicit columns the grid will use
   */
  readonly columns?: number;
  /**
   * A boolean to change between `1fr` (true) or `auto` (false) for columns width.
   */
  readonly hasEqualColumns?: boolean;
  /**
   * The number of explicit rows the grid will use
   */
  readonly rows?: number;
};

export type GridProps<
  Attrs extends React.HTMLAttributes<any> = React.HTMLAttributes<HTMLDivElement>,
  Ref = any
> = Props & StyledComponentProps<ComposedGridProps, Attrs, Ref>;
