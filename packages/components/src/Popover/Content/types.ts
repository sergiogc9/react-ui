import { BoxProps } from 'components/Box';
import { PopoverWrapperProps } from '../Wrapper';

export type PopoverContentProps = Omit<PopoverWrapperProps, 'render'> &
  BoxProps;
