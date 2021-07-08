import { BoxProps } from 'components/Box';

type Props = {
  /**
   * The size of the input label
   */
  readonly aspectSize?: 'm' | 'l';
  /**
   * If true, the inputCheck is disabled
   */
  readonly isDisabled?: boolean;
  /**
   * True if the inputCheck is checked by default. Use this prop only if the inputCheck is not controlled from outside.
   */
  readonly isDefaultSelected?: boolean;
  /**
   * True if the inputCheck is checked. Using this prop could be controlled from outside.
   */
  readonly isSelected?: boolean;
  /**
   * The label to show at right of the input
   */
  readonly label?: string;
};

export type InputCheckProps = Props &
  BoxProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
