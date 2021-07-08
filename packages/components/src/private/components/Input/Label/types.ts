import { LabelHTMLAttributes } from 'react';

import { BoxProps } from 'components/Box';
import { ComposedTextProps } from 'components/private/utils/composers';
import { InputProps } from '../types';

export type InputLabelProps = InputProps &
  ComposedTextProps &
  BoxProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
