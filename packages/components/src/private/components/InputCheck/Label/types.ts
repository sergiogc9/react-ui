import { ContentProps } from 'components/Content';
import { InputCheckProps } from '../types';

export type InputCheckLabelProps = InputCheckProps & ContentProps;

export type StyledInputCheckLabelProps = Omit<InputCheckProps, 'aspectSize'> &
  ContentProps;
