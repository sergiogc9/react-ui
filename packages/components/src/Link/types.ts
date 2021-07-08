import { ContentProps } from 'components/Content/types';

type Props = {
  /**
   * Link behavior
   */
  readonly behavior?: 'default' | 'opposite';
};

export type LinkProps = Props & ContentProps;
