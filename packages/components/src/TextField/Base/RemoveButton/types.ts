import { BoxProps } from 'components/Box';
import { TextFieldBaseProps } from '../types';

export type RemoveButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & Omit<BoxProps, 'onClick'> &
  Pick<TextFieldBaseProps, 'isDisabled' | 'value'>;
