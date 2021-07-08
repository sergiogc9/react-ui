import { BoxProps } from 'components/Box';

type Props = {
  /**
   * The position index of the pulse element, starting from 1.
   */
  index: number;
};

export type PulseProps = Props & BoxProps;
