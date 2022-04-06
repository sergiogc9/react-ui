import { TextProps } from 'components/Text';

import { InputCheckProps } from '../types';

export type InputCheckLabelProps = InputCheckProps & TextProps;

export type StyledInputCheckLabelProps = Omit<InputCheckProps, 'aspectSize'> & TextProps;
