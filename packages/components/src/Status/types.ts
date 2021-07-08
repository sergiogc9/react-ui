import { BoxProps } from 'components/Box';

type Props = {
  /**
   * The color variant.
   */
  readonly variant?: 'blue' | 'green' | 'grey' | 'red' | 'yellow';
};

export type StatusProps = Props & BoxProps;
