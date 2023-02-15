import { TextProps } from 'components/Text';

import { InputProps } from '../types';

export interface InputHelperTextProps
	extends InputProps,
		Omit<TextProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'aspectSize'> {}
