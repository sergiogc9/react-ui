import { LabelHTMLAttributes } from 'react';

import { FlexProps } from 'components/Flex';
import { ComposedTextProps } from 'components/private/utils/composers';
import { InputProps } from '../types';

export interface InputLabelProps
	extends InputProps,
		ComposedTextProps,
		FlexProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {}
