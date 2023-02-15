import { TextProps } from 'components/Text';

import { InputCheckProps } from '../types';

export interface InputCheckLabelProps
	extends Omit<TextProps, 'aspectSize'>,
		Pick<InputCheckProps, 'aspectSize' | 'isDisabled' | 'type'> {}

export interface StyledInputCheckLabelProps
	extends TextProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
		Pick<InputCheckProps, 'isDisabled' | 'type'> {}
