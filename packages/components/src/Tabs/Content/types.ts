import { PropsWithChildren } from 'react';

import { BoxProps } from 'components/Box';

export type Props = {
  /**
   * The children of the content
   */
  readonly children?: React.ReactNode;
  /**
   * The id of the content
   */
  readonly id: string;
};

export type TabsContentProps = PropsWithChildren<Props & BoxProps>;
